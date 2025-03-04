export const numeratePags = ( numCalculate, maxPage, rangeInl ) => {
    const rangeint = ( rangeInl + (( numCalculate * 10 ) -1 )) / 10 ;
    let numPage = rangeint <= (maxPage) ? rangeint:null
    return(numPage)
}

export const getNewPageVal = ( id, maxPage, rangeInl, rangeFnl ) => {
    switch (id) {
        case "leftArrow":
            return Math.round(((rangeFnl)/10)-1);
        case "pageNum_1":
        case "pageNum_4":
            return numeratePags( 1, maxPage, rangeInl );
        case "pageNum_2":
            return numeratePags( 2, maxPage, rangeInl );
        case "pageNum_3":
            return numeratePags( 3, maxPage, rangeInl );
        case "pagenumleft":
            return maxPage;
        case "rigthArrow":
            return Math.round( ( (rangeFnl) / 10 ) + 1 );
        default:
            return;
    }
};