import React from "react";

function ImgInDiv(props) {
  const { imgState } = props;

  const myStyle = {
    width: "100px",
    height: "100px",
  }
  const testStyle = {
    width: "100px",
    height: "100px",
  }
  return (
    <div style={myStyle} data-waldo-div>
      <img style={testStyle} src={props.src} alt={props.alt}></img>
    </div>
  )
}
export default ImgInDiv;