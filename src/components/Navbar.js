import React from "react";
import ImgInDiv from "./ImgInDiv";
import plant from '../assets/plant.png';
import r2d2 from '../assets/r2d2.png';
import bender from '../assets/bender.png';
import styles from '../utils/styling-modules/Navbar.module.css';

function Navbar(props) {
  const {seconds, minutes} = props;

  return (
    <nav data-navbar className={styles.navbar}>
      <div className={styles['navbar-div']}>
        <ImgInDiv src={plant} alt='piranha plant icon'></ImgInDiv>
        <ImgInDiv src={bender} alt='bender icon'></ImgInDiv>
        <ImgInDiv src={r2d2} alt='r2d2 icon'></ImgInDiv>
        <button id="start-button" >START</button>
      </div>
      <div>{`${minutes}: ${seconds < 10 ? '0' + seconds : seconds}`}</div>
    </nav>
  )
}

export default Navbar;