import React from 'react'
import {Row, Col} from 'reactstrap'
import img1 from '../images/react.svg'
import img2 from '../images/nodejs.svg'
import img3 from '../images/jira.svg'
import img4 from '../images/postman.svg'
import img5 from '../images/aws.svg'
import img6 from '../images/heroku.svg'

// Tools Component 

function Tools() {
    return (
        <div>
            <div className="container-fluid">
                <Row >
                    <Col>
                        <img src={img1} title="SReact" desc="SReact" alt="react"/>
                    </Col>
                    <Col  >
                        <img src={img2} title="NodeJS" desc="NodeJS" alt="nodejs"/>
                    </Col>
                    <Col  >
                        <img src={img3} title="Jira" desc="Jira" alt="jira"/>
                    </Col>
                    <Col  >
                        <img src={img4} title="Postman" desc="Postman" alt="postman"/>
                    </Col>
                    <Col  >
                        <img src={img5} title="AWS" desc="AWS" alt="AWS"/>
                    </Col>
                    <Col  >
                        <img src={img6} title="Heroku" desc="Heroku" alt="heroku"/>
                    </Col>
                </Row>
            </div>
        </div>
    ) 
}

export default Tools;