import React from 'react';

export const NumFound = ({ rangeDocs, numfounds}) => {
    return (
        <div className="col col-lg-3 col-sm-12 col-md-4" id="numFound" >
            <div >{ rangeDocs === undefined ? "0" : rangeDocs } de aproximadamente { numfounds === undefined ? "0" : numfounds }</div>
        </div>
    );
};

