export const DrawNoResultsText = ({ info }) =>{
    return (<div className="row">
        <div>No existen resultados para la busqueda "{info.query}"</div>
    </div>
    )
}