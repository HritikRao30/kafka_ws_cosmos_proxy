const express = require('express');
const app = express();
const port = 3007;

app.get('/getProducer', (req, res) => {
    res.send("Hello from producer!!");
})


app.listen(port, () => {
    console.log("the express server is listening at 3007");
});