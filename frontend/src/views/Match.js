import React from 'react'
import { Button, Container } from 'reactstrap'
import '../styles/Match.css'

class Match extends React.Component {

    constructor(props){
        super(props)
        this.state = {id:this.createRoomId,category:''}
        this.handleCategoryChange = this.handleCategoryChange.bind(this)
    }
    

    handleCategoryChange(event){
        this.setState({category:event.target.value})
    }

    createRoomId(){
        return Math.random();
    }
    render() {
        return (
            <Container className="text-center mt-lg">
                <div>
                    <label>Choose a food category: </label>
                    <select name="categories" id="categories" onChange={this.handleCategoryChange}>
                        <option value="italian">Italian</option>
                        <option value="mexican">Mexican</option>
                        <option value="indian">Indian</option>
                        <option value="chinese">Chinese</option>
                    </select>
                </div>
                <Button className="mt-sm" outline color="success" >Submit</Button>
                <Button className="mt-sm ml-sm" outline>Refresh</Button>
            </Container>
        )
    }
}

export default Match