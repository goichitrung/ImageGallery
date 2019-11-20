import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  //a method to get the value of input
  //   OnInputChange(event) {
  //     console.log(event.target.value);
  //   }
  //being shorten below at onChange prop

  // we have to do this because onSubmit called a callback function
  //when it is called, it won't know what is "this"
  //HandleSubmit = this.HandleSubmit.bind(this);
  //this way works fine but there is new way using arrow function

  //arrow function with lexical scoping
  HandleSubmit = event => {
    event.preventDefault();
    //to take props passed by parent component to child component
    this.props.onSubmit(this.state.term);
  };
  render() {
    return (
      <form onSubmit={this.HandleSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          {/* onChange is a "prop" of "input" element */}
          <input
            type="text"
            value={this.state.term}
            // onChange={event => {
            //   console.log(event.target.value);
            // }}
            //this is uncontrolled element (not good)
            onChange={event => {
              this.setState({ term: event.target.value });
            }}
          ></input>
        </div>
      </form>
    );
  }
}

export default SearchBar;
