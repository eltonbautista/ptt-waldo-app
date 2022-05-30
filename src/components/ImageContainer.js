import React from "react";
import universe from '../assets/universe.png'
import PointerTarget from "./PointerTarget";
import styles from '../modules/styling-modules/ImageContainer.module.css'

function ImgContainer(props) {

  return (
    <div className={styles['image-container']} onClick={props.clicker} data-img-container id="img-container">
      <img className={styles['image-container']} src={universe} alt='universe113' id="universe113"></img>
      <PointerTarget />
    </div>
  )
}

export default ImgContainer;