import { useState } from 'react';
import './App.css';
import { dataSystems } from './tasks'

function MakeTasks () {
    const [tasks, setTasks] = useState(dataSystems);
    const removeSystem = (id)=> {
        let newSystem = tasks.filter((item =>item.id!==id))
        setTasks(newSystem)
    }
   


return (
    <div className='containerTwo'>
        <div>
             <h2>You can also read about {tasks.length} organ systems</h2>
        </div>
       
    {tasks.map((task => {
    const {id, nameSystem,imageSystem} = task
    return (
       
  <div className='containerTwoSmall' key={id}>
    
    <p>{nameSystem}</p>
    <img src={imageSystem} alt="syst" width='50px' height='70px' />
    <button className='btnSmall' onClick={() => removeSystem(id)}>Remove</button>
  </div>
 
    )
    }
    ))}
    </div>)

}

export default MakeTasks;