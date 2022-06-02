import '../utils/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImgContainer';
import { useCallback, useEffect, useState } from 'react';
import { myWaldosArray } from '../firebase/firebase-config';

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

    // Used for placing pointer targeting div onto image
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

  }, [pointerState, childrenState]);
  

  // Function used for each "waldo" button. This identifies if a "waldo" (piranha plant, bender, r2d2) has been "hit" or not.
  // Takes a char argument which is used complementarily with the switch statement.
  function waldoButtonHandler(char) {

    // A function that returns a conditional, if clause uses falsy because arg "waldo" is an async value.
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
          piranhaPlant.changePropValue(piranhaPlant, 'isSelected', true);
          setChildrenState((prevState) => [...prevState, piranhaPlant]);
        }
      break;
      case 'bender':
        if(foo(bender, 20, 30)) {
          bender.changePropValue(bender, 'isSelected', true);
          setChildrenState((prevState) => [...prevState, bender]);
        }
      break;
      case 'R2D2':
        if(foo(r2D2, 20, 30)) {
          r2D2.changePropValue(r2D2, 'isSelected', true);
          setChildrenState((prevState) => [...prevState, r2D2]);
        }
    } 
    
  }
  
  return (
    <div className="App" data-testid='app' >
      <Navbar seconds={secondState} minutes={minuteState} />
      <ImgContainer characters={myWaldosArray} buttonHandler={waldoButtonHandler} clickCoords={pointerState} children={childrenState} />
    </div>
  );
}

export default App;
