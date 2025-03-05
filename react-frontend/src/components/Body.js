import { Filters } from "./Filters";
import { DrawResults } from "./DrawResults";
import { SpellChecker } from "./SpellChecker";
import { DrawNoResultsText } from "./DrawNoResultsText";

export const Body = ({ disposition, findResponse, finderData, onSearch }) => {
    console.log("Hello my Filters: finderData => ", finderData.filters);
    const resultDocs = ( findResponse?.docsInfo?.docs?.length ?? 0 ) >= 1;
    const filtersExist = ( finderData?.filters?.length ?? 0 ) >= 1;

    return (
        <div>
            <div>
                <div>
                    {
                        resultDocs && filtersExist && (
                            <Filters finderData={ finderData }
                                     onSearch={ onSearch }
                            />
                        )
                    }
                </div>
                <div>
                    < SpellChecker finderData={ finderData }
                                   onSearch={ onSearch } 
                    />
                    {
                        resultDocs ?
                            ( <DrawResults docs = { findResponse.docsInfo.docs }
                                           snippets = { findResponse.snippets }
                                           disposition = { disposition }
                                           query = { finderData.query }
                              /> )
                        : 
                            ( <DrawNoResultsText query={ finderData.query } /> )               
                    }
                </div>
            </div>
        </div> 
    );
};