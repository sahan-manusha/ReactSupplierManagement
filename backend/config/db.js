const mongoose = require('mongoose');

const dburl = "mongodb+srv://athukorala:5436@cluster0.ad8esyp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


mongoose.set("strictQuery", true,"useNewUrlParser",true);

const connection = async () => {
    try {
        
        await mongoose.connect(dburl);
        console.log("connected to db");

    } catch (e) {
        console.error(e.message);
        process.exit();
    }
};

module.exports = connection;



