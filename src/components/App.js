import '../utils/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImgContainer';
import { useCallback, useEffect, useState } from 'react';
import { myWaldosArray } from '../firebase/firebase-config';
import { myImageHandler, returnCondition, navbarFromWaldoButton } from '../utils/helpers/App-helper';

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

  // State for navbar's timer
  const [timerState, setTimerState] = useState([0, 0]);

  useEffect(() => {
    if (timerState[0] === 59) {
      setTimerState((prevState) => {
          return [prevState[0] = 0, prevState[1] + 1];
      })
    };
  }, [timerState]);

  // useCallback is used to deal with having to use a  callback function for an effect
  // Initially everything I have inside my handleStart() was inside useEffect() which caused bugs because of mounting
  // Putting it in useCallback it will only be invoked when handleStart is invoked.
  const handleStart = useCallback(() => {
    const myTimer = setInterval(() => {
      setTimerState((prevState) => {
        return [prevState[0] + 1, prevState[1]];
      });
    }, 1000);

    return () => {
      clearInterval(myTimer);
    }
  }, []);
  // Used to start my app's timer
  function startButtonHandler(e) {
    if (!timerState[0] && !timerState[1]) {
      handleStart();
    }
  }

  // When a user clicks on the image myImageHandler is called
  function universeImgHandler(e) {
    const originalEvent = e.nativeEvent;
    const pointerTarget = e.target.parentElement.children[1];
    const waldoButtonContainer = pointerTarget.children[0];

    myImageHandler(waldoButtonContainer, pointerTarget, pointerState, setPointerState, originalEvent);
  }

  // When a user clicks on a waldo button, a border will appear around a "waldo" if they've been properly selected
  function waldoButtonHandler(data, e) {
    const waldoButtonContainer = e.target.parentElement;
    const waldoIndex = myWaldosArray.indexOf(data);

    const navImages = navbarFromWaldoButton(e).children[0].children;

    waldoButtonContainer.style.visibility = 'hidden';
    if (returnCondition(data, pointerState)) {
      setChildrenState((prevState) => [...prevState, data]);
      data.changePropValue(data, 'isSelected', true);
      navImages[waldoIndex].style.visibility = 'hidden';
      return;
    }
      return null;
  };
  
  // minutes={minuteState}
  return (
    <div className="App" data-testid='app' >
      <Navbar timer={timerState}  buttonHandler={startButtonHandler} />
      <ImgContainer characters={myWaldosArray} buttonHandler={waldoButtonHandler} clickCoords={pointerState} children={childrenState} imgHandler={universeImgHandler}/>
    </div>
  );
}

export default App;
