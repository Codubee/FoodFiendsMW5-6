const express = require('express')
const app = express()
const axios = require('axios');
var cors = require('cors')
app.use(express.json());
app.use(cors())

//The following backend route adds a specific cuisine to a certain room based on its id
app.post('/addChoice', function(req, res) {
    //Prints out the request's body to the console for debugging
    console.log(req.body);

    //The following makes a temporary javascript object to be sent with the axios post request to the server
    const body = {
        id: req.body.id,
        choice: req.body.choice
    }

    //Make the actual post request to the server at the following URL
    axios.post('https://codubee-projects-api.herokuapp.com/food/addChoice', body)
    .then(function (response) {
        //If POST successful, print out the response from the server and return a 200 status code to the caller
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch(function (error) {
        //If POST request failed, print out the error message and return a 400 status code to the caller
        console.log(error)
        res.status(400).json({error:"An error occurred"});
    })
})


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

app.listen(process.env.PORT || 8080, () => console.log('Listening at localhost:8080'))
