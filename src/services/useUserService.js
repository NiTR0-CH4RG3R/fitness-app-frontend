import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from "./service";
import * as userAPI from "../api/userAPI";

export default function useUserService() {
    const { auth } = useAuthContext();

    const getUsers = async () => {
        return validateResponse(await userAPI.getUsers(auth.user));
    }

    const getUser = async (id) => {
        return validateResponse(await userAPI.getUser(auth.user, id));
    }

    const createUser = async (data) => {
        validateResponse(await userAPI.createUser(auth.user, data));
    }

    const updateUser = async (id, data) => {
        validateResponse(await userAPI.updateUser(auth.user, id, data));
    }

    const deleteUser = async (id) => {
        validateResponse(await userAPI.deleteUser(auth.user, id));
    }

    const followWorkoutPlan = async (workoutPlanId) => {
        validateResponse(await userAPI.followWorkoutPlan(auth.user, workoutPlanId));
    }

    const unfollowWorkoutPlan = async (workoutPlanId) => {
        validateResponse(await userAPI.unfollowWorkoutPlan(auth.user, workoutPlanId));
    }

    return { getUsers, getUser, createUser, updateUser, deleteUser, followWorkoutPlan, unfollowWorkoutPlan };
}