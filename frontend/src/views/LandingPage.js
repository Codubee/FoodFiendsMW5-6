import React from 'react';
import Team from "../components/Team"
import Explanation from '../components/Explanation'
import Features from '../components/Features'
import Tools from '../components/Tools'

function LandingPage(){
    return(
        <div>
            <Explanation />
            <Features/>
            <Tools/>
            <Team/>
        </div>
    )
}

export default LandingPage;