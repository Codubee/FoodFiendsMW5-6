import React from 'react';
import '../styles/Categories.css';

function Categories(props) {
  return (
    <div>
       <label for="categories">Choose a food category: </label>
         <select name="categories" id="categories">
            <option  value="italian">Italian</option>
            <option  value="mexican">Mexican</option>
            <option  value="indian">Indian</option>
            <option  value="chinese">Chinese</option>
         </select>
    </div>
  );
};

export default Categories