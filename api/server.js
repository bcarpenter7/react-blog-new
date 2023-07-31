const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Post = require('./models/post.js')
const cors = require('cors')



require('dotenv').config()

app.use(express.json());
app.use(cors())


mongoose.connect(process.env.DB_URL)
mongoose.connection.once('open', () => {
    console.log('connected to mongod...');
});



const apiRouter = require('../api/routes/api')
const authRoutes = require('../api/routes/user')


app.use('/api', apiRouter)
app.use('/api', authRoutes)

app.listen(3000, () => {
    console.log('listening...');
});

