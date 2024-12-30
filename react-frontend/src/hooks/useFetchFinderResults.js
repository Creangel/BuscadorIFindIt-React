import { useState, useEffect } from 'react';
import { getData } from '../helpers/getData';

export const useFetchFinderResults = ( bodyData ) => {

    const [queryParams, setQueryParams] = useState(bodyData);
    const [results, setResults] = useState([]);
    const [isLoading, setisLoading] = useState(true);	

    const getResults = async () => {
        console.log("Getting query results...");
        const resultsList = await getData(queryParams);
        setResults(resultsList);
        setisLoading(false);
    }

    useEffect( () => {
        getResults();
    },[queryParams])

    return {
        setQueryParams,
        queryResult: results,
        isLoading
    }
}
