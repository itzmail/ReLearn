use belajar

db.dropDatabase()
db.hostInfo()
db.version()
db.stats()

// method collection
db.getCollectionNames()
db.getCollection("products")
db.getCollectionInfos()

// membuat collection
db.createCollection("products")
db.createCollection("customers")
db.createCollection("orders")

// Insert Data tiap collection
db.customers.insertOne({
    _id: "ismail",
    name: "Ismail Nur Alam"
})

db.customers.deleteOne({_id: "Ismail"})
db.customers.find()

db.products.insertMany(
    [
        {
            _id: "p001",
            name: "Indomie",
            price: new NumberLong(3500)
        },
        {
            _id: "p002",
            name: "Mie Sedap",
            price: new NumberLong(3500)
        },
        {
            _id: "p003",
            name: "Supermie",
            price: new NumberLong(3500)
        }
    ]
)

db.products.deleteMany({
    $or: [
        {_id: "p001"},
        {_id: "p002"},
        {_id: "p003"}
    ]
})

db.products.find()

db.orders.insertOne({
    _id: new ObjectId(),
    orderDate: new Date(),
    total: new NumberLong("10000"),
    items: [
        {
            product_id: "p001",
            price: new NumberLong(3500),
            quantity: new NumberInt("2")
        },
        {
            product_id: "p002",
            price: new NumberLong(3500),
            quantity: new NumberInt("1")
        }
    ]
})

db.orders.find()

// Query Data
db.orders.find({"items.product_id": "p001"})
db.products.find({"_id": "p002"})
db.customers.find({"_id": "ismail"})

// Comparison Query Operator
// kita masukkan dulu data ke collection product

db.products.updateMany(
    { _id: { $in: ["p001", "p002", "p003"] } },
    { $set: { category: "food" } }
)

db.customers.find({
    _id: {
        $eq: "ismail"
    }
})

db.products.insertMany([
    {
        _id: "p004",
        name: "Laptop Asus Vivobook",
        price: new NumberLong(5000000),
        category: "laptop"
    },
    {
        _id: "p005",
        name: "Samsung Galaxy s23",
        price: new NumberLong(4000000),
        category: "handphone"
    },
])

db.products.find()

/*
SELECT *
FROM products
WHERE category IN ('handphone', 'laptop')
AND price > 1000;
*/
db.products.find({
    category: {
        $in: ["handphone", "laptop"]
    },
    price: {
        $gt: 1000
    }
})

use belajar

db.products.find({
    $or: [
        {category: "food"},
        {category: "laptop"}
    ]
})

db.product.find(
    {
        $nor: [
            {category: "laptop"}
        ]
    }
)

db.products.find({
    $and: [
        {category: "laptop"},
        {price: {$gt: 10000}}
    ]
})

db.products.find({
    $and : [
        {
            category: {
                $type: "string"
            }
        },
        {
            price: {
                $type: ["long", "int"]
            }
        }]
})

// Evaluation query operator

db.customers.insertOne({
    _id: 'joko',
    name: "joko",
})

db.customers.find({
    $expr: {
        $eq: ["$_id","$name"] // nama field _id dan name harus sama
    }
})

// jsonSchema query

db.products.find({
    $jsonSchema: {
       required: ["name", "price"],
    }
})

db.products.find({
    $jsonSchema: {
        required: ["name", "price"],
        properties: {
            name: {
                type: "string"
            },
            price: {
                type: "number"
            }
        }
    }
})

// Mod query operator
db.products.find({
    $and: [
        {
            price: {
                $mod: [5, 0]
            }
        },
        {
            price: {
                $mod: [100000, 0]
            }
        }
    ]
})

// Regex query operator
db.products.find({
    name: {
        $regex: /top/,
        $options: "i"
    }
})

// Where query operator
db.products.find({
    $where: () => {
        return this.price.toNumber() * 10 > 50000
    }
});

use belajar

db.products.insertMany([
    {
        name: "Laptop",
        price: new NumberLong(15000000),
        category: "Elektronik",
        tags: ["laptop", "computer"]
    },
    {
        name: "Mouse",
        price: new NumberLong(150000),
        category: "Elektronik",
        tags: ["mouse", "computer"]
    },
    {
        name: "Buku",
        price: new NumberLong(200000),
        category: "Stationary",
        tags: ["buku", "tulis"]
    }
])

db.products.find({
    tags: {
        $all: ["laptop", "computer"]
    }
})

db.products.find({
    tags: {
        $elemMatch: {
            $eq: "laptop",
            $eq: "computer"
        }
    }
})

db.products.find({
    tags: {
        $size: 2
    }
})
