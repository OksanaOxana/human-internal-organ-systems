import { useState } from 'react';
import './App.css';
import { data } from './data';
import MakeTasks from './makeTasks';




function App() {
 
  const [systems, setSystems] = useState(0);
  
  const {name, image, description, } = data[systems];

  /*const [showText, setShowText] = useState(false)*/
 
  
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


   const [showMore, setShowMore] = useState(false);

  

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
        <p>{showMore? description : description.substring(0,30)+"..."}<button className='btn'  onClick={() => setShowMore(!showMore)} >{showMore ? "less information" : "more information"}</button></p>
      </div>

      <div className="container">
        <button className='twoButton' onClick={previousSystem} >prev</button>
        <button className='twoButton' onClick={nextSystem} >next</button>
      </div>
<div>
   <MakeTasks />
</div>
    </div>


 );

}


export default App;
