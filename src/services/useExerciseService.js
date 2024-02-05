import { validateResponse } from "./service";
import * as exerciseAPI from "../api/exerciseAPI";
import { useAuthContext } from '../Auth/Auth';

export default function useExerciseService() {
    const { auth } = useAuthContext();

    const getExercises = async () => {
        return validateResponse(await exerciseAPI.getExercises());
    }

    const getExercise = async (id) => {
        return validateResponse(await exerciseAPI.getExercise(id));
    }

    const getExerciseCount = async () => {
        return validateResponse(await exerciseAPI.getExerciseCount());
    }

    const getExercisesPage = async (page, size) => {
        return validateResponse(await exerciseAPI.getExercisesPage(page, size));
    }

    const getExerciseByName = async (name) => {
        return validateResponse(await exerciseAPI.getExerciseByName(name));
    }

    const createExercise = async (data) => {
        validateResponse(await exerciseAPI.createExercise(auth.user, data));
    }

    const updateExercise = async (id, data) => {
        validateResponse(await exerciseAPI.updateExercise(auth.user, id, data));
    }

    const deleteExercise = async (id) => {
        validateResponse(await exerciseAPI.deleteExercise(auth.user, id));
    }

    const getExerciseReviews = async (id) => {
        return validateResponse(await exerciseAPI.getExerciseReviews(id));
    }

    const createExerciseReview = async (id, data) => {
        validateResponse(await exerciseAPI.createExerciseReview(auth.user, id, data));
    }

    const updateExerciseReview = async (id, data) => {
        validateResponse(await exerciseAPI.updateExerciseReview(auth.user, id, data));
    }

    const deleteExerciseReview = async (id) => {
        validateResponse(await exerciseAPI.deleteExerciseReview(auth.user, id));
    }

    return { getExercises, getExercise, getExerciseCount, getExercisesPage, getExerciseByName, createExercise, updateExercise, deleteExercise, getExerciseReviews, createExerciseReview, updateExerciseReview, deleteExerciseReview };
}