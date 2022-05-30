import '../modules/styling-modules/App.css';
import Navbar from './Navbar';
import ImgContainer from './ImageContainer';
import PointerTarget from './PointerTarget';
import { useEffect } from 'react';
import styles from '../modules/styling-modules/ImageContainer.module.css'

function App() {

  useEffect(() => {
    const myImage = document.querySelector('#img-container');
    // const myBody = document.querySelector('window');

    myImage.addEventListener('click', function(e) {
      let foo = e.clientX;
      let bar = e.clientY;

      console.log(foo, bar)
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
