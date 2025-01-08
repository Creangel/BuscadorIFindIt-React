import { dataCreator } from './dataCreator';

export const getData = async( bodyData ) => {
    let data = dataCreator(bodyData);
    const response = await fetch('http://localhost:8080/apiFinder/Find', {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        mode: 'cors',
        body: data
    });
    const resp = await response.json();
    return resp;
}