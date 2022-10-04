import request from 'request';
require("dotenv").config();

let sendNotification = (user) => {
    return new Promise((resolve, reject) => {
        try{
            // ?chat_id=-856300807&text=WelcomeNewUser @itzmail
            let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
            let TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID;
            console.log(TELEGRAM_BOT_TOKEN);

            let data = {
                chat_id: TELEGRAM_GROUP_ID,
                parse_mode: "HTML",
                text: `
Full Name : <b>${user.fullName}</b>
Email : ${user.email}
Description : <i>${user.description}</i>  
                `
            };

            request({
                uri: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
                method: "POST",
                json: data
            }, function(err, res, body) {
                if(!err) {
                    resolve("Done!")
                } else {
                    console.log(err);
                    reject(err);
                }
            })
        } catch(e) {
            reject(e);
        }
    })
}

let sendAGIF = () => {
    return new Promise((resolve, reject) => {
        try{
            // ?chat_id=-856300807&text=WelcomeNewUser @itzmail
            let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
            let TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID;
            console.log(TELEGRAM_BOT_TOKEN);

            let data = {
                chat_id: TELEGRAM_GROUP_ID,
                parse_mode: "HTML",
                animation: "https://media1.giphy.com/media/fA7rLtaJDIWEzU57CT/giphy.gif?cid=790b7611e74713e89546ae4fdff3ec0a8611922c473f16dd&rid=giphy.gif&ct=g",
                caption: "<b>Check out</b> my <i>new gif</i>"
            };

            request({
                uri: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendAnimation`,
                method: "POST",
                json: data
            }, function(err, res, body) {
                if(!err) {
                    resolve("Done!")
                } else {
                    console.log(err);
                    reject(err);
                }
            })
        } catch(e) {
            reject(e);
        }
    })
}

export {
    sendNotification,
    sendAGIF,
};