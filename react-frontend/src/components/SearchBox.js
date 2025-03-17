import { SearchBar } from "./SearchBar"

export const SearchBox = ({searchBox, onSearch, finderData, isSmallScreen}) => {
    
    const onQuery = (newQueryVal) => {
      if (newQueryVal === "") {
        newQueryVal = "*";
      }
      if( finderData.query === newQueryVal ){
          return;
      }
      finderData.query = newQueryVal;
      finderData.pageNum = 1;
      finderData.start = 0;
      finderData.inmeta = "";
      onSearch(finderData);
    }; 

    return (
        <SearchBar query={ finderData.query }
                    searchBox={ searchBox } 
                    onQuery={ onQuery }
                    isSmallScreen={ isSmallScreen }
        />
    )
}