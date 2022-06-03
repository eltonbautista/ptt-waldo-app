import React from "react";
import universe from '../assets/universe.png'
import PointerTarget from "./PointerTarget";
import styles from '../utils/styling-modules/ImageContainer.module.css';
import { Marker } from "./PointerTarget";

function ImgContainer(props) {
  const { characters, buttonHandler, children, imgHandler, startCon } = props;

  const mapList = () => {
    return children.map((child, i) =>  {
      return (
        <Marker key={child.waldo + i} markerName={child.waldo} left={child.left} top={child.top} /> 
      )
    })
  }

  const myList = mapList();

  return (
    <div className={styles['universe-container']} data-img-container id="img-container">
      {!startCon[0] && !startCon[1] ? null : <img className={styles['universe-image']} src={universe} alt='universe113' id="universe113" onClick={imgHandler} /> }
      <PointerTarget characters={characters} buttonHandler={buttonHandler} />
      {myList}
    </div>
  )
  
}

export default ImgContainer;