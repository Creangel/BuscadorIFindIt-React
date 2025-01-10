import { useState, useEffect } from 'react';
import { getHeaderImage } from '../helpers/getHeaderImage';

export const useFetchHeaderImage = ( headerImageName ) => {
    const [headerImage, setHeaderImage] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const headerImage = await getHeaderImage( headerImageName );
        setHeaderImage( headerImage );
        setIsLoading( false );
    }

    useEffect(() => {
        getImages( headerImageName );
    }, []);
    
    return { 
        headerImage, 
        isLoading 
    };
};