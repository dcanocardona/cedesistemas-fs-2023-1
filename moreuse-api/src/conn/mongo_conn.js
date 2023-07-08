const mongoose = require('mongoose');

const uri = process.env.MONGO_DB;

const conn = async () => {
  await mongoose.connect(uri);
  console.log('connection mongo success');
}

conn().catch(error => console.error('Error connecting with mongo', error));




