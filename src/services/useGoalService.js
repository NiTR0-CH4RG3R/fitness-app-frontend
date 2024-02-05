import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from "./service";
import * as goalAPI from "../api/goalAPI";

export default function useGoalService() {
    const { auth } = useAuthContext();

    const getGoals = async () => {
        return validateResponse(await goalAPI.getGoals(auth.user));
    }

    const getGoal = async (id) => {
        return validateResponse(await goalAPI.getGoal(auth.user, id));
    }

    const createGoal = async (data) => {
        validateResponse(await goalAPI.createGoal(auth.user, data));
    }

    const updateGoal = async (id, data) => {
        validateResponse(await goalAPI.updateGoal(auth.user, id, data));
    }

    const deleteGoal = async (id) => {
        validateResponse(await goalAPI.deleteGoal(auth.user, id));
    }

    const getGoalProgress = async (id) => {
        return validateResponse(await goalAPI.getGoalProgress(auth.user, id));
    }

    return { getGoals, getGoal, createGoal, updateGoal, deleteGoal, getGoalProgress };
}
