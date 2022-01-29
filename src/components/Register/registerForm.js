import { useState } from "react"

export default function RegisterForm ({handleRegistration}){
    
    let [user, setUser] = useState({
        name: '',
        surname: '',
        email: '',
        password: '',
        repeatPassword: '',
        phoneNumber: '',
    })


    function handleInputChange (eve){
        const target = eve.target;
        const value = target.value;
        const name = target.name;
        
        
        setUser({
            ...user,    
            [name]: value,
        })   
    }


    return(
        <form onSubmit={(e)=>{
            if(user.repeatPassword !== user.password){
                alert('Your password is not the same!')
            } else {
                handleRegistration(user);
            }
            e.preventDefault()
        }}>
            <label>
                <h1>
                    Please, fill the fields.
                </h1>
            </label>
            <br />

            <label> Insert your name.   {'        '}
                <input type='text' name = 'name' value = {user.name} onChange={handleInputChange} />
            </label>
            <br />

            <label> Insert your surname.   {'        '}
                <input type='text' name = 'surname' value = {user.surname} onChange={handleInputChange} />
            </label>
            <br />

            <label> Insert your Email.   {'        '}
                <input type='mail' name = 'email' value = {user.email} onChange={handleInputChange} />
            </label>
            <br />

            <label> Insert your password.   {'        '}
                <input type='password' name = 'password' value = {user.password} onChange={handleInputChange} />
            </label>
            <br />

            <label> Repeat your password.   {'        '}
                <input type='password' name = 'repeatPassword' value = {user.repeatPassword} onChange={handleInputChange} />
            </label>
            <br />

            <label> Insert your phone number.   {'        '}
                <input type='number' name = 'phoneNumber' value = {user.phoneNumber} onChange={handleInputChange} />
            </label>

            <br />
            <button type = 'submit'> Submit </button>

        </form>
    )
}