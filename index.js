const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const app = express();

const test = "BIg BVIg cock";
const port = 1337;

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.post('/post', (req, res) => {
    console.log(req.body)
    res.send(200, 'pog')
})

app.get('/', (req,res) => {
    console.log(req.body)
    res.send('yo')})

app.listen(port, () => {
    console.log('cock');
});