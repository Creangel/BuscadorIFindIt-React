import { useState } from 'react';
import { useFetchSearchBarIcon } from '../hooks/useFetchSearchBarIcon';

export const SearchBar = ({ query, searchBarContent, onQuery }) => {

    const [ inputValue, setInputValue ] = useState('');
    const { searchBarIcon, isLoading } = useFetchSearchBarIcon(searchBarContent.id);

    const onInputChange = ({ target }) => {
        setInputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        onQuery(inputValue.trim())
        setInputValue(inputValue.trim());
    }

    return (
        <div className="col col-lg-6 col-sm-12 col-md-6  " id="barSearchContainer" >
            <div className={ searchBarContent.searchBarType === "default" ? "col col-11 col-sm-7 col-md-9" : "" } id="barSearch">
                <form onSubmit={ onSubmit }>
                    <input type="text" 
                           placeholder=  { query === "*" ? searchBarContent.searchBarPlaceHolder : query } 
                           name="search" id="search" 
                           value={ inputValue }
                           onChange={ onInputChange }
                    />      
                </form>
            </div>
            {
                !isLoading && 
                (
                    searchBarIcon !== "magnifying_glass.png" ?
                        <button onClick={ onSubmit }>
                            <img src={ searchBarIcon } alt=''/>
                        </button>
                        :
                        <div className="col col-1 col-sm-5 col-md-3" id="buttonSearch" onClick={ onSubmit }>
                            <img id="imgButtonSearch" src={ searchBarIcon } alt=''/>
                        </div>
                )
            }
        </div>                      
    );
};
