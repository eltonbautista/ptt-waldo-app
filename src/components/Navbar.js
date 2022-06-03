import React from "react";
import ImgInDiv from "./ImgInDiv";
import plant from '../assets/plant.png';
import r2d2 from '../assets/r2d2.png';
import bender from '../assets/bender.png';
import styles from '../utils/styling-modules/Navbar.module.css';

function Navbar(props) {
  const { timer, buttonHandler } = props;
  const [ seconds, minutes ] = timer;

  return (
    <nav data-navbar className={styles.navbar}>
      <div className={styles['navbar-div']}>
        <ImgInDiv src={plant} alt='piranha plant'></ImgInDiv>
        <ImgInDiv src={r2d2} alt='R2D2'></ImgInDiv>
        <ImgInDiv src={bender} alt='bender'></ImgInDiv>
        <button id="start-button" onClick={buttonHandler} >START</button>
      </div>
      <div>{`${minutes}: ${seconds < 10 ? '0' + seconds : seconds}`}</div>
    </nav>
  )
}

export default Navbar;