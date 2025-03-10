import { SearchBar } from "./SearchBar"

export const SearchBox = ({searchBox, finderData, onSearch}) => {
    
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
      onSearch(finderData);
    }; 

    return (
        <div>
            <SearchBar query={ finderData.query }
                       searchBox={ searchBox } 
                       onQuery={ onQuery }
            />
        </div>
    )
}