import { numeratePags, getNewPageVal } from "../helpers/numeratePags";

export const DrawFooter = ({ info, finderData, onSearch }) => {

    const maxPage= Math.round(( info.numfounds ) / 10)
    const rangeInl= parseInt( info.rangeDocs.split("-")[0] )
    const rangeFnl= parseInt( info.rangeDocs.split("-")[1] )
    const spanClassName = "col-lg-1 col-sm-1 col-md-1 pagenum"

    const onPageChange = ({ target }) => {
        const newPage = getNewPageVal( target.id, maxPage, rangeInl, rangeFnl );
        if(  finderData.pageNum === newPage ){
            return;
        }
        finderData.pageNum = newPage;
        finderData.start = ( newPage * 10 ) -10;
        onSearch( finderData );
    };  

    if( info.numfounds > 10 ){
        return (
                <div className="container mt-10 text-center">
                    <div className="row justify-content-md-center">
                        <div className="col-lg-3 col-sm-3 col-md-3">
                            <span className={ spanClassName } id="leftArrow" onClick= { onPageChange }> 
                                { ( numeratePags( 1, maxPage, rangeInl ) ) !== 1? "←  " : "   " } 
                            </span>
                            <span className={ spanClassName + " pagenum" } id="pageNum_1" onClick={ onPageChange } > 
                                { numeratePags( 1, maxPage, rangeInl ) }
                            </span> 
                            <span className={ spanClassName } id="sepPagenum" >  
                                { ( numeratePags( 1, maxPage, rangeInl ) ) !== "" ? "-" : "   " }  
                            </span> 
                            <span className={ spanClassName + " pagenum" } id="pageNum_2" onClick={ onPageChange } > 
                                { numeratePags( 2, maxPage, rangeInl ) }
                            </span> 
                            <span className={ spanClassName } id="leftArrow"  >
                                { ( numeratePags( 2, maxPage, rangeInl )) > 0 ? "-" : "   " }  
                            </span> 
                            <span className={ spanClassName + " pagenum" }  id="pageNum_3" onClick={ onPageChange }> 
                                { numeratePags( 3, maxPage, rangeInl ) }
                            </span> 
                            <span className={ spanClassName } id="sepPagenum" >  
                                { ( numeratePags( 3, maxPage, rangeInl ) ) > 0 ? "-" : "   " }
                            </span> 
                            <span className={ spanClassName + " pagenum" } id="pageNum_4" onClick={ onPageChange }> 
                                { numeratePags( 4, maxPage, rangeInl ) }
                            </span> 
                            <span className={ spanClassName } id="sepPagenum" >  
                                { ( numeratePags( 4, maxPage, rangeInl ) ) > 0 ? "-" : "   " }  
                            </span>
                            <span className={ spanClassName } id="pagenumleft" onClick={ onPageChange }> 
                                     ...   { maxPage }
                            </span> 
                            <span className={ spanClassName } id="rigthArrow" onClick={ onPageChange }>
                                { ( numeratePags( 1, maxPage, rangeInl ) ) !== maxPage ? "  →" : "   " }
                            </span> 
                        </div>
                    </div>
                </div>
                )
    }          
    return;
};
