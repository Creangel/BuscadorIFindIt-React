import { DrawSingleFilter } from "./DrawSingleFilter";

export const DrawFilters = ({ filters, finderData, onSearch }) => {
    return (
        <>
            {
                filters.map((filter, index) => (
                    <div key={ index } className="filters_values  row">
                        <div className="filter_title" id={ `filters_values_${index}` }>{ filter.title }</div>
                        <div>
                            <DrawSingleFilter keyFilter={ filter.filter } 
                                              keyName={ filter.data } 
                                              keyInfo={ filter.valueFilter[0].buckets } 
                                              finderData={ finderData }
                                              onSearch={ onSearch }/>
                        </div>
                    </div>
                ))
            }
        </>
    );
}