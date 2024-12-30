import { EntityLogo } from "./EntityLogo"
import { NumFound } from "./NumFound"
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
                <EntityLogo img={info.img}/>
                <div className="col-lg-1 col-sm-12 col-md-1" ></div>                
                <SearchBar query={ info.query }
                           onQuery={ onQuery }
                />
                <NumFound rangeDocs={ info.rangeDocs }
                          numfounds={ info.numfounds }
                />
            </div>
        </div>
    )
}