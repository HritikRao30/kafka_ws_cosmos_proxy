exports.reveal = (req, res) => {
    let { data } = req.body;
    console.log(data);
    res.status(200).send({
        success: true,
        msg: data,
        error: null
    })
}

// exports.push = (req, res) => {
//     let { msg } = req.body;
//     res.status(200).send({
//         success: true,
//         data: msg,
//         error: nulls
//     })
// }