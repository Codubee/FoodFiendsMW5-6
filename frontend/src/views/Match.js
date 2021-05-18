import React from 'react'
import { Button, Container } from 'reactstrap'
import '../styles/Match.css'
const axios = require('axios');

class Match extends React.Component {

    constructor(props){
        super(props)
        //Ititializes category to italian, otherwise if the user pushes the button without changing the category choice the choice sent is null.
        this.state = {id:this.createRoomId(),category:'italian'}
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
        this.callAddChoice = this.callAddChoice.bind(this)
    }
    

    handleCategoryChange(event){
        this.setState({category:event.target.value})
    }

    //Dont want room id for this instance to be random. Change
    createRoomId(){
        return Math.random();
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