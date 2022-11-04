const express = require('express');
const app = express();

const port = 1337;


app.post('/', (req, res) => {
    console.log('Cock');
})

app.listen(port, () => {
    console.log('cock');
});