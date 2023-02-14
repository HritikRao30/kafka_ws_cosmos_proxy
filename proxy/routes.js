const routes = [
    {
        url: '/consumer',
        proxy: {
            target: "http://localhost:3008/getConsumer",
            changeOrigin: true,
            pathRewrite: {
                [`^/consumer`]: ''
            }
        }
    },
    {
        url: '/producer',
        proxy: {
            target: "http://localhost:3007/getProducer",
            changeOrigin: true,
            pathRewrite: {
                [`^/producer`]: ''
            }
        }
    }
    ,
    {
        url: '/subscribe',
        proxy: {
            target: "http://localhost:3005/",
            changeOrigin: true,
            pathRewrite: {
                [`^/subscribe`]: ''
            }
        }
    }
    ,
    {
        url: '/subscribe/services',
        proxy: {
            target: "http://localhost:3005",
            changeOrigin: true,
            pathRewrite: {
                [`^/subscribe`]: ''
            }
        }
    }
];

exports.routes = routes;