import "./header.css";
import SearchBar from "./search-bar/SearchBar.jsx";
import Premieres from "./premieres/Premieres.jsx";
import Genres from "./genres/Genres.jsx";
import ScreenHub from "./sc-logo/Logo.jsx";
import {CgMenu} from "react-icons/cg";
import { useState } from "react";



function Header(props){

    const [show, setShow] = useState(false)

    const toggleShow = ()=>{
        setShow(!show)
    }


    return(
        <header className="header">
            
            <ScreenHub/>

            <CgMenu className="CgMenu" onClick={toggleShow} />

            <SearchBar show={show} />

            <Premieres show={show} />

            <Genres show={show} />

        </header>
    )
};

export default Header