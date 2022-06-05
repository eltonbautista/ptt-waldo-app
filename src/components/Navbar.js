import React from "react";
import ImgInDiv from "./ImgInDiv";
import plantImg from '../assets/plant.png';
import r2D2Img from '../assets/r2d2.png';
import benderImg from '../assets/bender.png';
import styles from '../utils/styling-modules/Navbar.module.css';
import StartPage from "./StartPage";

function Navbar(props) {
  const { timer, buttonHandler, characters, gameover } = props;
  const [seconds, minutes] = timer;
  const [piranhaPlant, r2D2, bender] = characters;
  const charactersComponents = 
  [<ImgInDiv key={'plant'} src={plantImg} alt='piranha plant'></ImgInDiv>, 
  <ImgInDiv key={'r2D2'} src={r2D2Img} alt='R2D2'></ImgInDiv>, 
  <ImgInDiv key={'bender'} src={benderImg} alt='bender'></ImgInDiv>, 
  <button id="start-button" key={'start-button'} onClick={buttonHandler} >START</button>];

  const [piranhaPlantComponent, r2D2Component, benderComponent] = charactersComponents;

  // If player hasn't clicked startButton
  if(!timer[0] && !timer[1]) {
    return (
      <div id="start-container">
        <div id='app-background'></div>
        <StartPage myClass={styles['start-page']} children={charactersComponents} />
      </div>
    )
  };

    return (
      <nav data-navbar className={styles['navbar-gameover']}>

        {!gameover(characters) ?
        <nav data-navbar className={styles.navbar}>
          <div className={styles['navbar-div']}>
            {!piranhaPlant.isSelected && piranhaPlantComponent}
            {!r2D2.isSelected && r2D2Component}
            {!bender.isSelected && benderComponent}
          </div>
          <div>{`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}</div> 
        </nav>
      : 
        <div>
          <span className={styles['congrats-span']}>
            Congratulations! You finished in {`${minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
          </span>
        </div> }

      </nav>
    )
  
}

export default Navbar;