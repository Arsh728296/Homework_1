import { Outlet } from "react-router-dom";
import Letter from './letter/letter';

export default function Letters({state}){

    return (
        
        <div state = {state}>
            <h1>YOU HAVE GOT SOME MESSAGES</h1>

           { state === null ? 'Loading' : state.messages.map((message)=>{
               return(
                   <Letter key = {message.id} message = {message} style = {{border: 'solid black 1px'}} />
                //    <div key = {message.id} style = {{border: 'solid black 1px'}}>

                //        <h3> DATE: {message.date}</h3>
                //        <h2 style = {{color: message.nameColor}}> NAME: {message.name}</h2>
                //        <p style = {{color: message.textColor}}> TEXT: {message.text}</p>

                //    </div>
               )
           })         }

           <Outlet />
        </div>
    )
}