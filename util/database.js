// const MongoClient = require('mongodb').MongoClient;
// const uri = 'mongodb+srv://freak2810:Sheena&mani01@node-js-course.jvuac.mongodb.net/test?retryWrites=true&w=majority';
// const client = new MongoClient(uri, { useNewUrlParser: true });

// const mongoConnect = (callback) => {
//   client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
//     callback(client);
//   });
// };

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://freak2810:Sheena&mani01@node-js-course.jvuac.mongodb.net/shop?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('MongoDB connected!!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw (err);
    });
};

const getDb = () => {
  if (_db) return _db;
  throw 'No Databases Found!!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
