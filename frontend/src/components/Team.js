//Creates the team component 

//import react
import React from 'react'

//import images
import lena from '../images/lena.jpg'
import alex from '../images/alex.png'
import arielle from '../images/arielle.jpg'
import hannah from '../images/hannah.jpg'
import arath from '../images/arath.jpg'


//import a card component
import{
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck
} from 'reactstrap'

//components
function team() {
    return(
        <div>
            <CardDeck>
                <Card style={{width:"350px", height:"650px"}} color='success'>
                    <CardImg top width="100%" src={lena} alt="lena"/>
                    <CardBody>
                        <CardTitle tag="h5">Lena Mubarak</CardTitle>
                        <CardSubtitle tag="h6">Software Engineering</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Junior</p> </CardText>
                    </CardBody>
                </Card>

                <Card style={{width:"350px", height:"550px"}} color='success'>
                    <CardImg top width="100%" src={alex} alt="lena"/>
                    <CardBody>
                        <CardTitle tag="h5">Alexander de Bont </CardTitle>
                        <CardSubtitle tag="h6">Computer Science</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Undergraduate</p> </CardText>
                    </CardBody>
                </Card>

                <Card style={{width:"350px", height:"650px"}} color='success'>
                    <CardImg top width="100%" src={arielle} alt="lena"/>
                    <CardBody>
                        <CardTitle tag="h5">Arielle Posadas</CardTitle>
                        <CardSubtitle tag="h6">Computer Science</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Sophomore</p> </CardText>
                    </CardBody>
                </Card>

                <Card style={{width:"350px", height:"550px"}} color='success'>
                    <CardImg top width="100%" src={hannah} alt="lena"/>
                    <CardBody>
                        <CardTitle tag="h5">Hannah Eason</CardTitle>
                        <CardSubtitle tag="h6">Computer Science</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Undergraduate</p> </CardText>
                    </CardBody>
                </Card>

                <Card style={{width:"350px", height:"650px"}} color='success'>
                    <CardImg top width="100%" src={arath} alt="lena"/>
                    <CardBody>
                        <CardTitle tag="h5">Arath Paneet</CardTitle>
                        <CardSubtitle tag="h6">Mechanical Engineering</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Alumnus</p> </CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    )
}

//export component to use in app
export default team;