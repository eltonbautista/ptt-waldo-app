import React from "react";
import universe from '../assets/universe.png'
import PointerTarget from "./PointerTarget";
import styles from '../modules/styling-modules/ImageContainer.module.css';
import { Marker } from "./PointerTarget";

function ImgContainer(props) {
  const { characters, clickCoords, buttonHandler, children } = props;

  const mapList = () => {
    return children.map((child) =>  {
      return (
        <li key={child.props.myKey + 'test'}>
          {child}
        </li>
      )
    })
  }

  const myList = mapList();

  return (
    <div className={styles['universe-container']} onClick={props.clicker} data-img-container id="img-container">
      <img className={styles['universe-image']} src={universe} alt='universe113' id="universe113" />
      <PointerTarget characters={characters} buttonHandler={buttonHandler} />
        {children.length > 0 ? <ul>{myList}</ul> : null }
    </div>
  )
  
}

export default ImgContainer;