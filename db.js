import mongoose from "mongoose";

const conn = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName: 'lenslight_tr',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => { console.log("Connected to DB") }).catch(err => { console.log(err) });
}

export default conn;