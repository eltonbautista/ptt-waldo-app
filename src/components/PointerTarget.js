import React from "react";
import styles from '../modules/styling-modules/ImageContainer.module.css'

function PointerTarget(props) {
  // const myButtonHandler = props.buttonHandler;
  // Set onClick at each button like this: myButtonHandler(...args); args being left, top, etc.
  const initialPointerState = {
    display: 'none',
    position: 'absolute',
    border: '2px dotted white',
    width: '50px',
    height: '50px',
  }
  return (
    <div id="pointer-target" style={initialPointerState} data-pointer-target>
      <div id="waldo-button-container" className={styles['waldo-container']}>
        <button onClick={props.buttonHandler} data-waldo>Piranha Plant</button>
        <button onClick={props.buttonHandler} data-waldo>Bender</button>
        <button onClick={props.buttonHandler} data-waldo>R2D2</button>
      </div>
      
    </div>
  )
}

export default PointerTarget;