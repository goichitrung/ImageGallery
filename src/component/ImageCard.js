import React from "react";

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }
  //why can it not be here ?
  //   const { description, urls } = this.props.image;
  componentDidMount() {
    //trigger when an event of loading the image is finished
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  //arrow function to handle bind this
  //this function to control the span of each image
  //in order to adjust its grid-row-end
  setSpans = () => {
    //get the height of each image
    const height = this.imageRef.current.clientHeight;
    //get the span element in CSS
    const spans = Math.ceil(height / 10);
    this.setState({ spans: spans });
  };
  render() {
    //destructuring
    const { description, urls } = this.props.image;

    return (
      //manipulate the style with the spans result
      //we have set to the state
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />;
      </div>
    );
  }
}

export default ImageCard;
