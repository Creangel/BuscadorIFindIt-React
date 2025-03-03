import { useState, useEffect } from 'react';
import { getSearchBarIcon } from '../helpers/getSearchBarIcon';

export const useFetchSearchBarIcon = ( searchBarId ) => {
    const [ searchBarIcon, setSearchBarIcon ] = useState("magnifying_glass.png");
    const [ isLoading, setIsLoading ] = useState(true);

    const getIcon = async () => {
        if( searchBarId === null || searchBarId === undefined ){
            return;
        }

        const searchBarIcon = await getSearchBarIcon( searchBarId );
        if( searchBarIcon !== null ){
            setSearchBarIcon(searchBarIcon);
            setIsLoading( false );
        }
    }  

    useEffect(() => {
        getIcon(searchBarId);
    }, []);
    
    return { 
        searchBarIcon, 
        isLoading 
    };
};