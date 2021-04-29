const express = require('express')
const app = express()
const axios = require('axios');
app.use(express.json());

app.get('/createRoom', function(req, res) {
    // Log the query parameters
    console.log(req.query)
    let id = req.query.id;

    // Make a get request with the id query parameter
    axios.get('https://codubee-projects-api.herokuapp.com/food/createRoom?id='+id)
    .then(function (response) {
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})
app.listen(8080, () => console.log('Listening at locahost:8080'))
