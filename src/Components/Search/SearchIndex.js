import React, { Component } from "react";
// import { Input } from "reactstrap";

class SearchIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      things: [
        "pen", "marker", "eraser", "notebook", "pencil", "scissors", "highlighter", "stapler", "paper clip", "binder", "hole punch", "laminator", "laminating sheets", "protective sheets", "index cards"],
      searchTerm: "",
    };
  }

  searchFunction = (event) => {
    this.setState ({ 
      searchTerm: event.target.value 
    });
  }
 
  render() {
    return (
      <div>
        <form>
            <input type="text" placeholder="Search" value={this.state.searchTerm} onChange={this.searchFunction}></input>
        </form>
        <h3>Results:</h3> 
        <ul>
          {this.state.things.filter(thing => thing.includes(this.state.searchTerm)).map(filteredThing => (
            <li key={filteredThing}>{filteredThing}</li>)
          )}
        </ul>
      </div>
    );
  }
}

export default SearchIndex;
