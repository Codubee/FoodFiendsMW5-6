import React from 'react';
import Team from "../components/Team"
import Explanation from '../components/Explanation'
import Features from '../components/Features'

function LandingPage(){
    return(
        <div>
            <Explanation />
            <Features/>
            <Team/>
        </div>
    )
}

export default LandingPage;