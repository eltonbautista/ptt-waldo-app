import '../utils/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImgContainer';
import { useCallback, useEffect, useState } from 'react';
import { myWaldosArray } from '../firebase/firebase-config';
import { myImageHandler, returnCondition } from '../utils/helpers/App-helper';

function App() {

  const initPointerState = 
  {
    top: 0,
    left: 0,
  }

  // Used to change where my target div is via style prop.
  const [pointerState, setPointerState] = useState(initPointerState);

  // State that gets filled with 'targeted'.
  const [childrenState, setChildrenState] = useState([]);

  // Minute state
  const [minuteState, setMinuteState] = useState(0);

  // Second state
  const [secondState, setSecondState] = useState(0);
  // use mod (%) to utilize one state. Once seconds reach 60, divide by 60, add to minutes, etc.

  // useCallback is used to deal with having to use a  callback function for an effect
  // Initially everything I have inside my handleStart() was inside useEffect() which caused bugs because of mounting
  // Putting it in useCallback it will only be invoked once the handleStart is invoked.
  const handleStart = useCallback(() => {
    const myTimer = setInterval(() => {
      setSecondState((prevState) => {
        return prevState + 1;
      });
    }, 1000);

    return () => {
      clearInterval(myTimer);
    }
  }, []);

  // Initially I had the conditional (secondState === 59) in handleStart() but it did not work due to the dependency array [secondState]
  useEffect(() => {
    const startButton = document.querySelector('#start-button');

    // Through this condition the event can only occur once.
    // This is because secondState && minuteState will only be 0 (falsy) prior to calling handleStart.
    if (!secondState && !minuteState) {
      startButton.addEventListener('click', handleStart, {once: true});
    }
    // Reset secondState, increment minuteState
    // This works because useEffect secondState is a dependency and every time it is changed this is checked.
    if (secondState === 59) {
      setSecondState(0);
      setMinuteState((prevState) => {
        return prevState + 1;
      })
    };
    
    return () => {
      startButton.removeEventListener('click', handleStart);
    }
  }, [minuteState, secondState, handleStart]);

  // Since waldo information is async, I thought useEffect might be most appropriate
  useEffect(() => {
    const myImage = document.querySelector('#universe113');
    const myPointer = document.querySelector('#pointer-target');
    const waldoButtonContainer = document.querySelector('#waldo-button-container');
    const waldoButtons = document.querySelectorAll('button[data-waldo]');
    const navWaldoImages = [...document.querySelectorAll('div[data-waldo-div')];

    // If I did const imageHandler = myImageHandler(waldoButtonContainer, myPointer, pointerState, setPointerState)
    // There would be no way to include the event argument, by creating a HOC I'm able to use the imageHandler's e param
    const imageHandler = function(e) {
      return myImageHandler(waldoButtonContainer, myPointer, pointerState, setPointerState, e);
    }

    function waldoButtonHandler(e, i) {
      waldoButtonContainer.style.visibility = 'hidden';
    }

    waldoButtons.forEach((button, i) => {
      button.addEventListener('click', waldoButtonHandler);
      if (childrenState.length === 0 || !waldoButtonContainer) {
        return;
      } else if (myWaldosArray[i].isSelected){
          navWaldoImages[i].style.visibility = 'hidden';
      }
    })

    myImage.addEventListener('click', imageHandler);

    return function cleanup() {
      myImage.removeEventListener('click', imageHandler);

      waldoButtons.forEach((button) => {
        button.removeEventListener('click', waldoButtonHandler)
      })
    }

  }, [pointerState, childrenState]);

  function waldoButtonHandler(data) {
    
    if (returnCondition(data, pointerState)) {
      setChildrenState((prevState) => [...prevState, data]);
      data.changePropValue(data, 'isSelected', true);
      return;
    }
      return null;
  }
  
  return (
    <div className="App" data-testid='app' >
      <Navbar seconds={secondState} minutes={minuteState} />
      <ImgContainer characters={myWaldosArray} buttonHandler={waldoButtonHandler} clickCoords={pointerState} children={childrenState} />
    </div>
  );
}

export default App;
