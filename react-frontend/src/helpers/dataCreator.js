export const dataCreator = (bodyData) => {
    const data = new URLSearchParams();
    data.append('idFinder', bodyData.finder); 
    data.append('find', bodyData.find); 
    data.append('query', bodyData.query); 
    data.append('pageNum', bodyData.pageNum); 
    data.append('start', bodyData.start); 
    data.append('type', bodyData.type); 
    data.append('sort', bodyData.sort);
    data.append('inmeta', bodyData.inmeta)
    return (data)
}