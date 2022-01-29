import SignInForm from "./signInform";
import { NavLink, Outlet } from "react-router-dom";


function SignIn({state, signedIn,  handleSignIn}){
    return(
        <div>
            <SignInForm state={state} signedIn = {signedIn} handleSignIn = {handleSignIn} />
            <NavLink to = '/register'> Registration </NavLink> |{' '}
            <Outlet />
        </div>
        
    )
}

export default SignIn