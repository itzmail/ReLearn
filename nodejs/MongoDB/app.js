const { MongoClient, ObjectID } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb://127.0.0.1:27017";
const dbName = "study_mongo";

const client = new MongoClient(uri, {
    useUnifiedTopology: true
});

client.connect((error, client) => {
    if (error) {
        return console.error("Koneksi gagal");
    }

    // Pilih database
    const db = client.db(dbName);

    // Menambahkan 1 data ke collection mahasiswa

    /* db.collection('mahasiswa').insertOne(
        {
            nama: "Ismail",
            email: "ismail@gmail.com"
        },
        (error, result) => {
            if (error) {
                return console.log("gagal menambahkan data")
            }

            console.log(result);
        }
    ) */

    // Menambahkan lebih dari 1
    /* db.collection('mahasiswa').insertMany(
        [
            {
                nama: "Nuralam",
                email: "Mantapjiwa@jiwa.com"
            },
            {
                nama: "Oke Oce",
                email: "oke@jiwa.com"
            },
        ],
        (error, result) => {
            if (error) {
                return console.log("gagal menambahkan data")
            }

            console.log(result);
        }
    ) */

    // Menampilkan semua data yang ada di collection mahasiswa
    /* db.collection('mahasiswa').find().toArray((err, result) => {
        console.log(result);
    }); */

    // Menampilkan semua data yang ada di collection mahasiswa berdasarkan kriteria
    /* db.collection('mahasiswa').find({_id: ObjectId("62f899d338a5563c88143c43")}).toArray((err, result) => {
        if(err) {
            return console.error(err)
        }
        console.log(result);
    }); */

    // Mengubah 1 data
    /* const updatePromise = db.collection('mahasiswa').updateOne(
        {
            _id: ObjectID('62f899155ba6f43a7c3e9c31')
        }, {
            $set: {
                email: "Avip@gmail.com"
            }
        }
    )
    
    updatePromise.then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    }) */

    // Delete 1 data
    db.collection('mahasiswa').deleteMany({
        nama: "Oke Oce"
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.error(err)
    })

})