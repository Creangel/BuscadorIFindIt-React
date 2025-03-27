function getSuggestions(pathService, seId, query) {
    const data = {
        query: query,
        type: "load",
    };

    return new Promise((resolve, reject) => {
        $.ajax({
            url: `${pathService}/suggest/${seId}`, // the endpoint, commonly same url
            type: "POST", // http method
            headers: {
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(data), // data sent with the post request

            // handle a successful response
            success: function (json) {
                console.log('Success:', json);
                resolve(json);
            },
            // handle a non-successful response
            error: function (xhr, errmsg, err) {
                console.log(xhr.status + ": " + xhr.responseText); // provide a bit more info about the error to the console
                reject(errmsg);
            }
        });
    });
}