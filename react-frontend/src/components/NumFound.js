export const NumFound = ({ rangeDocs, numfounds, stylesConfiguration}) => {
    return (
        <div id="results-summary-container" 
             style={{ paddingLeft: '15px', 
                      fontSize: stylesConfiguration.fontSize,
                      fontFamily : stylesConfiguration.fontFamily,
                      fontWeight : stylesConfiguration.fontWeight,
                      fontStyle : stylesConfiguration.fontStyle,
                    }}>
            <div >Mostrando { rangeDocs ?? "0" } de aproximadamente { numfounds ?? "0" } resultados </div>
        </div>
    );
};

