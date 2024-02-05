import { get, post, put, del } from './axios';

const EXERCISE_URL = '/exercise';

export async function getExercises() {
    return await get(`${EXERCISE_URL}/all`);
}

export async function getExerciseCount() {
    return await get(`${EXERCISE_URL}/count`);
}

export async function getExercisesPage(page, size) {
    return await get(EXERCISE_URL, { page: page, noOfElement: size });
}

export async function getExercise(id) {
    return await get(`${EXERCISE_URL}/${id}`);
}

export async function getExerciseByName(name) {
    return await get(`${EXERCISE_URL}/name/${name}`);
}

export async function createExercise(userId, data) {
    return await post(EXERCISE_URL, data, { userId: userId });
}

export async function updateExercise(userId, id, data) {
    return await put(`${EXERCISE_URL}/${id}`, data, { userId: userId });
}

export async function deleteExercise(userId, id) {
    return await del(`${EXERCISE_URL}/${id}`, { userId: userId });
}

export async function getExerciseReviews(id) {
    return await get(`${EXERCISE_URL}/${id}/reviews`);
}

export async function createExerciseReview(userId, id, data) {
    return await post(`${EXERCISE_URL}/${id}/reviews`, data, { userId: userId });
}

export async function updateExerciseReview(userId, id, data) {
    return await put(`${EXERCISE_URL}/${id}/reviews`, data, { userId: userId });
}

export async function deleteExerciseReview(userId, id) {
    return await del(`${EXERCISE_URL}/${id}/reviews`, { userId: userId });
}