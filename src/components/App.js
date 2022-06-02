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
  // const [waldoState, setWaldoState] = useState(myWaldosArray);
  const [childrenState, setChildrenState] = useState([]);


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
  

  // Function used for each "waldo" button. This identifies if a "waldo" (piranha plant, bender, r2d2) has been "hit" or not.
  function waldoButtonHandler(char) {
    // A function that returns a conditional.
    const foo = (waldo) => {
      if (!waldo) {
        console.log('has not loaded');
        return;
      } else {
        return (pointerState.top >= (waldo.top - 20) && pointerState.top <= (waldo.top + 20) 
        && pointerState.left >= (waldo.left - 20) && pointerState.left <= (waldo.left + 20))
      }
    };

    const [piranhaPlant, r2D2, bender] = myWaldosArray;

    // eslint-disable-next-line default-case
    switch (char) {
      case 'piranha plant':
        if(foo(piranhaPlant, 20, 30)) {
          setChildrenState((prevState) => [...prevState, piranhaPlant]);
        }
      break;
      case 'bender':
        if(foo(bender, 20, 30)) {
          setChildrenState((prevState) => [...prevState, bender]);
        }
      break;
      case 'R2D2':
        if(foo(r2D2, 20, 30)) {
          setChildrenState((prevState) => [...prevState, r2D2]);
        }
    } 
    


    // if (char === 'piranha plant') {
    //   if (foo(piranhaPlant, 20, 30)) {

    //     if (!piranhaPlant.isSelected) {
    //       setChildrenState((prevState) => [...prevState, piranhaPlant]);
    //     }

    //     piranhaPlant.changePropValue(piranhaPlant, 'isSelected', true);
    //   } 
    // } else if (char === 'bender') {
    //   if (foo(bender, 20, 30)) {
    //     if (!bender.isSelected) {
    //       setChildrenState((prevState) => [...prevState, bender]);
    //     }

    //     bender.changePropValue(bender, 'isSelected', true);
    //   } 
      
    // } else if (char === 'R2D2') {
    //   if (foo(r2D2, 20, 30)) {
    //     if (!r2D2.isSelected) {
    //       setChildrenState((prevState) => [...prevState, r2D2]);
    //     }

    //     r2D2.changePropValue(r2D2, 'isSelected', true);
    //   }
      
    // }
    
    // setWaldoState([...waldoState]);
  }
  
  return (
    <div className="App" data-testid='app' >
      <Navbar />
      <ImgContainer characters={myWaldosArray} buttonHandler={waldoButtonHandler} clickCoords={pointerState} children={childrenState} />
    </div>
  );
}

export default App;
