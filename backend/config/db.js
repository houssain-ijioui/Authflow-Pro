import mongoose from "mongoose";


class DatabaseConnection {
    constructor(mongoUri, dbName) {
        this.mongoUri = mongoUri;
        this.dbName = dbName;
    }

    async connect() {
        try {
            await mongoose.connect(this.mongoUri, {
                dbName: this.dbName
            });
            console.log("DB Connected");
        } catch (error) {
            console.log("DB Error", error);
        }
    }
}

export default DatabaseConnection;