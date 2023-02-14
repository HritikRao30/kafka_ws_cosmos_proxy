
const comm = require('../communications/index.js');
exports.send_data = async (req, res) => {
    let payload = req.body;
    console.log(payload);
    try {
        let data = await comm.send_data(payload);
        console.log(data);
        res.send("Data sent");
    } catch (err) {
        console.log(err);
    }


}
exports.create_topic = async (req, res) => {
    let topics = req.body;
    try {
        let data = await comm.create_topics(topics);
        console.log(data);
        res.send("Topic created");
    } catch (err) {
        console.log(err);
    }
}