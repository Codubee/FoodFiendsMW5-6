import React from 'react'
import lena from '../images/lena.jpg'
import alex from '../images/alex.png'
import arielle from '../images/arielle.jpg'
import hannah from '../images/hannah.jpg'
import arath from '../images/arath.jpg'
import '../styles/Team.css';


import{
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, CardDeck
} from 'reactstrap'

function team() {
    return(
        <div>
            <CardDeck className="deck">
                <Card className="card" >
                    <CardImg id="img" top width="100%" src={lena} alt="lena"/>
                    <CardBody id="text">
                        <CardTitle id="title">Lena Mubarak</CardTitle>
                        <CardSubtitle >Software Engineering</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Junior</p> </CardText>
                    </CardBody>
                </Card>

                <Card className="card" >
                    <CardImg id="img" top width="100%" src={alex} alt="alex"/>
                    <CardBody id="text">
                        <CardTitle id="title">Alexander de Bont </CardTitle>
                        <CardSubtitle >Computer Science</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Undergraduate</p> </CardText>
                    </CardBody>
                </Card>

                <Card className="card" >
                    <CardImg id="img" top width="100%" src={arielle} alt="arielle"/>
                    <CardBody id="text">
                        <CardTitle id="title">Arielle Posadas</CardTitle>
                        <CardSubtitle >Computer Science</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Sophomore</p> </CardText>
                    </CardBody>
                </Card>

                <Card className="card" >
                    <CardImg id="img" top width="100%" src={hannah} alt="hannah"/>
                    <CardBody id="text">
                        <CardTitle id="title">Hannah Eason</CardTitle>
                        <CardSubtitle >Computer Science</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Undergraduate</p> </CardText>
                    </CardBody>
                </Card>

                <Card className="card" >
                    <CardImg id="img" top width="100%" src={arath} alt="arath"/>
                    <CardBody id="text">
                        <CardTitle id="title">Arath Paneet</CardTitle>
                        <CardSubtitle >Mechanical Engineering</CardSubtitle> 
                        <CardText>The University of Texas at Dallas <p>Alumnus</p> </CardText>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
    )
}

export default team;