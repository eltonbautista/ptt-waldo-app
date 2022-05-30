import React from "react";
import styles from '../modules/styling-modules/ImageContainer.module.css'

function PointerTarget(props) {

  const initialPointerState = {
    position: 'absolute',
    border: '2px dotted white',
    width: '50px',
    height: '50px',
  }
  return (
    <div id="pointer-target" style={initialPointerState} data-pointer-target></div>
  )
}

export default PointerTarget;