import Axios from "axios";

console.log(process.env.FITNESS_APP_API_URL);

const axios = Axios.create({
    baseURL: 'http://localhost:8080/ap1/v1',
    headers: {
        "Content-type": "application/json"
    }
})

function embedParams(url, params) {
    if (params) {
        const urlParams = new URLSearchParams(params);
        return `${url}?${urlParams.toString()}`;
    }
    return url;
}

export async function get(url, params) {
    try {
        const response = await axios.get(embedParams(url, params));
        return {
            data: response.data,
            error: null
        };
    }
    catch (error) {
        return {
            data: null,
            error: error.response ? error.response : error,
        };
    }
}

export async function post(url, data, params) {
    try {
        const response = await axios.post(embedParams(url, params), JSON.stringify(data));
        return {
            data: response.data,
            error: null
        };
    }
    catch (error) {
        return {
            data: null,
            error: error.response ? error.response : error,
        };
    }
}

export async function put(url, data, params) {
    try {
        const response = await axios.put(embedParams(url, params), JSON.stringify(data));
        return {
            data: response.data,
            error: null
        };
    }
    catch (error) {
        return {
            data: null,
            error: error.response ? error.response : error,
        };
    }
}

export async function del(url, params) {
    try {
        const response = await axios.delete(embedParams(url, params));
        return {
            data: response.data,
            error: null
        };
    }
    catch (error) {
        return {
            data: null,
            error: error.response ? error.response : error,
        };
    }
}
