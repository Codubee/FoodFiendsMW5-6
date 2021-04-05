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
                    <div className="col-1">
                        <Tools imgsrc={img1} title="SReact"/>
                    </div>
                    <div className="col-2">
                        <Tools imgsrc={img2} title="NodeJS"/>
                    </div>
                    <div className="col-3">
                        <Tools imgsrc={img3} title="Jira"/>
                    </div>
                    <div className="col-4">
                        <Tools imgsrc={img4} title="Postman"/>
                    </div>
                    <div className="col-5">
                        <Tools imgsrc={img5} title="AWS"/>
                    </div>
                    <div className="col-6">
                        <Tools imgsrc={img6} title="Heroku"/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Tools;