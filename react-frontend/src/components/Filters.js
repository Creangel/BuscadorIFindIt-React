import { SingleFilter } from "./SingleFilter";

export const Filters = ({ finderData, findResponse, onSearch }) => {

    return (
        <>
            {
                findResponse.filters.map((filter, index) => (
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