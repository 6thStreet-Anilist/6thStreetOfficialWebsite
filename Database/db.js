const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://localhost:27017';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const client = new MongoClient(uri, options);

client.connect((err) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log('Connected to Database');
});
