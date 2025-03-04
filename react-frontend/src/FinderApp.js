import { useEffect, useState } from 'react';
import { Body } from "./components/Body";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { NumFound } from "./components/NumFound";
import { SearchBox } from "./components/SearchBox";
import { useFetchFinderResults } from './hooks/useFetchFinderResults';
import { useFetchDisposition } from './hooks/useFetchDisposition';

const initParams = {
  finderId: sessionStorage.getItem("finderId"),
  inmeta: sessionStorage.getItem("inmeta"),
  pageNum: sessionStorage.getItem("pageNum"),
  query: sessionStorage.getItem("query"),
  start: sessionStorage.getItem("start"),
  rlv: sessionStorage.getItem("rlv"),
  filters: sessionStorage.getItem("filters"),
};

export const FinderApp = () => {

  const [ finderData, setFinderData ] = useState( initParams );
  const { disposition, isLoadingDisposition } = useFetchDisposition( initParams.finderId );
  const { findResponse, isLoading, setQueryParams } = useFetchFinderResults( initParams);

  const onSearch = ( newData ) => {
    setFinderData( {...newData} );
    setQueryParams( {...newData} );
  };

  useEffect(() => {
    console.log("Setting disposition on sessionStorage...");
    sessionStorage.setItem("disposition", JSON.stringify(disposition));
    finderData.filters = disposition.filters;
    setFinderData({...finderData});
    setQueryParams({...finderData});
  }, [ isLoadingDisposition ]);

  useEffect(() => {
    console.log("Setting filters on finderData based on findResponse filters...");
    finderData.filters = findResponse.filters;
    setFinderData({...finderData});
  }, [ isLoading ]); 

  console.log("FinderApp: disposition => ", disposition);
  console.log("FinderApp: findResponse => ", findResponse);
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
                  <Header header={ disposition.header }/>
                )
              }
              {
                "searchBox" in disposition &&
                (
                  <SearchBox searchBox={ disposition.searchBox }
                              onSearch={ onSearch }
                              finderData={ finderData }
                  />
                )
              }
              {
                ("hasResultsSummarySection" in disposition && disposition.hasResultsSummarySection ) && 
                (
                  <NumFound rangeDocs={ findResponse.docsInfo.rangeDocs }
                            numfounds={ findResponse.docsInfo.numFound }
                  />       
                )     
              }
              {
                <Body disposition={ disposition }
                      findResponse={ findResponse }
                      finderData={ finderData } 
                      onSearch={ onSearch } 
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

