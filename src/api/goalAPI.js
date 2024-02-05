import { get, post, put, del } from './axios';

const GOAL_URL = '/goal';

export async function getGoals(userId) {
    return await get(`${GOAL_URL}`, { userId: userId });
}

export async function getGoal(userId, id) {
    return await get(`${GOAL_URL}/${id}`, { userId: userId });
}

export async function createGoal(userId, data) {
    return await post(GOAL_URL, data, { userId: userId });
}

export async function updateGoal(userId, id, data) {
    return await put(`${GOAL_URL}/${id}`, data, { userId: userId });
}

export async function deleteGoal(userId, id) {
    return await del(`${GOAL_URL}/${id}`, { userId: userId });
}

export async function getGoalProgress(userId, id) {
    return await get(`${GOAL_URL}/${id}/progress`, { userId: userId });
}