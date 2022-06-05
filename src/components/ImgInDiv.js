import React from "react";
import styles from '../utils/styling-modules/Navbar.module.css';


function ImgInDiv(props) {
  return (
    <div className={styles['img-icon-div']} data-waldo-div>
      <img className={styles['img-icons']} src={props.src} alt={props.alt}></img>
    </div>
  )
}
export default ImgInDiv;