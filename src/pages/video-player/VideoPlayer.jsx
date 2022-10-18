import "./video-player.css";

function VideoPlayer(props){
    
    return(
        <div className="video-player-container">
            <div className="video-wrapper">
                <video autoPlay="true" controls src={require("./blackpanter.mp4")} ></video>
            </div>
            
            <div className="video-player-description" >
                <h1 className="video-player-title" >
                    {props.title} 
                </h1>
                
                <p className="video-player-date" > {props.date} </p>

                <div className="video-player-genre" > {props.genre} </div>

            </div>
        </div>

    )
};

export default VideoPlayer