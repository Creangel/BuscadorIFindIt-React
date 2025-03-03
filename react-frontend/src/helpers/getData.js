export const getData = async( finderData ) => {
    const response = await fetch('http://localhost:8083/Find', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(finderData)
    });
    const resp = await response.json();
    return resp;
}