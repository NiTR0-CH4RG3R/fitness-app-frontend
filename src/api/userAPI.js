import { get, post, put, del } from './axios';

const USER_URL = '/user';

export async function getUser(userId, id) {
    return await get(`${USER_URL}/${id}`, { userId: userId });
}

export async function getUsers(userId) {
    return await get(USER_URL, { userId: userId });
}

export async function createUser(userId, data) {
    return await post(USER_URL, data, { userId: userId });
}

export async function updateUser(userId, id, data) {
    return await put(`${USER_URL}/${id}`, data, { userId: userId });
}

export async function deleteUser(userId, id) {
    return await del(`${USER_URL}/${id}`, { userId: userId });
}

export async function followWorkoutPlan(userId, workoutPlanId) {
    return await post(`${USER_URL}/followWorkoutPlan`, { workoutPlanId: workoutPlanId }, { userId: userId });
}

export async function unfollowWorkoutPlan(userId, workoutPlanId) {
    return await del(`${USER_URL}/unfollowWorkoutPlan`, { workoutPlanId: workoutPlanId }, { userId: userId });
}

