import React from 'react'
import {Button, Container} from 'reactstrap'
import '../styles/Match.css'

function Match(){
    return(
        <Container className="text-center pt-lg">
            <Button outline color="success" size='lg' >Submit</Button>
        </Container>
    )
}

export default Match