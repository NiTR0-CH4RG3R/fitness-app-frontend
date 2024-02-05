import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from "./service";
import * as workoutPlanAPI from "../api/workoutPlanAPI";

export default function useWorkoutPlanService() {
    const { auth } = useAuthContext();

    const getPublicWorkoutPlans = async () => {
        return validateResponse(await workoutPlanAPI.getPublicWorkoutPlans());
    }

    const getPrivateWorkoutPlans = async () => {
        return validateResponse(await workoutPlanAPI.getPrivateWorkoutPlans(auth.user));
    }

    const getWorkoutPlan = async (id) => {
        return validateResponse(await workoutPlanAPI.getWorkoutPlan(id));
    }

    const createWorkoutPlan = async (data) => {
        validateResponse(await workoutPlanAPI.createWorkoutPlan(auth.user, data));
    }

    const updateWorkoutPlan = async (id, data) => {
        validateResponse(await workoutPlanAPI.updateWorkoutPlan(auth.user, id, data));
    }

    const deleteWorkoutPlan = async (id) => {
        validateResponse(await workoutPlanAPI.deleteWorkoutPlan(auth.user, id));
    }

    const getWorkoutPlanExercises = async (id) => {
        return validateResponse(await workoutPlanAPI.getWorkoutPlanExercises(id));
    }

    const addWorkoutPlanExercise = async (id, data) => {
        validateResponse(await workoutPlanAPI.addWorkoutPlanExercise(auth.user, id, data));
    }

    const removeWorkoutPlanExercise = async (id) => {
        validateResponse(await workoutPlanAPI.removeWorkoutPlanExercise(auth.user, id));
    }

    const getWorkoutPlanReviews = async (id) => {
        return validateResponse(await workoutPlanAPI.getWorkoutPlanReviews(id));
    }

    const createWorkoutPlanReview = async (id, data) => {
        validateResponse(await workoutPlanAPI.createWorkoutPlanReview(auth.user, id, data));
    }

    const updateWorkoutPlanReview = async (id, data) => {
        validateResponse(await workoutPlanAPI.updateWorkoutPlanReview(auth.user, id, data));
    }

    const deleteWorkoutPlanReview = async (id) => {
        validateResponse(await workoutPlanAPI.deleteWorkoutPlanReview(auth.user, id));
    }

    return { getPublicWorkoutPlans, getPrivateWorkoutPlans, getWorkoutPlan, createWorkoutPlan, updateWorkoutPlan, deleteWorkoutPlan, getWorkoutPlanExercises, addWorkoutPlanExercise, removeWorkoutPlanExercise, getWorkoutPlanReviews, createWorkoutPlanReview, updateWorkoutPlanReview, deleteWorkoutPlanReview };

}