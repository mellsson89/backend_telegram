const mongoose = require('mongoose');

const connectDb = async () => {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log('Database connection successful!')
}

module.exports=connectDb;