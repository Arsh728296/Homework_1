import { Outlet } from "react-router-dom";
import Letter from './letter/letter';

export default function Letters({state, signedIn, filterLetters}){


    return (
        
        <div >
            {
                signedIn.signedIn ? state === null ? 'Loading' : state.messages.filter((letter)=> letter.ownerID === signedIn.accountID).map((message) =>{
                    return(
                        <Letter state = {state} filterLetters={filterLetters} key = {message.id} message = {message} style = {{border: 'solid black 1px'}} />
                     
                    )
                }) : 'PLEASE SIGN IN TO SEE YOUR MESSAGES'
            }
           <Outlet />
        </div>
    )
}