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