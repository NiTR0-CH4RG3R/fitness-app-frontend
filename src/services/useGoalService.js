import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from "./service";
import * as goalAPI from "../api/goalAPI";

export default function useGoalService() {
    const { auth } = useAuthContext();

    const getGoals = () => goalAPI.getGoals(auth.user).then(response => validateResponse(response))
    const getGoal = (id) => goalAPI.getGoal(auth.user, id).then(response => validateResponse(response))
    const createGoal = (data) => goalAPI.createGoal(auth.user, data).then(response => validateResponse(response))
    const updateGoal = (id, data) => goalAPI.updateGoal(auth.user, id, data).then(response => validateResponse(response))
    const deleteGoal = (id) => goalAPI.deleteGoal(auth.user, id).then(response => validateResponse(response))
    const getGoalProgress = (id) => goalAPI.getGoalProgress(auth.user, id).then(response => validateResponse(response))

    return { getGoals, getGoal, createGoal, updateGoal, deleteGoal, getGoalProgress };
}
