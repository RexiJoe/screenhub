function Premieres(props){
    const premieres = ["Recientes", "Estrenos", "Mas Vistos ", "Recomendados"]

    return(
        <select className={props.show ? "show" : ""} >
            {
                premieres.map((e)=>{
                    return(
                        <option value={e}> {e} </option>
                    )
                })
            }
        </select>
    )
};

export default Premieres