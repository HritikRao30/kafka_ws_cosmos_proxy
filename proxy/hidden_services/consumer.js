const express = require('express');
const app = express();
const port = 3008;

app.get('/getConsumer', (req, res) => {
    res.send("Hello from consumer!!");
})


app.listen(port, () => {
    console.log("the consumer is listening at 3008");
});