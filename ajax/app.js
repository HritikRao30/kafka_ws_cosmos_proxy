const kafka = require('kafka-node');
const WebSocket = require('ws');
const express = require('express');
const app = express();
const server = require('http').createServer(app); //three is also a web socketr connection running on top of this http server
const wss = new WebSocket.Server({ server: server });  //this ws is using the http server created by us the http server is listening to port 3000
const consumerRouter = require('./routes/consumer');
const comm = require('./consumer_communications/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/consumer', consumerRouter);

wss.on('connection', (ws) => {
    let consumer = comm.listen_data();
    if (consumer) {
        consumer.on('message', function (message) {
            const consumerdata = message.value;
            console.log(consumerdata);
            ws.send(consumerdata);
        })
    }
    ws.on('message', () => {
        console.log(String.fromCharCode(...data));
    })
    ws.on('error', (err) => {
        console.log(err);
    })
});



app.get('/', (req, res) => {

    res.send("Hello World");

})



server.listen(3012, () => {
    console.log("ws kafka server listening at port 3012");

})