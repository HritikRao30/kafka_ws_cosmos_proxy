const express = require('express');
const app = express();
const { routes } = require("./routes");
const { create_proxy } = require("./proxy");
const port = 4001;

app.get('/', (req, res) => {
    res.send("Hello from Express App");
})

create_proxy(app, routes);

app.listen(port, () => {
    console.log("the API gateway is listening at 4001");
});