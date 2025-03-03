import { SingleFilter } from "./SingleFilter";

export const Filters = ({ finderData, onSearch }) => {
    return (
        <>
            {
                finderData.filters.map((filter, index) => (
                    <div key={ index } >
                        <div id={ `filters_values_${index}` }>{ filter.title }</div>
                        <div>
                            <SingleFilter key={ `filter_${ filter.id }` } 
                                          filter={ filter } 
                                          finderData={ finderData }
                                          onSearch={ onSearch }/>
                        </div>
                    </div>
                ))
            }
        </>
    );
}