import '../modules/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImageContainer';
import { useEffect, useState } from 'react';
import { myWaldosArray } from '../firebase/firebase-config';


function App() {

  const initPointerState = 
  {
    top: 0,
    left: 0,
  }

  const [pointerState, setPointerState] = useState(initPointerState);
  // An array of my waldo objects, they will be passed down to the corresponding waldoButtonHandler
  // Each button handler will turn the passed down object's isSelected property to true if the parameters are within the pointer's bounds
  const [waldoState, setWaldoState] = useState(myWaldosArray);

  useEffect(() => {
    const myImage = document.querySelector('#universe113');
    const myPointer = document.querySelector('#pointer-target');
    const waldoButtonContainer = document.querySelector('#waldo-button-container');
    const waldoButtons = document.querySelectorAll('button[data-waldo]');

    function myImageHandler(e) {

     if (waldoButtonContainer.style.visibility === 'visible') {
        myPointer.style.display = 'none';
        myPointer.style.visibility = 'hidden';
        waldoButtonContainer.style.visibility = 'hidden';
      } else {
        let foo = e.offsetX - 25;
        let bar = e.offsetY - 25;
        myPointer.style.display = 'block';
        waldoButtonContainer.style.visibility = 'visible';
        myPointer.style.visibility = 'visible';
        myPointer.style.left = foo + 'px';
        myPointer.style.top = bar + 'px';
        pointerState.top = bar;
        pointerState.left = foo;
        setPointerState({...pointerState});
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
  }, [pointerState]);

  return (
    <div className="App" >
      <Navbar />
      <ImgContainer />
    </div>
  );
}

export default App;
