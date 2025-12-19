const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            autoIndex: true,
            maxPoolSize: 10
        });

        console.log("Connected successfully.");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1);
    }
}

module.exports = connectMongo;
