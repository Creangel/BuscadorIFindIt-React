import { useEffect, useState } from "react";
import { Filters } from "./Filters";
import { DrawResults } from "./DrawResults";
import { SpellChecker } from "./SpellChecker";
import { DrawNoResultsText } from "./DrawNoResultsText";
import { NumFound } from "./NumFound";
import { DrawPagination } from "./DrawPagination";
import Grid from '@mui/material/Grid2'; 
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';

export const Body = ({ disposition, findResponse, finderData, onSearch, isSmallScreen, filtersExist }) => {

    console.log("Hello my Filters: finderData => ", findResponse.filters);
    const resultDocs = ( findResponse?.docsInfo?.docs?.length ?? 0 ) >= 1;
    

    return (
            <Grid id="body_container" container spacing={4} direction={{ xs: 'column', md: 'row' }} sx={{ marginTop: "3px" }} >
                <Grid id="filters_grid" size={{xs : 12,  md : 2}} >
                    {!isSmallScreen && (
                            filtersExist && (
                                <Grid item xs={12} md={2} id="filters_grid">
                                    <Filters finderData={ finderData } 
                                            findResponse={ findResponse }
                                            onSearch={ onSearch }
                                    />
                                </Grid>
                            )
                        )
                    }
                    {/* {
                        filtersExist && (
                            <Filters finderData={ finderData } 
                                        findResponse={ findResponse }
                                        onSearch={ onSearch }
                            />
                        )
                    }
                    {
                        <div id="mynewcomponent">

                        </div>
                    } */}
                </Grid>
                <Grid id="results_grid" size={{ xs : 12, md : 10 }} container spacing={1} direction="column" sx={{ paddingRight: '30px'}} >
                    <SpellChecker finderData={finderData} 
                                  onSearch={onSearch} 
                                  stylesConfiguration={disposition.header.stylesConfiguration}/>
                    <Grid container spacing={2} direction="column" >
                        <Grid>
                            {("hasResultsSummarySection" in disposition && disposition.hasResultsSummarySection) && (
                                <NumFound
                                    rangeDocs={findResponse.docsInfo.rangeDocs}
                                    numfounds={findResponse.docsInfo.numFound}
                                    stylesConfiguration={disposition.header.stylesConfiguration}
                                />
                            )}
                        </Grid>
                        <Grid>
                            { resultDocs ? (
                                
                                <Grid container spacing={2} direction="column">
                                    <Grid>
                                        <DrawResults
                                            docs={findResponse.docsInfo.docs}
                                            snippets={findResponse.snippets}
                                            disposition={disposition}
                                            query={finderData.query}
                                        />
                                    </Grid>
                                    <Grid container sx={{ justifyContent: "center" }}>
                                        <DrawPagination numfounds={findResponse.docsInfo.numFound}
                                                    rangeDocs={findResponse.docsInfo.rangeDocs}
                                                    finderData={finderData}
                                                    onSearch={onSearch}
                                        />
                                    </Grid>
                                </Grid>
                            ) : (
                                <DrawNoResultsText query={finderData.query} 
                                                   stylesConfiguration={disposition.results.stylesConfiguration}
                                />
                            )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
    );
};