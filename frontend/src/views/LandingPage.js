import React from 'react';
import Explanation from '../components/Explanation'
import Features from '../components/Features'
import Tools from '../components/Tools'

function LandingPage(){
    return(
        <div>
            <Explanation />
            <Features/>
            <Tools/>
        </div>
    )
}

export default LandingPage;