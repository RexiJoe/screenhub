import "./search-bar.css"
import {AiOutlineSearch} from "react-icons/ai";

function SearchBar(props){
    return(
        <div className={` search-bar ${props.show ? "show" : ""}`}>
            
            <input 
            type="text" 
            placeholder="Buscar / Search" 
            className={` search-input ${props.show ? "show" : ""}`} />

            <AiOutlineSearch className="search-icon" />
        

        </div>
    )
};

export default SearchBar