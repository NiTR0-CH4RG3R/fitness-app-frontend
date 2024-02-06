import { get, post, put, del } from './axios';

const WORKOUT_PLAN_URL = '/workoutPlan';

export const getPublicWorkoutPlans = () => get(`${WORKOUT_PLAN_URL}`, { public: true });
export const getPrivateWorkoutPlans = (userId) => get(`${WORKOUT_PLAN_URL}`, { public: false, userId: userId });
export const getWorkoutPlan = (id) => get(`${WORKOUT_PLAN_URL}/${id}`);
export const createWorkoutPlan = (userId, data) => post(WORKOUT_PLAN_URL, data, { userId: userId });
export const updateWorkoutPlan = (userId, id, data) => put(`${WORKOUT_PLAN_URL}/${id}`, data, { userId: userId });
export const deleteWorkoutPlan = (userId, id) => del(`${WORKOUT_PLAN_URL}/${id}`, { userId: userId });
export const getWorkoutPlanExercises = (id) => get(`${WORKOUT_PLAN_URL}/${id}/exercises`);
export const addWorkoutPlanExercise = (userId, id, data) => post(`${WORKOUT_PLAN_URL}/${id}/exercises`, data, { userId: userId });
export const removeWorkoutPlanExercise = (userId, id) => del(`${WORKOUT_PLAN_URL}/${id}/exercises`, { userId: userId });
export const getWorkoutPlanReviews = (id) => get(`${WORKOUT_PLAN_URL}/${id}/reviews`);
export const createWorkoutPlanReview = (userId, id, data) => post(`${WORKOUT_PLAN_URL}/${id}/reviews`, data, { userId: userId });
export const updateWorkoutPlanReview = (userId, id, data) => put(`${WORKOUT_PLAN_URL}/${id}/reviews`, data, { userId: userId });
export const deleteWorkoutPlanReview = (userId, id) => del(`${WORKOUT_PLAN_URL}/${id}/reviews`, { userId: userId });
export const followWorkoutPlan = (userId, workoutPlanId) => post(`${WORKOUT_PLAN_URL}/follow`, { workoutPlanId: workoutPlanId }, { userId: userId });