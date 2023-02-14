// const fetch = require('cross-fetch');
const axios = require('axios')
const url = 'http://localhost:3000/publish/in';
let ct = 0;
const createPost = async () => {
    const payload = {
        data: "This is an besttttttt call!!"
    }
    try {
        const res = await axios.post(url, payload);
        ct++;
        if (ct < 5) {
            await createPost();
        }
    } catch (error) {
        console.log(error)
    }
}
createPost();



