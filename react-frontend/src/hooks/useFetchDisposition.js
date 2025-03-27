import { useState, useEffect } from 'react';
import { getDisposition } from '../helpers/getDisposition';

export const useFetchDisposition = ( finderId ) => {

    const [disposition, setDisposition] = useState({});
    const [isLoadingDisposition, setIsLoadingDisposition] = useState(true);

    const loadDisposition = async () => {
        console.log("Getting disposition...");
        const results = await getDisposition(finderId);
        setDisposition(results.disposition);
        setIsLoadingDisposition(false);
    }

    useEffect( () => {
        loadDisposition();
    },[])

    return {
        disposition,
        isLoadingDisposition
    }
}
