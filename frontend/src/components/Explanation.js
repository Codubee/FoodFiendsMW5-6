import React from 'react';
import { Jumbotron} from 'reactstrap';
import '../styles/Explanation.css';


//Jumbotron component
function Explanation(props) {
  return (
    <div>
      {/* Note: Style for jumbo defined in Explanation.css */}
      <Jumbotron className="jumbo">

        {/* The following 4 lines (ignoring comments) simply display the necessary formatted text to introduce the user, along with a white line to look neat. */}
        <h1 className="display-3 text-center text-white font-weight-bold">Welcome to Food Fiends!</h1>
        {/* Note: lead was styled in index.css, not Explanation.css */}
        <p className="lead text-center text-white">Food Fiends is for groups of friends who can't decide what to eat! Users can get together and can each choose 3 food types that
                                                    they want from a list. The food type that the group of users pick the most is what's chosen as the winner for them to eat!</p>
        {/* Note: Style for my-2 defined in Explanation.css */}
        <hr className="my-2" />
        <p className="text-center text-white" >Codubee MW5-6, Spring 2021</p>


        {/* Previously was 5 lines with invisible text for whitespace. Changed after a more elegant solution, using margins, was found to generate white space. */}
        <p className="invisible" style={{margin: '60px'}}> - </p>
      </Jumbotron>
    </div>
  );
};

export default Explanation