function sendSignals(pathService, type, url, query, position, seId) {
    if (type === "resultClick") {
        type = "click";
    }

    const data = {
        query: query,
        signalId: url,
        type: type,
        position: position
    };

    $.ajax({
        url: `${pathService}/signals/${seId}`,
        type: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data),
        success: function(response) {
            console.log('Success:', response);
        },
        error: function(xhr, status, error) {
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
}