import Header from './components/header/header';
import Letters from './components/letters/letters';
import Select from './components/select/select';
import SignIn from './components/signIn/signIn';
import Register from './components/Register/register';


import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';


import './App.css';


function App() {

  const [state, setState] = useState(null); 
  const [signedIn, setSignedAccount] = useState({
    signedIn: false,
    accountID: '',
    ownerName: ''
  })
  

  function handleChange(option, color ){
      state.messages.map((message)=>{
        return  message[option] = color;
      })
  
      setState(state)
  }

  function handleSignIn(boolean, ID, name){
      setSignedAccount({
        signedIn: boolean,
        accountID: ID,
        ownerName: name
      })
  }

  function handleRegistration(newUser){
      let accountExists = false;
      state.users.forEach(user => {
        if(user.phoneNumber === newUser.phoneNumber || user.email === newUser.email){
          alert('You already have account. Please, sign in.');
          accountExists = true;
          return
        }  
      });

      if(!accountExists){
        state.users.push({
          ID: state.users.length + 1,
          name: newUser.name,
          surname: newUser.surName,
          email: newUser.email,
          password: newUser.password,
          phoneNumber: newUser.phoneNumber,
        })

        setState({...state})
      }

      
  }

  function filterLetters(newState){
      setState(newState);
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
          <Route path= '/letters' element={<Letters state = {state} signedIn = {signedIn} filterLetters = {filterLetters} />}></Route>
          <Route path= '/select' element={<Select handleChange = {handleChange} />}></Route>
          <Route path= '/signIn' element={<SignIn state = {state} signedIn = {signedIn} handleSignIn = {handleSignIn} />}  ></Route>
          <Route path= '/register' element={<Register handleRegistration = {handleRegistration} />}></Route>
        </Routes>
    </>
  );
}

export default App;
