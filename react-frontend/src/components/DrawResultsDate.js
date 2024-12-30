export const DrawResultsDate = ({ doc, infoDrawResult }) => {
    let months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    let year = ( doc[ infoDrawResult.field ] ).split("T")[0].split("-")[0];
    let month = months[ parseInt( (doc[ infoDrawResult.field ] ).split("T")[0].split("-")[1]) - 1];
    let day = ( doc[ infoDrawResult.field ] ).split("T")[0].split("-")[2];
    let contentDateDoc = day + " De " + month + " Del " + year
    return (
        <div className="row">
            <div className=""><strong> {infoDrawResult.showName} :  </strong> {contentDateDoc} </div>
        </div>
    )
}