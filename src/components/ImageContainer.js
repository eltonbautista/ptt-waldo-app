import React from "react";
import universe from '../assets/universe.png'
import PointerTarget, { Marker } from "./PointerTarget";
import styles from '../modules/styling-modules/ImageContainer.module.css';

function ImgContainer(props) {
  const { characters, clickCoords, buttonHandler, markerData } = props;

  return (
    <div className={styles['universe-container']} onClick={props.clicker} data-img-container id="img-container">
      <img className={styles['universe-image']} src={universe} alt='universe113' id="universe113" />
      <PointerTarget characters={characters} buttonHandler={buttonHandler} />
      {markerData.length > 0 ? markerData.map((data) => {
        return (
          <Marker key={data.myKey} markerName={data.markerName} left={data.left} top={data.top} />
        )
      }) : null}
    </div>
  )
}
export default ImgContainer;
