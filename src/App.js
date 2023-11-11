import { useState } from 'react';
import './App.css';
import { data } from './data';

function App() {

  const [systems, setSystems] = useState(0);

  const {name, image, description} = data[systems];

  const previousSystem = () => {
    setSystems ((systems => {
      systems --;
      if (systems<0) {
        systems = data.length-1
      }
      return systems
    }))
  }

  const nextSystem = () => {
    setSystems ((systems=> {
      systems++;
      if (systems>data.length-1) {
        systems=0
      }
      return systems
    }))
  }
   
  return (
    <div className='mainContainer'>
      <div className="container">
        <h1>Human organ systems</h1>
      </div>

      <div className="container">
        <h3>{name}</h3>
      </div>
     
      <div className="container">
        <img src={image} alt='pic' width='200px' height="250px"  />
      </div>

      <div className="container">
        <p>{description}</p>
      </div>

      <div className="container btn">
        <button onClick={previousSystem} >prev</button>
        <button onClick={nextSystem} >next</button>
      </div>
    </div>
  );
}

export default App;
