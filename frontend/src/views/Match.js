import React from 'react'
import axios from 'axios'
import { Button, Container } from 'reactstrap'
import '../styles/Match.css'
const axios = require('axios');

class Match extends React.Component {

    constructor(props){
        super(props)
        this.state = {id:0,category:'italian'}
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.callAddChoice = this.callAddChoice.bind(this)
    }
    
    componentDidMount() {
        this.callCreateRoomAPI();
    }

    callCreateRoomAPI() {
        axios.get('/createRoom?id=' + this.createRoomId())
            .then((response) => {
                console.log(response.data);
                this.setState({id:response.data.id})
            })
    }

    handleCategoryChange(event){
        this.setState({category:event.target.value})
    }

    //Dont want room id for this instance to be random. Change
    createRoomId(){
        return Math.floor(Math.random() * 1000) + 1;
    }

    //This calls the backend with the current state of the match instance (Including the room id and the choice of food type)
    callAddChoice(){
        axios.post('/addChoice', this.state)
    }

    render() {
        return (
            <Container className="text-center mt-lg">
                <div>
                    <label>Choose a food category: </label>
                    <select name="categories" id="categories" onChange={this.handleCategoryChange} onBeforeInput>
                        <option value="italian">Italian</option>
                        <option value="mexican">Mexican</option>
                        <option value="indian">Indian</option>
                        <option value="chinese">Chinese</option>
                    </select>
                </div>
                <Button className="mt-sm" outline color="success" onClick={this.callAddChoice}>Submit</Button>
                <Button className="mt-sm ml-sm" outline>Refresh</Button>
            </Container>
        )
    }
}

export default Match