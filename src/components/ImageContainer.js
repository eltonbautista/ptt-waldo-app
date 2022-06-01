import React from "react";
import universe from '../assets/universe.png'
import PointerTarget from "./PointerTarget";
import styles from '../modules/styling-modules/ImageContainer.module.css';
import { Marker } from "./PointerTarget";
//  display: changePropValue(doc, 'display', 'none')
function ImgContainer(props) {
  const { characters, clickCoords, buttonHandler, children } = props;
  let i = 0;
  // const mapList = function() {
  //   return children.map((child) => {
  //     i += 1;
  //     return(
  //     <li key={i}>
  //       {child}
  //     </li>)
  //   })
  // };

  // let mappedChildren = mapList();


  return (
    <div className={styles['universe-container']} onClick={props.clicker} data-img-container id="img-container">
      <img className={styles['universe-image']} src={universe} alt='universe113' id="universe113" />
      <PointerTarget characters={characters} buttonHandler={buttonHandler} />
        {/* <Marker marker={'piranha'} left={clickCoords.left} top={clickCoords.top} />
        <Marker marker={'bender'} left={clickCoords.left} top={clickCoords.top} />
        <Marker marker={'r2D2'} left={clickCoords.left} top={clickCoords.top} /> */}
        {children}
    </div>
  )
  
}

export default ImgContainer;