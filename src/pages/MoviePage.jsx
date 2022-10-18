import Main from "../components/content/Main"
import "./movie-page.css"
import VideoPlayer from "./video-player/VideoPlayer"


function MoviePage(props){


    return(
       <div className="MoviePage">
            <VideoPlayer title={props.title} date={props.date} genre={props.genre} />

            <Main />

       </div>
    )
};

export default MoviePage