import { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

export const SearchBar = ({ query, searchBox, onQuery }) => {

    const [ inputValue, setInputValue ] = useState('');
    const searchBarIcon = `data:image/png;base64,${searchBox.searchBarIcon}`;

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onAutocompleteChange = (event, selectedOption) => {
        onInputChange({ target: { value: selectedOption } });
        onQuery(selectedOption.trim())
    };

    const onSubmit = (event) => {
        event.preventDefault();
        onQuery(inputValue.trim())
        setInputValue(inputValue.trim());
    }

    useEffect(() => {
        if( query !== "*" ){
            setInputValue( query );
            return;
        }
    }, [ query ]);

    return (
        <div id="searchbar-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }} >
            <div id={searchBox.id}>
                <form onSubmit={ onSubmit }>
                    <FormControl sx={{ width: '40ch' }}>
                            <Autocomplete
                                freeSolo
                                sx={{ ml: 1, flex: 1 }}
                                disableClearable
                                options={ ["ministerio", "creacion"] }
                                onChange={ onAutocompleteChange }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        placeholder={ query === "*" ? searchBox.searchBarPlaceholder : query }
                                        name="search" 
                                        id="search"
                                        value={ inputValue }
                                        onChange={ onInputChange }
                                        InputProps={{
                                            ...params.InputProps,
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton type="button" 
                                                                sx={{ p: '2px' }} 
                                                                onClick={onSubmit}>
                                                        <img src={searchBarIcon} alt='' />
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                )}
                            />
                    </FormControl>
                </form>
            </div>
        </div>                      
    );
};
