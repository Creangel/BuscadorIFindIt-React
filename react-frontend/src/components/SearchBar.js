import React, { useState } from 'react';

export const SearchBar = ({ query, onQuery }) => {

    const [ inputValue, setInputValue ] = useState('')

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
            <div className="col col-11 col-sm-7 col-md-9" id="barSearch">
                <form onSubmit={ onSubmit }>
                    <input type="text" 
                           placeholder=  { query === "*" ? "Todos Los Resultados" : query } 
                           name="search" id="search" 
                           value={ inputValue }
                           onChange={ onInputChange }
                    />      
                </form>
            </div>
            <div className="col col-1 col-sm-5 col-md-3" id="buttonSearch" onClick={ onSubmit }>
                        <img id="imgButtonSearch" src="magnifying_glass.png" alt=''/>
            </div> 
        </div>                      
    );
};
