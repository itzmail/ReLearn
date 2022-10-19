import Users from "../models/userModel.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const getUsers = async(req, res) => {
    try{
        const users = await Users.findAll({
            attributes: ["id", "name", "email"]
        });
        res.json({data: users});
    } catch(e) {
        console.log(`error get users: ${e}`);
    }
}

export const Register = async(req, res) => {
    const {name, email, password, confPassword} = req.body;
    if(password !== confPassword) return res.status(400).json({
        status: "failed",
        message: "Password dan Confirm Password tidak cocok"
    })

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    try {
        await Users.create({
            name: name,
            email: email,
            password: hashPassword
        });
        res.json({
            status: "success",
            message: "Register Berhasil"
        })
    } catch(e) {
        console.log(`Error Create Users ${e}`);
    }
}

export const Login = async(req, res) => {
    try{
        const user = await Users.findAll({
            where: {
                email: req.body.email
            }
        });
        const match = await bcrypt.compare(req.body.password, user[0].password)
        // Jika password ngga cocok dengan yang ada di database
        if(!match) return res.status(400).json({
            status: "failed",
            message: "Password salah!"
        });

        const userId = user[0].id;
        const name = user[0].name;
        const email = user[0].email;
        const accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET, {
            expiresIn: '20s'
        });
        const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET, {
            expiresIn: '1d'
        });
        await Users.update({refresh_token: refreshToken}, {
            where: {
                id: userId
            }
        });
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            maxAge: 24 * 60 * 60 * 1000,
            // secure: true => kalau pakai https 
        });
        res.json({
            status: "success",
            accessToken
        })
    }catch(e) {
        res.status(404).json({
            status: 'failed',
            message: "Email tidak ditemukan!"
        })
    }
} 