import { get, post, put, del } from './axios';

const USER_URL = '/user';

export const getUser = (userId, id) => get(`${USER_URL}/${id}`, { userId: userId });
export const getUsers = (userId) => get(USER_URL, { userId: userId });
export const createUser = (userId, data) => post(USER_URL, data, { userId: userId });
export const updateUser = (userId, id, data) => put(`${USER_URL}/${id}`, data, { userId: userId });
export const deleteUser = (userId, id) => del(`${USER_URL}/${id}`, { userId: userId });
export const followWorkoutPlan = (userId, workoutPlanId) => post(`${USER_URL}/followWorkoutPlan`, { workoutPlanId: workoutPlanId }, { userId: userId });
export const unfollowWorkoutPlan = (userId, workoutPlanId) => del(`${USER_URL}/unfollowWorkoutPlan`, { workoutPlanId: workoutPlanId }, { userId: userId });
export const followDietPlan = (userId, dietPlanId) => post(`${USER_URL}/followDietPlan`, { dietPlanId: dietPlanId }, { userId: userId });