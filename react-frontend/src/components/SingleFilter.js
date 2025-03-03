import { getFilterByType } from '../helpers/getFilterByType';

export const SingleFilter = ({ filter, finderData, onSearch }) => {
    
    const filterField = getFilterByType( filter ).filterField;
    const inmeta = sessionStorage.getItem("inmeta");

    const onFilter = ({ target }) => {

        let newVal = target.innerHTML;
        let inmeta = sessionStorage.getItem("inmeta");

        if( inmeta.includes( filterField + "!" + newVal ) ){
            inmeta = inmeta.replace( filterField + "!" + newVal , "" );
        } else {
            inmeta += filterField + "!" + newVal + "<;>";
        }
        
        finderData.inmeta = inmeta.replace( "<;><;>" , "<;>" ).trim();
        finderData.pageNum = 1;
        finderData.start = 0;
        onSearch( finderData );
    };
    const buckets = filter?.valueFilter?.[0]?.buckets ?? [];
    const FiltersVals = buckets.map((bucket, index) => {
        const deleteFilter = inmeta.includes( filterField + "!" + bucket.val ) ? (
          <span id="filter_delete">⊗</span>
        ) : null;
      
        return (
          <div value={ filterField } key={ index }>
            { deleteFilter }
            <a>
              <span id="filter_value" onClick={ onFilter }>
                { bucket.val }
              </span>
            </a>
            <span id="filter_count" >
              { bucket.count }
            </span>
          </div>
        );
    });
    return (FiltersVals)
}