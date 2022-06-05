import React from "react";
import styles from '../utils/styling-modules/ImgContainer.module.css';

function PointerTarget({ buttonHandler, characters }) {
  // const myButtonHandler = props.buttonHandler;
  const [piranhaPlant, r2D2, bender] = characters;

  const initialPointerState = {
    display: 'none',
    position: 'absolute',
    border: '2px dotted white',
    width: '50px',
    height: '50px',
  }

  return (
    <div id="pointer-target" style={initialPointerState} data-pointer-target>
      <div id="waldo-button-container" className={`${styles['waldo-container']} `} >
        <button onClick={(e) => buttonHandler(piranhaPlant, e)} data-waldo>Piranha Plant</button>
        <button onClick={(e) => buttonHandler(r2D2, e)} data-waldo>R2D2</button>
        <button onClick={(e) => buttonHandler(bender, e)} data-waldo>Bender</button>
      </div>
    </div>
  )
}

export function Marker(props) {
  const { markerName, left, top } = props;

  const initialMarkerState = {
    position: 'absolute',
    width: '40px',
    height: '40px',
    border: '5px solid blue',
    marginLeft: '5px',
    marginTop: '5px',
    left,
    top,
  };

  return (
    <div style={initialMarkerState} data-marker={markerName}></div>
  )
}

export default PointerTarget;