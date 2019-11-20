import React from "react";
import SearchBar from "./SearchBar.js";
import unsplash from "../api/Unsplash.js";
import ImageList from "./ImageList";
class App extends React.Component {
  //constructor should be an empty array
  //so that we can make use of array prototype
  state = { images: [] };
  //function to receive data that will be passed by SearchBar
  OnSearchSubmit = term => {
    //make a GET request from axios
    unsplash
      .get("/search/photos", {
        params: {
          query: term
        }
      })
      .then(response => {
        this.setState({ images: response.data.results });
      });
  };
  render() {
    return (
      <div className="ui container" style={{ margin: "50px" }}>
        <SearchBar onSubmit={this.OnSearchSubmit} />
        <p>Found {this.state.images.length} images</p>
        <ImageList images={this.state.images} />
        {/* onSubmit could be anything since it's just a props to be pass to SearchBar */}
      </div>
    );
  }
}

export default App;
