export function validateResponse(response) {
    if (response === null || response === undefined || response.status === undefined || response.status === null) {
        console.error(`[CONNECTION ERROR] : No response from server`);
        return null;
    }

    if (response.status >= 200 && response.status < 300) {
        return response.data.content;
    }

    switch (response.status) {
        case 401:
            console.error(`[UNAUTHORIZED] : ${response.data.message} - ${response.status}`);
            return null;
        case 403:
            console.error(`[FORBIDDEN] : ${response.data.message} - ${response.status}`);
            return null;
        case 404:
            console.error(`[NOT FOUND] : ${response.data.message} - ${response.status}`);
            return null;
        case 500:
            console.error(`[SERVER ERROR] : ${response.data.message} - ${response.status}`);
            return null;
        default:
            console.error(`[UNKNOWN ERROR] : ${response.data.message} - ${response.status}`);
            return null;
    }
}