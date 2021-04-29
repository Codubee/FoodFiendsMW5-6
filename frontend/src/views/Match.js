import React from 'react'
import { Button, Container } from 'reactstrap'
import '../styles/Match.css'

function Match() {
    return (
        <Container className="text-center mt-lg">
            <div>
                <label for="categories">Choose a food category: </label>
                <select name="categories" id="categories">
                    <option value="italian">Italian</option>
                    <option value="mexican">Mexican</option>
                    <option value="indian">Indian</option>
                    <option value="chinese">Chinese</option>
                </select>
            </div>
            <Button className="mt-sm" outline color="success" size='lg' >Submit</Button>
            <Button>Refresh</Button>
        </Container>
    )
}

export default Match