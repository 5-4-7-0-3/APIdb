import mongoose from "mongoose";
import {
    MONGO_DB,
    MONGO_HOSTNAME,
    MONGO_PASSWORD,
    MONGO_PORT,
    MONGO_USERNAME,
    options,
} from "./config";
let url: string;

if (MONGO_DB != undefined) {
    url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
} else {
    url = `mongodb+srv://Freak:5t4r3e2w1q@api.hngeh.mongodb.net/test?authSource=admin&replicaSet=atlas-5z5tvk-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true`;
}
function setupDb() {
    main().catch((err) => console.log(err));

    async function main() {
        await mongoose.connect(url, options);
        console.log("MongoDB is connected");
    }
}

export { setupDb };
