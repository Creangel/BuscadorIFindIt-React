export const dataCreator = (bodyData) => {
    const data = new URLSearchParams();
    data.append('finderId', bodyData.finderId); 
    data.append('inmeta', bodyData.inmeta)
    data.append('pageNum', bodyData.pageNum); 
    data.append('query', bodyData.query); 
    data.append('start', bodyData.start); 
    data.append('rlv', bodyData.rlv); 
    data.append('filters', bodyData.filters); 
    return (data)
}