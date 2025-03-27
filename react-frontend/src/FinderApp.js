import { useEffect, useState } from 'react';
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useFetchFinderResults } from './hooks/useFetchFinderResults';
import { useFetchDisposition } from './hooks/useFetchDisposition';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const initParams = {    
  finderId: process.env.REACT_APP_FINDER_ID,
  inmeta:"",
  pageNum: "1",
  query: "*",
  start: "0",
  rlv: "",
  filters: [],
};

export const FinderApp = () => {

  const [ finderData, setFinderData ] = useState( initParams );
  const { disposition, isLoadingDisposition } = useFetchDisposition( initParams.finderId );
  const { findResponse, isLoading, setQueryParams} = useFetchFinderResults( initParams );
  const [filtersOpen, setFiltersOpen] = useState( false );

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const filtersExist = ( findResponse?.filters?.length ?? 0 ) >= 1;

  const handleToggleFilters = () => {
      setFiltersOpen(!filtersOpen);
  };

  const onSearch = ( newData ) => {
    setFinderData( {...newData} );
    setQueryParams( {...newData} );
  };

  useEffect(() => {
    console.log("Setting disposition and finderData on sessionStorage...");

    sessionStorage.setItem("disposition", JSON.stringify(disposition));
    sessionStorage.setItem("finderId", process.env.REACT_APP_FINDER_ID);
    sessionStorage.setItem("inmeta", "");
    sessionStorage.setItem("pageNum", "1");
    sessionStorage.setItem("query", "*");
    sessionStorage.setItem("start", "0");
    sessionStorage.setItem("rlv", "");
    
    finderData.filters = disposition.filters;
    setFinderData({...finderData});
    setQueryParams({...finderData});
  }, [ isLoadingDisposition ]);

  console.log("FinderApp: disposition => ", disposition);
  console.log("FinderApp: finderData => ", finderData);

  return (
    <>
      {
        (!isLoadingDisposition && !isLoading ) && 
          (
            <> 
              {
                "header" in disposition && 
                (
                  <Header disposition={ disposition }
                          onSearch={ onSearch }
                          finderData={ finderData }
                          isSmallScreen={ isSmallScreen }
                          handleToggleFilters={ handleToggleFilters }
                          filtersOpen={ filtersOpen }
                          filtersExist={ filtersExist }
                          findResponse={ findResponse }
                  />
                )
              }
              {
                <Body disposition={ disposition }
                      findResponse={ findResponse }
                      finderData={ finderData } 
                      onSearch={ onSearch }
                      isSmallScreen={ isSmallScreen }
                      filtersExist={ filtersExist }
                />
              }
              {
                "footer" in disposition && 
                (
                  < Footer footer={ disposition.footer } />  
                )
              }
          </>
        )
      }
    </>
  );
};

