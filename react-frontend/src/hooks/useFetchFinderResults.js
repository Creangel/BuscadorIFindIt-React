import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetchFinderResults = ( bodyData ) => {

    const [queryParams, setQueryParams] = useState(bodyData);
    const [findResponse, setFindResponse] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    const getResults = async () => {
        console.log("Getting query results...");
        console.log("Query params: ", queryParams);
        const resultsList = await getData(queryParams);
        console.log("Got results:", resultsList);
        setFindResponse(resultsList.findResponse);
        setisLoading(false);
    }

    const executeSpellChecker = () => {
        console.log("Checking spell...");
        if (window.callSpellchecker) {
            const disposition = JSON.parse( sessionStorage.getItem("disposition") ); 
            sessionStorage.setItem("query", queryParams.query);
            if (disposition?.spellchecker === null) return;
            const pathService = disposition.spellchecker.pathService; 
            const typeSpell = disposition.spellchecker.type;
            //window.callSpellchecker(pathService, typeSpell);
            window.callSpellchecker("https://ifindit.creangel.com/Spellchecker_minv/wordSpell", typeSpell);
        } else {
            console.error("callSpellchecker is not defined. Make sure the script is loaded correctly.");
        }
    }

    useEffect( () => {
        if ( queryParams.filters === undefined  || Object.keys( queryParams.filters ).length === 0 ) return;
        getResults();
        executeSpellChecker();
    },[queryParams])

    return {
        setQueryParams,
        findResponse,
        isLoading
    }
}
