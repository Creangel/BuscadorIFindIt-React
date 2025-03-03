export const NumFound = ({ rangeDocs, numfounds}) => {
    return (
        <div id="results-summary-container" >
            <div >{ rangeDocs ?? "0" } de aproximadamente { numfounds ?? "0" }</div>
        </div>
    );
};

