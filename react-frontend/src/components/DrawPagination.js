import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from "react";

export const DrawPagination = ({ numfounds, finderData, onSearch }) => {

    const [page, setPage] = useState(1);
    const maxPage= Math.round(( numfounds ) / 10)

    const onPageChange = (event, value) => {
      finderData.pageNum = value;
      finderData.start = ( value * 10 ) -10;
      onSearch( finderData );
      setPage(value);
    };

    useEffect(() => {
        setPage(1);
    }, [finderData.query]);

    if( numfounds > 10 ){
        return (
                    <Stack spacing={2} >
                        <Pagination 
                            count={maxPage} 
                            color="primary" 
                            page={page}
                            onChange={ onPageChange }
                        />
                    </Stack>
                )
    }          
    return;
};
