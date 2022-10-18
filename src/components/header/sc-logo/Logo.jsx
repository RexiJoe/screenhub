import {CgScreen} from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { titles } from "../headerData.js";
import "./sc-logo.css"

function ScreenHub(){

    const navigate = useNavigate();

    let home = ()=> navigate("/")

    return(
        <div onClick={home} className="title">
            <h1 className="t1">{titles.t1}</h1>
             <h1 className="t2">{titles.t2}</h1>
            <CgScreen className="T-icon"/>
        </div>
    )
};

export default ScreenHub