const path = require('path');
const express = require('express');
const app = express();

const port = 1337;

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'Host.html'));
});

app.listen(port, () => {
    console.log('cock');
});