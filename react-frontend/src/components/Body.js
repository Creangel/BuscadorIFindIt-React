import { Filters } from "./Filters";
import { DrawResults } from "./DrawResults";
import { SpellChecker } from "./SpellChecker";
import { DrawNoResultsText } from "./DrawNoResultsText";
import { NumFound } from "./NumFound";
import Grid from '@mui/material/Grid2'; 

export const Body = ({ disposition, findResponse, finderData, onSearch }) => {
    console.log("Hello my Filters: finderData => ", finderData.filters);
    const resultDocs = ( findResponse?.docsInfo?.docs?.length ?? 0 ) >= 1;
    const filtersExist = ( finderData?.filters?.length ?? 0 ) >= 1;

    return (
            <Grid container spacing={2} direction="row" >
                <Grid id="filters_grid" size={2} spacing={0} direction="column">
                        {
                            resultDocs && filtersExist && (
                                <Filters finderData={ finderData }
                                        onSearch={ onSearch }
                                        disposition={ disposition }
                                />
                            )
                        }
                </Grid>
                <Grid id="results_grid" size={10} container spacing={2} direction="column" >
                    <SpellChecker finderData={finderData} onSearch={onSearch} />
                    <Grid container spacing={2} direction="column" >
                        <Grid>
                            {("hasResultsSummarySection" in disposition && disposition.hasResultsSummarySection) && (
                                <NumFound
                                    rangeDocs={findResponse.docsInfo.rangeDocs}
                                    numfounds={findResponse.docsInfo.numFound}
                                />
                            )}
                        </Grid>
                        <Grid >
                            {resultDocs ? (
                                <DrawResults
                                    docs={findResponse.docsInfo.docs}
                                    snippets={findResponse.snippets}
                                    disposition={disposition}
                                    query={finderData.query}
                                />
                            ) : (
                                <DrawNoResultsText query={finderData.query} />
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
};