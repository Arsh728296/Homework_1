// import { useState } from "react"
import { Outlet } from "react-router-dom"

export default function Select ({handleChange}){

    // const [option, setOption] = useState('red');
    // const [color, setColor] = useState('text');
    let color = '';
    let option = '';

    return (

        <div >

            <label> Select a color and an option </label>

            <select name="colors" className="options"  onChange={(e)=>{
                // setColor(e.target.value);
                color = e.target.value
                handleChange(option, e.target.value);
            }}>
                    <option></option>
                    <option value="red"> red </option>
                    <option value="black" > black </option>
                    <option value="purple"> purple </option>
                    <option value="orange"> orange </option>
            </select>



            <select name="option" className="options"   onChange={(e)=>{
                // setOption(e.target.value );
                option = e.target.value;
                handleChange(e.target.value + 'Color', color);

            }}>
                    <option></option>
                    <option value='text'> text </option>
                    <option value='name'> name </option>
            </select>


            <Outlet />

        </div>
    )
}