import React from "react";
import styles from '../modules/styling-modules/ImageContainer.module.css'

function PointerTarget(props) {
  // const myButtonHandler = props.buttonHandler;
  const forPiranha = function () {
    props.buttonHandler('piranha plant');
  }
  const forBender = function () {
    props.buttonHandler('bender');
  }
  const forR2D2 = function () {
    props.buttonHandler('R2D2');
  }
  
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
        <button onClick={forPiranha} data-waldo>Piranha Plant</button>
        <button onClick={forBender} data-waldo>Bender</button>
        <button onClick={forR2D2} data-waldo>R2D2</button>
      </div>
      
    </div>
  )
}

export function Marker(props) {
  console.log(props);
  const { myKey, markerName, left, top } = props;

  const initialMarkerState = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '3px solid green',
    left,
    top,
  };

  const myUniqueKey = markerName;

  return (
    <div key={myUniqueKey} style={initialMarkerState} data-marker={markerName}></div>
  )
}

export default PointerTarget;