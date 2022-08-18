import express from 'express';
import dotenv from 'dotenv';
import conn from './db.js';
import pageRoutes from './routes/pageRoutes.js'
import photoRoute from './routes/photoRoute.js'

dotenv.config();

//conncet to db
conn();

const app = express();

const port = process.env.PORT;
//ejs is a templating engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('public'));

app.use(express.json())


app.use('/', pageRoutes);
app.use('/photos', photoRoute);
// app.get("/", (req, res) => res.render("index"));
// app.get("/about", (req, res) => res.render("about"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

