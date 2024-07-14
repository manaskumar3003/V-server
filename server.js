const express = require('express');
const mongoose = require('mongoose')
const cookiePaser = require('cookie-parser')
const cors = require('cors')

const port = 5000

const app = express();
app.use(express.json());
app.use(cors())



app.get('/', (req, res) => {
    res.json({ msg: "example" })
})



app.listen(port, () => {
    console.log('started')
})


//user route 
app.use('/user', require('./routes/useRouter'))
app.use('/blog', require('./routes/blogRouter'))



//mongodb connect 
const URI = 'mongodb://localhost:27017/vedarga';
console.log("mongo db locally") //shows undefined ,learn to attach .env files
mongoose.connect(URI).then(() => { console.log("mongodb connected successfully") })
    .catch(err => {
        console.log(err)
    })