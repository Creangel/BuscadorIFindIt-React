import { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

export const SearchBar = ({ query, searchBox, onQuery, disposition }) => {

    const [ inputValue, setInputValue ] = useState("");
    const [options, setOptions] = useState([]);
    const searchBarIcon = `data:image/png;base64,${searchBox.searchBarIcon}`;
    const stylesConfiguration = "header" in disposition ? disposition.header.stylesConfiguration : {};

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
        if(target.value.trim() !== ""){ 
            onGetSuggestions(target.value.trim());
        } else {
            setOptions([]); 
        }
    }

    const onAutocompleteChange = (event, selectedOption) => {
        onInputChange({ target: { value: selectedOption } });
        onQuery(selectedOption.trim())
    };

    const onSubmit = (event) => {
        event.preventDefault();
        setInputValue(inputValue.trim());
        onQuery(inputValue.trim())
    }

    const onGetSuggestions = async (query) => {
        const seId = sessionStorage.getItem("finderId");
        if(window.getSuggestions && query !== ""){
            let suggestions = await window.getSuggestions(seId, query);
            let query_s = "query_s" in suggestions ? suggestions.query_s : [];
            let newOptions = [];
            Object.keys(query_s).forEach( key => { newOptions.push(query_s[key]) } );
            setOptions(newOptions);
        }else{
            setOptions([]);
        }
    }

    useEffect(() => {
        setInputValue( query === "*" ? "" : query );
    }, [ query ]);

    useEffect(() => {
        onGetSuggestions(query);
    }, []);

    const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
    const checkedIcon = <CheckBoxIcon fontSize="small" />;

    return (
        <div id="searchbar-container" style={{ 
            backgroundColor: stylesConfiguration.backgroundColor , 
            display: 'flex', 
            justifyContent: 'end',
            paddingBottom: '10px',
            paddingRight: '10px',
        }} 
        >
            <div id={searchBox.id}>
                <form onSubmit={ onSubmit }>
                    <FormControl sx={{ width: '40ch' }}>
                            <Autocomplete
                                filterOptions={(x) => x}
                                options={ options }
                                freeSolo
                                sx={{ ml: 1, flex: 1 }}
                                disableClearable
                                value={ inputValue }
                                onChange={ onAutocompleteChange }
                                slotProps={{
                                    listbox: {
                                        component: 'ul', // Customize the listbox component
                                        sx: {
                                            margin: 0,
                                            padding: 0,
                                            borderRadius: '0',
                                        },
                                    },
                                }}
                                renderOption={(props, option, { selected }) => {
                                    const { key, ...optionProps } = props;
                                    return (
                                      <li style={{ padding : '0',
                                                   margin: '1',
                                                   borderRadius: '0',
                                                }}  
                                          key={key} {...optionProps}
                                      >
                                        <TextField size="small"
                                                   value={option}
                                                   style={{ width: '100%'}}
                                                   sx={{
                                                    
                                                    }}
                                                    slotProps={{
                                                        ...props,
                                                        input: {
                                                            sx: { backgroundColor: 'white', 
                                                                  borderRadius: '0',
                                                                  '&:hover': {
                                                                     backgroundColor: '#dedfe0', // Add hover effect
                                                                  },
                                                                 }                                                        },
                                                    }} 
                                        />
                                      </li>
                                    );
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        size="small"
                                        placeholder={ query === "*" ? searchBox.searchBarPlaceholder : query }
                                        name="search" 
                                        id="search"
                                        onChange={ onInputChange }
                                        slotProps={{
                                            input: {
                                                ...params.InputProps,
                                                sx: { backgroundColor: 'white' },
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton type="button" 
                                                                    sx={{ p: '1px' }}
                                                                    onClick={onSubmit}>
                                                            <img src={searchBarIcon} alt='' />
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            },
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
