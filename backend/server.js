import express from "express"
import cors from "cors"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import router from './router.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
console.log('uri');
mongoose.connect(uri, { useNewUrlParser: true }
).catch((err) => {
    console.log(err);
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

app.use(router);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});