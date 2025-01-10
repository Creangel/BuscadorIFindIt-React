import { SearchBar } from "./SearchBar"

export const DrawSearchBox = ({info, finderData, onSearch}) => {
    
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
        <div className="container mt-10 text-center" id="headerContainer">
            <div className="row justify-content-md-center">              
                {/* <EntityLogo img={info.img}/> */}
                <div className="col-lg-1 col-sm-12 col-md-1" ></div>                
                {
                    "searchBar" in info.auxContent &&                
                    (
                        <SearchBar query={ info.query }
                                   searchBarContent={ info.auxContent.searchBar } 
                                   onQuery={ onQuery }
                        />
                    )
                }
            </div>
        </div>
    )
}