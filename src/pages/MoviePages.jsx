import movieData from "../data"
import MoviePage from "./MoviePage"
import {useParams} from "react-router-dom"

function MoviePages(){

    const { MP } = useParams()

    const data = movieData

    return(
        <>
            {
                data.map((movie)=>{

                if ( MP === movie.link ){

                        return(
                            <MoviePage title={movie.title} date={movie.date} genre={movie.genre} /> 
                        )
                    }

                })
            }
        </>
    )
}

export default MoviePages