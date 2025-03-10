import { SingleFilter } from "./SingleFilter";

export const Filters = ({ finderData, onSearch }) => {

    return (
        <>
            {
                finderData.filters.map((filter, index) => (
                    <SingleFilter key={ `filter_${ filter.id }` } 
                                    filter={ filter } 
                                    finderData={ finderData }
                                    onSearch={ onSearch }
                    />              
                ))
            }
        </>
    );
}