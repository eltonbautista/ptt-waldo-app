import React from "react";
import ImgInDiv from "./ImgInDiv";
import plantImg from '../assets/plant.png';
import r2d2Img from '../assets/r2d2.png';
import benderImg from '../assets/bender.png';
import styles from '../utils/styling-modules/Navbar.module.css';

function Navbar(props) {
  const { timer, buttonHandler, characters } = props;
  const [seconds, minutes] = timer;
  const [piranhaPlant, r2D2, bender] = characters;

  if(!timer[0]) {
    return (
      <nav data-navbar className={styles.navbar}>
          <ImgInDiv src={plantImg} alt='piranha plant'></ImgInDiv>
          <ImgInDiv src={r2d2Img} alt='R2D2'></ImgInDiv>
          <ImgInDiv src={benderImg} alt='bender'></ImgInDiv>
          <button id="start-button" onClick={buttonHandler} >START</button>
        <div>{`${minutes}: ${seconds < 10 ? '0' + seconds : seconds}`}</div>
      </nav>
    )
  }

    return (
      <nav data-navbar className={styles.navbar}>
        <div className={styles['navbar-div']}>
          {!piranhaPlant.isSelected ? <ImgInDiv src={plantImg} alt='piranha plant'></ImgInDiv> : null}
          {!r2D2.isSelected ? <ImgInDiv src={r2d2Img} alt='R2D2'></ImgInDiv> : null}
          {!bender.isSelected ? <ImgInDiv src={benderImg} alt='bender'></ImgInDiv> : null}
        </div>
        <div>{`${minutes}: ${seconds < 10 ? '0' + seconds : seconds}`}</div>
      </nav>
    )
  
}

export default Navbar;