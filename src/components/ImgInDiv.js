import React from "react";

function ImgInDiv(props) {
  const myStyle = {
    width: "100px",
    height: "100px"
  }

  return (
    <div style={myStyle}>
      <img style={myStyle} src={props.src} alt={props.alt}></img>
    </div>
  )
}
export default ImgInDiv;