export function validateResponse(response) {
    if (response.error !== null) {
        console.error(`[CONNECTION ERROR] : ${response.error}`);
        return null;
    }

    try {
        if (response.data.code !== '00') console.error(`[SERVER ERROR] : ${response.data.message}`);
        return response.data.content ? response.data.content : null;
    }
    catch (error) {
        console.error(`[UNKNOWN ERROR] : ${error}`);
        return null;
    }
}