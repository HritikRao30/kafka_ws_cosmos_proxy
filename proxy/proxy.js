const { createProxyMiddleware } = require("http-proxy-middleware");

const create_proxy = (app, routes) => {
    routes.forEach(r => {
        app.use(r.url, createProxyMiddleware(r.proxy));
    });
};

exports.create_proxy = create_proxy;