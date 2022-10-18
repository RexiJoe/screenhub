import {VCData} from "./data.js"
import VideoCard from "./VideoCard.jsx"

function VideoCards(){
    const videos = VCData
    return(
        <>
            {videos.map((video)=>{
                return(
                    <VideoCard
                        image={video.portada}
                        title={video.title}
                        date={video.date}
                        genero={video.genre}
                        link={video.link}
                     />
                )
            })}
        </>
    )
};

export default VideoCards