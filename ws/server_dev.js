const WebSocket = require('ws');

const express = require('express');

const app = express();           //this http server is having both an express app running as the app handler and this looks after the http part

const server = require('http').createServer(app); //three is also a web socketr connection running on top of this http server

const wss = new WebSocket.Server({ server: server });  //this ws is using the http server created by us the http server is listening to port 3000



// const wss = new WebSocket.Server({ port: 8080 });

var t = 1;
const dd = async (gap) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        }, gap * 1000);
    })
}
const consume_data = async (ws) => {  //we are extending the ws class that has an event emitter working with events in node js
    let gap = Math.floor(Math.random()) + 1;
    let arr = ['node.js', 'angular', 'react', 'kafka'];
    let indx = Math.floor(Math.random() * 4);
    await dd(gap);
    ws.emit('consumed', arr[indx]);
    await consume_data(ws);
}
wss.on('connection', (ws) => {

    let timer = null;
    consume_data(ws);   //this will keep happening asyn fashion we dont need to interrupt anything
    ws.ping('Ping from Server');
    // ws.on('timeout', () => {
    //     console.log('Timer started!');
    //     timer = setTimeout(() => {
    //         ws.close();
    //         console.log('Sorry timeout!');
    //     }, 10000)

    // })

    // ws.emit('timeout');

    ws.on('message', (data) => {

        // clearTimeout(timer);

        console.log(String.fromCharCode(...data));

        // ws.emit('timeout');

    })

    ws.on('consumed', (data) => {
        ws.send(data);
        console.log(String.fromCharCode(...data));
    })

    ws.on('error', (err) => {

        console.log(err);

    })

});



app.get('/', (req, res) => {

    res.send("Hello World");

})



server.listen(3011, () => {
    console.log("ws dev server listening at port 3011");
})