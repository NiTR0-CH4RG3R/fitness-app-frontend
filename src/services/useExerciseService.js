import { validateResponse } from "./service";
import * as exerciseAPI from "../api/exerciseAPI";
import { useAuthContext } from '../Auth/Auth';

export default function useExerciseService() {
    const { auth } = useAuthContext();

    const getExercises = () => exerciseAPI.getExercises().then(response => validateResponse(response));
    const getExercise = (id) => exerciseAPI.getExercise(id).then(response => validateResponse(response));
    const getExerciseCount = () => exerciseAPI.getExerciseCount().then(response => validateResponse(response));
    const getExercisesPage = (page, size) => exerciseAPI.getExercisesPage(page, size).then(response => validateResponse(response));
    const getExerciseByName = (name) => exerciseAPI.getExerciseByName(name).then(response => validateResponse(response));
    const createExercise = (data) => exerciseAPI.createExercise(auth.user, data).then(response => validateResponse(response));
    const updateExercise = (id, data) => exerciseAPI.updateExercise(auth.user, id, data).then(response => validateResponse(response));
    const deleteExercise = (id) => exerciseAPI.deleteExercise(auth.user, id).then(response => validateResponse(response));
    const getExerciseReviews = (id) => exerciseAPI.getExerciseReviews(id).then(response => validateResponse(response));
    const createExerciseReview = (id, data) => exerciseAPI.createExerciseReview(auth.user, id, data).then(response => validateResponse(response));
    const updateExerciseReview = (id, data) => exerciseAPI.updateExerciseReview(auth.user, id, data).then(response => validateResponse(response));
    const deleteExerciseReview = (id) => exerciseAPI.deleteExerciseReview(auth.user, id).then(response => validateResponse(response));

    return { getExercises, getExercise, getExerciseCount, getExercisesPage, getExerciseByName, createExercise, updateExercise, deleteExercise, getExerciseReviews, createExerciseReview, updateExerciseReview, deleteExerciseReview };
}