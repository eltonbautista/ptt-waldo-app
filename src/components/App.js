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
    const myApp = document.querySelector('.App');




    function myImageHandler(e) {
      const coordinates = myImage.getBoundingClientRect();
      let foo = e.offsetX;
      let bar = e.offsetY;
      myPointer.style.left = foo - 25 + 'px';
      myPointer.style.top = bar - 25 + 'px';

      console.log(foo, bar);
      
     if (waldoButtonContainer.style.visibility === 'visible') {
        myPointer.style.visibility = 'hidden';
        waldoButtonContainer.style.visibility = 'hidden';
      } else {
        waldoButtonContainer.style.visibility = 'visible';
        myPointer.style.visibility = 'visible';
      }
  }

    function waldoButtonHandler(e) {
      waldoButtonContainer.style.visibility = 'hidden';
    }

    waldoButtons.forEach((button) => {
      button.addEventListener('click', waldoButtonHandler)
    })

    myImage.addEventListener('click', myImageHandler);

    return function cleanup() {
      myImage.removeEventListener('click', myImageHandler);
      waldoButtons.forEach((button) => {
        button.removeEventListener('click', waldoButtonHandler)
      })
    }
  }, []);

  return (
    <div className="App" >
      <Navbar />
      <ImgContainer />
    </div>
  );
}

export default App;
