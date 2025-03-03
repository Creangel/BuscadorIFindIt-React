import { useState } from 'react';

export const SearchBar = ({ query, searchBox, onQuery }) => {

    const [ inputValue, setInputValue ] = useState('');
    const searchBarIcon = `data:image/png;base64,${searchBox.searchBarIcon}`;

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onQuery(inputValue.trim())
        setInputValue(inputValue.trim());
    }

    return (
        <div id="searchbar-container" >
            <div id={searchBox.id}>
                <form onSubmit={ onSubmit }>
                    <input type="text" 
                           placeholder=  { query === "*" ? searchBox.searchBarPlaceholder : query } 
                           name="search" id="search" 
                           value={ inputValue }
                           onChange={ onInputChange }
                    />      
                </form>
            </div>
            <div>
                <button onClick={ onSubmit }>
                    <img src={ searchBarIcon } alt=''/>
                </button>
            </div>
        </div>                      
    );
};
