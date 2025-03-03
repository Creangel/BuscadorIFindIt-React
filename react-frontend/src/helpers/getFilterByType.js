export const getFilterByType = ( filter ) => {
    switch( filter.type ){
        case "match":
            return filter.matchFilterConfigurations;
        case "dateRange":
            return filter.dateRangeFilterConfigurations;
        case "dateBucket":
            return filter.dateBucketFilterConfigurations;
        default:
            break;
    }
}