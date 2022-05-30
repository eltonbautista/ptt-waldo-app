import '../modules/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImageContainer';
import PointerTarget from './PointerTarget';
import { useEffect } from 'react';
import styles from '../modules/styling-modules/ImageContainer.module.css'

function App() {

  // const [pointer, setPointer] = useState(0);

  useEffect(() => {
    const myImage = document.querySelector('#universe113');
    const myPointer = document.querySelector('#pointer-target');

    myImage.addEventListener('click', function(e) {
      let foo = e.offsetX;
      let bar = e.offsetY;

      myPointer.style.position = 'absolute'
      myPointer.style.border = '2px solid white'
      myPointer.style.width = '50px'
      myPointer.style.height = '50px'
      myPointer.style.left = foo -25 + 'px';
      myPointer.style.top = bar + 5 + 'px';
    })
  })

  const test = function(e) {
    console.log(e.offsetX, e.offsetY);
  }

  return (
    <div className="App" >
      <Navbar />
      <ImgContainer clicker={test} />
    </div>
  );
}

export default App;
