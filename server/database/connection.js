const mongoose= require('mongoose');
const connectDB=async()=>{
    try{
        //mongo connection string
        const con=await mongoose.connect(process.env.MONGO_URI,{
         useNewUrlParser: true,
        //  useUnifiedToplogy:true,
        //  useFindAndModify: false,
        //  useCreateIndex:true   
        })

        console.log(`MongoDB Connected: ${con.connect.host}`);

    }
    catch(err){
        console.log(err);
        process.exit(1);

    }
}
module.exports = connectDB