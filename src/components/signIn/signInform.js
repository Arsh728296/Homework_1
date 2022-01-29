import { useState } from "react"
import { Outlet } from "react-router-dom";

function SignInForm({state, signedIn, handleSignIn}){
   
    let users = undefined;
    if(state !== null){
        users = state.users
    }
    

    let [signInInfo, setSignInInfo] = useState({
        email: '',
        password: ''
    })


    function handleInputChange (eve){
        const target = eve.target;
        const value = target.value;
        const name = target.name;
        
        
        setSignInInfo({
            ...signInInfo,    
            [name]: value,
        })   
    }

    function handleSubmit(users, userInfo){
        users.forEach((user)=>{

            if(user.email === userInfo.email && user.password === userInfo.password){
                alert('You are signed in and can see your letters.');
                handleSignIn(true, user.ID, user.name);
                return
            } 

            if(!signedIn.signedIn){
                alert('Please write a correct email and password or make a registration')
            }
        
        }) 
    }

    function signOut(){
        handleSignIn(false, '', '');
    }


    return(
        <div>
        <form onSubmit={(e)=>{
            handleSubmit(users, signInInfo);
            e.preventDefault();
        }}>

            <label>
                Please write your Email. {'         '}
                <input type = 'email' name = 'email' onChange={handleInputChange} >
                </input>
            </label>
            <br />
            <label>
                Please write your password. {'          '}
                <input type = 'password' name = 'password' onChange={handleInputChange} >
                </input>
            </label>
            <br />

            <button type = 'submit'>
                Submit
            </button>
            <Outlet />
        </form>

        {
        
        signedIn.signedIn === true ? <button onClick={()=>{
            signOut()
        }}> Sign Out 
        </button> : null
        
        }
        </div>
    )
}

export default SignInForm;