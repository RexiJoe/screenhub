function Genres(props){

    const generos = ["Todos", "Accion", "Drama", "Comedia", "Romance", "Terror"]

    return(
        <select className={props.show ? "show" : ""} >
            {
                generos.map((e)=>{
                    return(
                        <option value={e}> {e} </option>
                    )
                })
            }
        </select>
    )
};

export default Genres