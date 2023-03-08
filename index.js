import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload';
import router from './router.js';

const PORT = 5000;
const DB_URL = 'mongodb://user:user@ac-wtnufcb-shard-00-00.0coo4sf.mongodb.net:27017,ac-wtnufcb-shard-00-01.0coo4sf.mongodb.net:27017,ac-wtnufcb-shard-00-02.0coo4sf.mongodb.net:27017/?ssl=true&replicaSet=atlas-tisodx-shard-0&authSource=admin&retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api', router)
app.use(fileUpload({}))


async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}
startApp()