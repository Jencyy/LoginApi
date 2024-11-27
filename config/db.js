import mongoose from "mongoose";

const db = mongoose.connect('mongodb+srv://jencysodvadiya:dm4XfDiQB3SHgHZe@authcluster.wrxod.mongodb.net/LoginApi').then((res) => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err);
})

export default db;
// mongodb://localhost:27017/ERD
// mongodb+srv://jencysodvadiya:dm4XfDiQB3SHgHZe@authcluster.wrxod.mongodb.net/