const comm = require('../consumer_communications/index');
exports.get_data = async (req, res) => {
    let topic = req.body;
    try {
        let data = await comm.get_data(topic);
        console.log(data);
        // for (let i = 0; i < data.length; i++) {
        //     console.log(data[i]);
        // }
        res.send("Data consumed");
    } catch (err) {
        console.log(err);
    }
}