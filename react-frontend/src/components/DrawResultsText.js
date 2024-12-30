export const DrawResultsText = ({ infoDrawResult, doc }) => {
    return (
        <div className="row">
            <div className="">
                <strong> { infoDrawResult.showName } : </strong> { doc[ infoDrawResult.field ] } 
            </div>
        </div>
    )
}