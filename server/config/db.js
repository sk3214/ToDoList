const mongoose = require('mongoose');


const connectDB = async()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`DB connection successful on host ${connect.connection.host}`);
    }catch(err){
        console.log(`Error in connection of DB: ${err}`);
        process.exit();
    }
}

module.exports = connectDB