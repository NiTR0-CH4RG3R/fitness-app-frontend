import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from "./service";
import * as userAPI from "../api/userAPI";

export default function useUserService() {
    const { auth } = useAuthContext();

    const getUsers = () => userAPI.getUsers(auth.user).then(response => validateResponse(response))
    const getUser = (id) => userAPI.getUser(auth.user, id).then(response => validateResponse(response))
    const createUser = (data) => userAPI.createUser(auth.user, data).then(response => validateResponse(response))
    const updateUser = (id, data) => userAPI.updateUser(auth.user, id, data).then(response => validateResponse(response))
    const deleteUser = (id) => userAPI.deleteUser(auth.user, id).then(response => validateResponse(response))
    const followWorkoutPlan = (workoutPlanId) => userAPI.followWorkoutPlan(auth.user, workoutPlanId).then(response => validateResponse(response))
    const unfollowWorkoutPlan = (workoutPlanId) => userAPI.unfollowWorkoutPlan(auth.user, workoutPlanId).then(response => validateResponse(response))

    return { getUsers, getUser, createUser, updateUser, deleteUser, followWorkoutPlan, unfollowWorkoutPlan };
}