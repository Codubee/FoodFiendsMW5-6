import React from 'react';
import { Jumbotron} from 'reactstrap';
import '../styles/Explanation.css';


//Jumbotron component
function Explanation(props) {
  return (
    <div>
      <Jumbotron className="jumbo">
        <h1 className="display-3 text-center text-white font-weight-bold">Welcome to Food Fiends!</h1>
        <p className="lead text-center text-white">Food Fiends is for groups of friends who can't decide what to eat! Users can get together and can each choose 3 food types that
                                                    they want from a list. The food type that the group of users pick the most is what's chosen as the winner for them to eat!</p>
        <hr className="my-2" />
        <p className="text-center text-white all-around-margin" >Codubee MW5-6, Spring 2021</p>
      </Jumbotron>
    </div>
  );
};

export default Explanation