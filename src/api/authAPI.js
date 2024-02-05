import { post } from './axios';

const AUTH_URL = '/auth';

export async function login(data) {
    return await post(`${AUTH_URL}/login`, data);
}

export async function register(data) {
    return await post(`${AUTH_URL}/register`, data);
}