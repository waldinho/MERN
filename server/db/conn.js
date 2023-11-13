// const { MongoClient, ServerApiVersion } = require("mongodb");

// const Db = process.env.ATLAS_URI;
// const client = new MongoClient(Db, {
//     serverApi: {
//       version: ServerApiVersion.v1,
//       strict: true,
//       deprecationErrors: true,
//     }
//   });
 
// let _db;
 
// module.exports = {
//   connectToServer: async function (callback) {
//     client.connect()
//     _db = client.db('db');
//     const count = await _db.collection('employees').countDocuments()
//     console.log('count: ', count);
//   },
 
//   getDb: function () {
//     return _db;
//   },
// };

const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

let _db;

module.exports = {
    connectToServer: async function () {
        try {
            const db = await client.connect();
            // Verify we got a good "db" object
            if (db) {
                _db = db.db("db");
                console.log("Successfully connected to MongoDB.");
            }
            return _db;
        } catch (err) {
            throw err;
        }
    },

    getDb: function () {
        return _db;
    },
};