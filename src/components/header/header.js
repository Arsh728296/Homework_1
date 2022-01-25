import { NavLink } from "react-router-dom"

function Header(){
    return(
        <nav style = {{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>

            <NavLink to = '/letters'>Letters</NavLink> |{' '}
            <NavLink to = '/select'> Select</NavLink>

        </nav>
    )
}

export default Header