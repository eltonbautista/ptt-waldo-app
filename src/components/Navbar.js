import React from "react";
import styles from '../modules/styling-modules/ImageContainer.module.css'
import ImgInDiv from "./ImgInDiv";
import plant from '../assets/plant.png';
import r2d2 from '../assets/r2d2.png';
import bender from '../assets/bender.png';

function Navbar() {
  return (
    <nav data-navbar className={styles.navbar}>
      <div>
        <ImgInDiv src={plant} alt='piranha plant icon'></ImgInDiv>
        <ImgInDiv src={bender} alt='bender icon'></ImgInDiv>
        <ImgInDiv src={r2d2} alt='r2d2 icon'></ImgInDiv>
      </div>
      <div>Timer</div>
    </nav>
  )
}

export default Navbar;