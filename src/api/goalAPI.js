import { get, post, put, del } from './axios';

const GOAL_URL = '/goal';

export const getGoals = (userId) => get(`${GOAL_URL}`, { userId: userId });
export const getGoal = (userId, id) => get(`${GOAL_URL}/${id}`, { userId: userId });
export const createGoal = (userId, data) => post(GOAL_URL, data, { userId: userId });
export const updateGoal = (userId, id, data) => put(`${GOAL_URL}/${id}`, data, { userId: userId });
export const deleteGoal = (userId, id) => del(`${GOAL_URL}/${id}`, { userId: userId });
export const getGoalProgress = (userId, id) => get(`${GOAL_URL}/${id}/progress`, { userId: userId });
export const createGoalProgress = (userId, id, data) => post(`${GOAL_URL}/${id}/progress`, data, { userId: userId });