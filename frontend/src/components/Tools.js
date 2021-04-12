import React from 'react'
import img1 from '../images/react.svg'
import img2 from '../images/nodejs.svg'
import img3 from '../images/jira.svg'
import img4 from '../images/postman.svg'
import img5 from '../images/aws.svg'
import img6 from '../images/heroku.svg'
import '../styles/Tools.css' 

// Tools Component 

function Tools() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div classname="img">
                    <div className="col-1">
                        <img src={img1} title="SReact" desc="SReact"/>
                    </div>
                    <div className="col-1">
                        <img src={img2} title="NodeJS" desc="NodeJS"/>
                    </div>
                    <div className="col-1">
                        <img src={img3} title="Jira" desc="Jira"/>
                    </div>
                    <div className="col-1">
                        <img src={img4} title="Postman" desc="Postman"/>
                    </div>
                    <div className="col-1">
                        <img src={img5} title="AWS" desc="AWS"/>
                    </div>
                    <div className="col-1">
                        <img src={img6} title="Heroku" desc="Heroku"/>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Tools;