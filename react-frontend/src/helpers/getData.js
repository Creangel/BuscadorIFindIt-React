export const getData = async( finderData ) => {
    const response = await fetch(`${process.env.REACT_APP_BUSCADOR_IFINDIT_API_URL}/Find`, {
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