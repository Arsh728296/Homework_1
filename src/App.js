import Header from './components/header/header';
import Letters from './components/letters/letters';
import Select from './components/select/select';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';


function App() {

  const [state, setState] = useState(null); 

  

  function handleChange(option, color ){
      state.messages.map((message)=>{
        return  message[option] = color;
      })
  
  setState(state)
      

  }

    
  useEffect(()=>{
      fetch('./db.json')
      .then((res) => res.json())
      .then((res) => {
          setState(res);
      })    

  }, [])


  return (
    <>
        <Header />
        
        <Routes>
          <Route path= '/letters' element={<Letters state = {state} />}></Route>
          <Route path= '/select' element={<Select handleChange = {handleChange} />}></Route>
        </Routes>
    </>
  );
}

export default App;
