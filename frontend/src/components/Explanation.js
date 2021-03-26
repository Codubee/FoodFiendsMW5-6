import React from 'react';
import { Jumbotron} from 'reactstrap';
const ExplanationImage = '/images/explanation_background.PNG'


//Jumbotron component
const Explanation = (props) => {
  return (
    <div>
      {/* In the following line the jumbotrons style was inlined. In the style, The background image was set as the image that was previously imported, and its size
             had been set to cover the entire component, which caused the image to be stretched to fit the needed size. */}
      <Jumbotron style={{ backgroundImage: `url(${ExplanationImage})`, backgroundSize: 'cover'}}>

        {/* The following 4 lines (ignoring comments) simply display the necessary formatted text to introduce the user, along with a white line to look neat. 
              Most modifications to style are inlined.*/}
        <h1 className="display-3 text-center text-white font-weight-bold">Welcome to Food Fiends!</h1>
        {/* The following line has its styles in the style sheet index.css unlike the other lines due to too many style options */}
        <p className="lead text-center text-white">Food Fiends is for groups of friends who can't decide what to eat! Users can get together and can each choose 3 food types that
                                                    they want from a list. The food type that the group of users pick the most is what's chosen as the winner for them to eat!</p>
        <hr className="my-2" style={{backgroundColor: "white", width: '50%'}} />
        <p className="text-center text-white" >Codubee MW5-6, Spring 2021</p>


        {/* Previously was 5 lines with invisible text for whitespace. Changed after a more elegant solution, using margins, was found to generate white space. */}
        <p className="invisible" style={{margin: '60px'}}> - </p>
      </Jumbotron>
    </div>
  );
};

export default Explanation