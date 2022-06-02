import React from "react";
import universe from '../assets/universe.png'
import PointerTarget from "./PointerTarget";
import styles from '../utils/styling-modules/ImageContainer.module.css';
import { Marker } from "./PointerTarget";

function ImgContainer(props) {
  const { characters, buttonHandler, children } = props;

  // Map <Marker /> onto <ImgContainer /> once a "waldo" is targeted. 
  const mapList = () => {
    return children.map((child, i) =>  {
      return (
        <Marker key={child.waldo + i} markerName={child.waldo} left={child.left} top={child.top} /> 
      )
    })
  }

  const myList = mapList();

  return (
    <div className={styles['universe-container']} onClick={props.clicker} data-img-container id="img-container">
      <img className={styles['universe-image']} src={universe} alt='universe113' id="universe113" />
      <PointerTarget characters={characters} buttonHandler={buttonHandler} />
      {myList}
    </div>
  )
  
}

export default ImgContainer;