import React from "react";
import styles from '../modules/styling-modules/ImageContainer.module.css'

function PointerTarget(props) {

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
        <button data-waldo>Piranha Plant</button>
        <button data-waldo>Bender</button>
        <button data-waldo>R2D2</button>
      </div>
      
    </div>
  )
}

export default PointerTarget;