import React from 'react'
import Categories from '../components/Categories'
import {Button, Container} from 'reactstrap'
import '../styles/Match.css'

function Match(){
    return(
        <Container className="text-center mt-lg">
            <Categories/>
            <Button className="mt-sm" outline color="success" size='lg' >Submit</Button>
        </Container>
    )
}

export default Match