import { get, post, put, del } from './axios';

const WORKOUT_PLAN_URL = '/workoutPlan';

export async function getPublicWorkoutPlans() {
    return await get(`${WORKOUT_PLAN_URL}`, { public: true });
}

export async function getPrivateWorkoutPlans(userId) {
    return await get(`${WORKOUT_PLAN_URL}`, { public: false, userId: userId });
}

export async function getWorkoutPlan(id) {
    return await get(`${WORKOUT_PLAN_URL}/${id}`);
}

export async function createWorkoutPlan(userId, data) {
    return await post(WORKOUT_PLAN_URL, data, { userId: userId });
}

export async function updateWorkoutPlan(userId, id, data) {
    return await put(`${WORKOUT_PLAN_URL}/${id}`, data, { userId: userId });
}

export async function deleteWorkoutPlan(userId, id) {
    return await del(`${WORKOUT_PLAN_URL}/${id}`, { userId: userId });
}

export async function getWorkoutPlanExercises(id) {
    return await get(`${WORKOUT_PLAN_URL}/${id}/exercises`);
}

export async function addWorkoutPlanExercise(userId, id, data) {
    return await post(`${WORKOUT_PLAN_URL}/${id}/exercises`, data, { userId: userId });
}

export async function removeWorkoutPlanExercise(userId, id) {
    return await del(`${WORKOUT_PLAN_URL}/${id}/exercises`, { userId: userId });
}

export async function getWorkoutPlanReviews(id) {
    return await get(`${WORKOUT_PLAN_URL}/${id}/reviews`);
}

export async function createWorkoutPlanReview(userId, id, data) {
    return await post(`${WORKOUT_PLAN_URL}/${id}/reviews`, data, { userId: userId });
}

export async function updateWorkoutPlanReview(userId, id, data) {
    return await put(`${WORKOUT_PLAN_URL}/${id}/reviews`, data, { userId: userId });
}

export async function deleteWorkoutPlanReview(userId, id) {
    return await del(`${WORKOUT_PLAN_URL}/${id}/reviews`, { userId: userId });
}