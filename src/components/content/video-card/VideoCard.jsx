import "./video-card.css";
import {useNavigate} from "react-router-dom";

function VideoCard(props){

    const navigate = useNavigate();

    let click = ()=> navigate(`/${props.link}`)

    return(
        <div onClick={click} title={props.title} className="video-card">
            <img className="video-card-image"
                alt={props.title}
                src={require(`../../../images/${props.image}.jpg`)} 
            />
            <div className="video-card-description">
                <h1  className="video-card-title">{props.title}</h1>

                <div className="date-genre" >
                    <p className="video-card-date">{props.date}</p>
                    <div className="video-card-genre" > {props.genero} </div>
                </div>
            </div>
            
        </div>
    )
};

export default VideoCard