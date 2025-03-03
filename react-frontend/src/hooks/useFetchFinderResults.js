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

    useEffect( () => {
        if ( queryParams.filters === undefined  || Object.keys( queryParams.filters ).length === 0 ) return;
        getResults();
    },[queryParams])

    return {
        setQueryParams,
        findResponse,
        isLoading
    }
}
