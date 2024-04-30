import { useState } from 'react';

import logo from './logo.svg';
import './App.css';

const App = () => {
  //Counting button
  const number = 20;
  const incremenet = ()=> {
    setCount(count + number);
  }
  const [count, setCount] = useState(0);
  
  //Change name button
  const nameInButton = "Change name";
  const setToJasser = ()=> {
    setName(name + "Jasser");
  }
  const [name, setName] = useState(0);
  
  return(
    <div className="min-h-screen w-full bg-[#AF8260]">
      <div className="flex flex-col gap-y-4 w-full items-center justify-center">
        <h1 className='text-white'> Hey</h1>
        current count is : {count}
        <button onClick={incremenet} className='transition-all duration-175 bg-red-600 text-white p-6 hover:bg-blue-400'> click me </button>
        <button onClick={setToJasser} className='transition-all duration-175 bg-[#E8DFCA] w-1/3 h-40 my-48 active:bg-violet-700 '>{name}</button>
      </div>
    </div>
  )
}
//test
export default App;