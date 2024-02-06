import { get, post, put, del } from './axios';

const EXERCISE_URL = '/exercise';

export const getExercises = () => get(`${EXERCISE_URL}/all`);
export const getExerciseCount = () => get(`${EXERCISE_URL}/count`);
export const getExercisesPage = (page, size) => get(`${EXERCISE_URL}`, { page: page, noOfElements: size });
export const getExercise = (id) => get(`${EXERCISE_URL}/${id}`);
export const getExerciseByName = (name) => get(`${EXERCISE_URL}/name/${name}`);
export const createExercise = (userId, data) => post(EXERCISE_URL, data, { userId: userId });
export const updateExercise = (userId, id, data) => put(`${EXERCISE_URL}/${id}`, data, { userId: userId });
export const deleteExercise = (userId, id) => del(`${EXERCISE_URL}/${id}`, { userId: userId });
export const getExerciseReviews = (id) => get(`${EXERCISE_URL}/${id}/reviews`);
export const createExerciseReview = (userId, id, data) => post(`${EXERCISE_URL}/${id}/reviews`, data, { userId: userId });
export const updateExerciseReview = (userId, id, data) => put(`${EXERCISE_URL}/${id}/reviews`, data, { userId: userId });
export const deleteExerciseReview = (userId, id) => del(`${EXERCISE_URL}/${id}/reviews`, { userId: userId });