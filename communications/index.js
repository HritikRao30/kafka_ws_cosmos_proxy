const kafka = require('kafka-node');
exports.send_data = (payload) => {
    try {
        const Producer = kafka.Producer;
        const client = new kafka.KafkaClient('localhost:2181');
        const producer = new Producer(client);
        return new Promise((resolve, reject) => {
            producer.on('ready', function () {
                console.log('Kafka Producer is Ready');
                // payload and send
                producer.send(payload, (err, data) => {
                    console.log(data);

                    resolve(data);
                });
            });
            producer.on('error', function (err) {
                console.log(err);
                console.log("error occoured");
                console.log('[kafka-producer -> ' + kafka_topic + ']: connection errored');
                reject(err);
            });
        })
    } catch (e) {
        console.log("This is error in app.js");
        console.log(e);
    }
}
exports.create_topics = async (topics) => {
    try {
        const Producer = kafka.Producer;
        const client = new kafka.KafkaClient('localhost:2181');
        return new Promise((resolve, reject) => {
            client.createTopics(topics, (error, result) => {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        })

    } catch (e) {
        console.log("This is error in app.js");
        console.log(e);
    }
} 