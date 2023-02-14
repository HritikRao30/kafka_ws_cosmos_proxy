const kafka = require('kafka-node');


exports.get_data = (topic) => {
    try {
        console.log("Kafka consumer is booting up");
        const Consumer = kafka.Consumer;
        const client = new kafka.KafkaClient('localhost:2181');
        let consumer = new Consumer(
            client,
            topic,
            {
                autoCommit: true,
                fetchMaxWaitMs: 1000,
                fetchMaxBytes: 1024 * 1024,
                encoding: 'utf8',
                fromOffset: false
            }
        );

        return new Promise((resolve, reject) => {
            var batch = [];
            consumer.on('message', function (message) {
                console.log("alive");
                const consumerdata = message.value;
                batch.push(consumerdata);
                console.log(batch);
                console.log(batch.length);
                if (batch.length >= 2) {
                    console.log("resolved");
                    resolve(batch);
                }
            });
            consumer.on('error', function (err) {
                reject(err);
            });
        })
    } catch (e) {
        console.log(e);
    }
}

exports.listen_data = () => {
    try {
        console.log("Kafka consumer is booting up");
        const Consumer = kafka.Consumer;
        const client = new kafka.KafkaClient('localhost:2181');
        let consumer = new Consumer(
            client,
            [{ topic: 'feed4', partition: 0 }],
            {
                autoCommit: true,
                fetchMaxWaitMs: 1000,
                fetchMaxBytes: 1024 * 1024,
                encoding: 'utf8',
                fromOffset: false
            }
        );
        // consumer.on('message', function (message) {
        //     const consumerdata = message.value;
        // })
        consumer.on('error', function (err) {
            console.log("error!!")
        })
        return consumer;
    } catch (e) {
        console.log(e);
        return null;
    }
}