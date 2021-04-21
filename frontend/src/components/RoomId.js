import React from 'react';
import '../styles/RoomId.css';

//Text box with a button to the right of it. Allows user to input any string for the room id, and has a yet to be implemented search method
class RoomId extends React.Component {
    constructor() {
        super()

        this.state={ input: ""}

        //These next two lines are necessary in the constructor, as if you dont do this the methods wont have access to the state of the object they're
        //being called upon. But by binding, as can be seen in the next two lines, these methods gain access to the state of the object.
        this.search = this.search.bind(this)
        this.updateState = this.updateState.bind(this)
    }

    //This method is called when the button next to the search bar is clicked. 
    //TODO: What this method does needs to be changed in the future once the backend is implemented.
    search(){
        alert("Current input: " + this.state.input + ". To do: Implement search method in RoomId.js once backend further completed")
    }

    //Whenever the user adds or deletes a character from the textbox, also change the value of input in the state, as that is not automatic.
    //Note: e.target.value is how you access the current text the user has entered into the textbox.
    updateState(e){
        this.setState({input: e.target.value})
    }


    render(){
        return(
            <div className="search-bar input-group">
                <input type="text" className="form-control" placeholder="Enter a room id" onChange={ this.updateState }></input>
                <div>
                    <button className="btn btn-outline-primary" type="button" onClick={this.search}>Search</button>
                </div>
            </div>
        )
    }

}

export default RoomId