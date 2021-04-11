import React from 'react'
import img1 from '../images/review.svg'
import img2 from '../images/list.svg'
import img3 from '../images/eating.svg'
import '../styles/Features.css'

function Feature(props) {
    return(
        <div className="features-card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="process" className="card-img-top"></img>
            </div>
            <div className="features-card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                {props.desc}
                </p>
            </div>
        </div>
    );
}

function Features() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4">
                        <Feature imgsrc={img1} title="Searching" desc="Figuring out what to eat by selecting food categories"/>
                    </div>
                    <div className="col-md-4">
                        <Feature imgsrc={img2} title="Matching" desc="Finding a match between people's food choices"/>
                    </div>
                    <div className="col-md-4">
                        <Feature imgsrc={img3} title="Choosing" desc="Making the hard choice when no one wants to eat the same thing"/>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Features;
