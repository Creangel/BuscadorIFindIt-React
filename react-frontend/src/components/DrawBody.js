import { DrawFooter } from "./DrawFooter";
import { DrawFilters } from "./DrawFilters";
import { DrawNoResultsText } from "./DrawNoResultsText";
import { DrawResults } from "./DrawResults";

export const DrawBody = ({ info, finderData, onSearch }) => {

    const filterExist = info.filters.length >= 1;
    const resultDocs = info.contentDoc === "no results";
    const sizeResults = filterExist ? ["col-lg-3 col-sm-3 col-md-3", "col-lg-7 col-sm-8 col-md-8"] : ["col-lg-2 col-sm-1 col-md-1", "col-lg-8 col-sm-10 col-md-10"];

    return (
        <div>
            <div className="row">
                <div className={ sizeResults[0] }>
                    {
                        resultDocs ?
                            ""
                            :
                            filterExist ?
                                <DrawFilters filters={ info.filters } 
                                             finderData={ finderData }
                                             onSearch={ onSearch } />
                                : 
                                ""
                    }
                </div>
                <div className={ sizeResults[1] }>
                    {
                        resultDocs? 
                            <DrawNoResultsText info={ info.dataRender } /> 
                            :
                            <DrawResults info={ info } />
                    }
                </div>
                <div className="col-lg-2 col-sm-1 col-md-1"></div>
            </div>
            {
                !resultDocs && (<DrawFooter info={ info.dataRender }
                                            finderData={ finderData }
                                            onSearch={ onSearch }
                                />)
            }
        </div> 
    );
};