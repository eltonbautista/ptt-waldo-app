import '../modules/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImageContainer';
import PointerTarget from './PointerTarget';
import { useEffect, useState } from 'react';
import styles from '../modules/styling-modules/ImageContainer.module.css'

function App() {
  
  useEffect(() => {
    const myImage = document.querySelector('#universe113');
    const myPointer = document.querySelector('#pointer-target');

    myImage.addEventListener('click', function(e) {
      let foo = e.offsetX;
      let bar = e.offsetY;
      myPointer.style.left = foo -25 + 'px';
      myPointer.style.top = bar + 5 + 'px';
    })
  })

  return (
    <div className="App" >
      <Navbar />
      <ImgContainer />
    </div>
  );
}

export default App;
