import React from "react";
import SearchBar from "./SearchBar";
import {Link} from 'react-router-dom'
import style from '../Styles/Nav.module.css'


const Nav = ({onSearch})=> {
    return (
   <nav className={style.estiloNav}>
            <SearchBar oneSearch={onSearch}/>
        <div>
            <Link to= '/about' >About</Link> 
        </div>

        <div>
            <Link to= '/home'>Home</Link>         
        </div>
    </nav>
        

    )
}

export default Nav;