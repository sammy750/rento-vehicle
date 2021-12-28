const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const Data = require('./models/dataSchema');
global.bodyParser = require('body-parser');

dotenv.config({ path: './.env' })

const dbUrl =  process.env.DB_URL || 'mongodb://localhost:27017/rento';

mongoose.connect(dbUrl , {
    useNewUrlParser: true,
  //  useCreateIndex: true,
    useUnifiedTopology: true,
   // useFindAndModify: false
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '50mb',
    parameterLimit: 100000
 }))

// app.post("/stored", async (req , res)=>{

//    // const { id } = req.body;
//     data = new Data(req.body);
//     const data = await Data.find({})
//     await data.save();
//     res.send("rento")
// })

// app.post('/stored', (req, res) => {
//     console.log(req.body);
//     db.collection('rento-app').insertOne(req.body, (err, data) => {
//         if(err) return console.log(err);
//         res.send(('saved to db: ' + data));
//     })
// });

app.post('/stored', (req, res) => {
    console.log(req.body);
    db.collection('rentalData').insertOne(req.body, (err, data) => {
       if (err) return console.log(err);
       res.send(('saved to db: ' + data));
    })
 });

const PORT = process.env.PORT || 8080

app.listen(8080, () => {
    console.log(`running on ${PORT}`)
})