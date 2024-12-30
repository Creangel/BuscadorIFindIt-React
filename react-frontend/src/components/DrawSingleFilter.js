export const DrawSingleFilter = ({ keyFilter, keyInfo, finderData, onSearch }) => {
    
    let FiltersVals = [];
    let deleteFilter="";
    const inmeta = sessionStorage.getItem("inmeta");

    const onFilter = ({ target }) => {

        let newVal = target.innerHTML;
        let inmeta = sessionStorage.getItem("inmeta");
        
        if( inmeta.includes( keyFilter + "!" + newVal ) ){
            inmeta = inmeta.replace( keyFilter + "!" + newVal , "" );
        }else{
            inmeta += keyFilter + "!" + newVal + "<;>";
        }
        
        finderData.inmeta = inmeta.replace( "<;><;>" , "<;>" ).trim();
        finderData.pageNum = 1;
        finderData.start = 0;
        onSearch( finderData );
    };

    for (let x = 0; x < keyInfo.length; x++) {

        if( inmeta.includes( keyFilter + "!" + keyInfo[x].val )){
            deleteFilter = <span id="filter_delete">⊗</span>
        } 
        
        let singleFilterContent=
        (
            <div className=" filter " value={ keyFilter } key={ x } > 
                    { deleteFilter }  
                    <a className="filter_ref" >
                        <span id="filter_value" className="filter_v" onClick={ onFilter }>
                            { keyInfo[x].val }
                        </span>
                    </a> 
                    <span id="filter_count" className="filter_c">
                        { keyInfo[x].count }
                    </span> 
            </div>
        )
        
        FiltersVals.push(singleFilterContent)
    }

    return (FiltersVals)
}