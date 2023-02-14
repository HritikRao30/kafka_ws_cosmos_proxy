const express = require('express');
const WebSocket = require('ws');
const app = express();
const port = 3005;  //client app

app.get('/subscribe', (req, res) => {
    res.send("Hello from subscriber!!");
})

const readline = require('readline');

const ws = new WebSocket("ws://localhost:3010");

let timer = null;

const timer_started = () => {

}

ws.on('to', () => {
    console.log('Timer started!');
    timer = setTimeout(() => {
        ws.close();
        console.log('Sorry timeout!');
    }, 10000)
})


const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
const wrapper = (q) => {
    return new Promise((resolve, reject) => {
        rl.question(q, (input) => {
            resolve(input);
        });
    })
}

const keep_alive = () => {
    clearTimeout(timer);
    ws.emit('to');
}

const readit = async () => {
    try {
        ws.emit('to');
        const input = await wrapper("Give input to server!!");
        ws.send(`The message from client is: ${input}`);
        console.log(`Input to the server was:${input}`);

        const alive = await wrapper("Do you want to continue?");
        keep_alive();

        if (alive == 'yes') {

            console.log("Yes continue");

            await readit();

        }

        else {

            rl.close();

            // process.exit(1);

        }

    } catch (err) {

        console.log(`Error `, err);

        await readit();

    }

    return 1;

};

readit();

ws.on('open', () => {

    // console.log('Connection Established!');

});

ws.on('ping', (data) => {

    // console.log('Connection Established!');

    // console.log(String.fromCharCode(...data));

    // ws.pong('CLIENT: PONG');

});

ws.on('message', (data) => {

    console.log(`message from server ${data}`);

});

ws.on('close', () => {

    console.log('Connection closed!');

    rl.close();

    // process.exit(1);

});

ws.on('close', () => {

    console.log('Connection closed!');

    rl.close();

    // process.exit(1);

});

ws.on('error', (err) => {

    console.log(err);

});

app.listen(port, () => {
    console.log("the ws client is listening at 3005");
});
