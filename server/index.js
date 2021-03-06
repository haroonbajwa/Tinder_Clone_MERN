import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'
import dotenv from 'dotenv'

// App config
const app = express();
dotenv.config();
const port = process.env.PORT || 8001


// Middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// API endpoints
app.get("/", (req, res) => res.status(200).send("Hello World...!"));

app.post("/tinder/cards", (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard, (err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }

    })
})

app.get("/tinder/cards", (req, res) => {
    Cards.find((err, data) => {
        if(err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }

    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost: ${port}`));