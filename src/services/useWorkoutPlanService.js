import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from "./service";
import * as workoutPlanAPI from "../api/workoutPlanAPI";

export default function useWorkoutPlanService() {
    const { auth } = useAuthContext();

    const getPublicWorkoutPlans = () => workoutPlanAPI.getPublicWorkoutPlans().then(response => validateResponse(response))
    const getPrivateWorkoutPlans = () => workoutPlanAPI.getPrivateWorkoutPlans(auth.user).then(response => validateResponse(response))
    const getWorkoutPlan = (id) => workoutPlanAPI.getWorkoutPlan(id).then(response => validateResponse(response))
    const createWorkoutPlan = (data) => workoutPlanAPI.createWorkoutPlan(auth.user, data).then(response => validateResponse(response))
    const updateWorkoutPlan = (id, data) => workoutPlanAPI.updateWorkoutPlan(auth.user, id, data).then(response => validateResponse(response))
    const deleteWorkoutPlan = (id) => workoutPlanAPI.deleteWorkoutPlan(auth.user, id).then(response => validateResponse(response))
    const getWorkoutPlanExercises = (id) => workoutPlanAPI.getWorkoutPlanExercises(id).then(response => validateResponse(response))
    const addWorkoutPlanExercise = (id, data) => workoutPlanAPI.addWorkoutPlanExercise(auth.user, id, data).then(response => validateResponse(response))
    const removeWorkoutPlanExercise = (id) => workoutPlanAPI.removeWorkoutPlanExercise(auth.user, id).then(response => validateResponse(response))
    const getWorkoutPlanReviews = (id) => workoutPlanAPI.getWorkoutPlanReviews(id).then(response => validateResponse(response))
    const createWorkoutPlanReview = (id, data) => workoutPlanAPI.createWorkoutPlanReview(auth.user, id, data).then(response => validateResponse(response))
    const updateWorkoutPlanReview = (id, data) => workoutPlanAPI.updateWorkoutPlanReview(auth.user, id, data).then(response => validateResponse(response))
    const deleteWorkoutPlanReview = (id) => workoutPlanAPI.deleteWorkoutPlanReview(auth.user, id).then(response => validateResponse(response))

    return { getPublicWorkoutPlans, getPrivateWorkoutPlans, getWorkoutPlan, createWorkoutPlan, updateWorkoutPlan, deleteWorkoutPlan, getWorkoutPlanExercises, addWorkoutPlanExercise, removeWorkoutPlanExercise, getWorkoutPlanReviews, createWorkoutPlanReview, updateWorkoutPlanReview, deleteWorkoutPlanReview };

}