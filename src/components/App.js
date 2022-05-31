import '../modules/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImageContainer';
import { useEffect, useState } from 'react';
import styles from '../modules/styling-modules/ImageContainer.module.css'
import { grabDocs } from '../firebase/firebase-config';


function App() {

  useEffect(() => {
    const myImage = document.querySelector('#universe113');
    const myPointer = document.querySelector('#pointer-target');
    const waldoButtonContainer = document.querySelector('#waldo-button-container');
    const waldoButtons = document.querySelectorAll('button[data-waldo]');

    waldoButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        waldoButtonContainer.style.visibility = 'hidden';
      })
    })

    myImage.addEventListener('click', function(e) {
      let foo = e.offsetX;
      let bar = e.offsetY;
      myPointer.style.left = foo -25 + 'px';
      myPointer.style.top = bar + -25 + 'px';
      waldoButtonContainer.style.visibility = 'visible';
    });

  });

  return (
    <div className="App" >
      <Navbar />
      <ImgContainer />
    </div>
  );
}

export default App;
