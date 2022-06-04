import '../utils/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImgContainer';
import { useCallback, useEffect, useState, useRef } from 'react';
import { grabDocs, sendScoreboardData } from '../firebase/firebase-config';
import { myImageHandler, returnCondition, gameoverChecker } from '../utils/helpers/App-helper';
import Scoreboard from './Scoreboard';

function App() {

  // Information for my waldo objects, async data
  const [myWaldosArray, setMyWaldosArray] = useState([]);
  const [scoreboardArray, setScoreboardArray] = useState([]);

  // Used to change where my target div is via style prop.
  const [pointerState, setPointerState] = useState( { top: 0,left: 0, } );
  // const goodGame = gameoverChecker();

  // State that gets filled with 'targeted'.
  const [childrenState, setChildrenState] = useState([]);

  // State for navbar's timer
  const [timerState, setTimerState] = useState([0, 0]);

  // Scoreboard states
  const [inputState, setInputState] = useState('');
  const [disableButton, setDisableButton] = useState(false);

  // Used to stop timer in the interval
  // For some reason clearInterval() was not stopping myInterval.
  const stopTimer = useRef(null);
  // Automatically render once async data arrives
  useEffect(() => {
    async function fetch() {
      const waldoData = await grabDocs('waldoRef');
      const scoreboardData = await grabDocs('scoreRef');
      setMyWaldosArray(waldoData);
      setScoreboardArray(scoreboardData);
    }
    fetch();
  }, []);

  // useCallback is used to deal with having to use a  callback function for an effect
  // Initially everything I have inside my handleStart() was inside useEffect() which caused bugs because of mounting
  // Putting it in useCallback it will only be invoked when handleStart is invoked.
  const myTimer = setInterval;

  const handleStart = useCallback(() => {

    myTimer(() => {
      if (stopTimer.current === true) {
        clearInterval(myTimer);
        return;
      }
      
      setTimerState((prevState) => {
        return [prevState[0] + 1, prevState[1]];
      });
    }, 1000);
    
    return () => {
      clearInterval(myTimer);
    };

  }, [myTimer, ]);
  
  // Used to build a proper minute & second timer
  useEffect(() => {
    if (timerState[0] === 59) {
      setTimerState((prevState) => {
          return [prevState[0] = 0, prevState[1] + 1];
      })
    };
    // Once stopTimer becomes true handleStart's interval stops
    stopTimer.current = gameoverChecker(myWaldosArray);
  }, [timerState, myWaldosArray]);

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

    waldoButtonContainer.style.visibility = 'hidden';
    if (returnCondition(data, pointerState)) {
      setChildrenState((prevState) => [...prevState, data]);
      data.changePropValue(data, 'isSelected', true);
      return;
    }
      return null;
  };

  function inputHandler(e) {
    const input = e.target;
    setInputState((prevState) => {
      return prevState = input.value;
    });
  }

   async function submitHandler(e) {
    console.log(inputState);
    if (!inputState) {
      sendScoreboardData('Anonymous', timerState);
      return;
    }

    sendScoreboardData(`${inputState}`, timerState);
    const scoreboardData = await grabDocs('scoreRef');
    setScoreboardArray(scoreboardData);
    setInputState('');
    setDisableButton(true);
  };

  return (
    <div className="App" data-testid='app' >
      <Navbar timer={timerState}  buttonHandler={startButtonHandler} characters={myWaldosArray} />

      <ImgContainer characters={myWaldosArray} startCon={timerState} buttonHandler={waldoButtonHandler} clickCoords={pointerState} children={childrenState} imgHandler={universeImgHandler}/>

      {gameoverChecker(myWaldosArray) ? <Scoreboard inputValue={inputState} inputHandler={inputHandler} submitHandler={submitHandler} userData={scoreboardArray} disableButton={disableButton} /> : null }
    </div>
  );
}

export default App;
