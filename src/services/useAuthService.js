import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from './service';
import * as authAPI from '../api/authAPI';

export default function useAuthServices() {
    const { setAuth } = useAuthContext();

    const login = async (email, password) => {
        try {
            const { user, accessToken, roles } = validateResponse(await authAPI.login({ email, password }));
            setAuth({ user, email, accessToken, roles });
        }
        catch (error) {
            console.log(error);
        }
    }

    const register = async ({ goalNotification = false, workoutPlanNotification = false, otherNotification = false, ...data }) => {
        try {
            const { user, accessToken, roles } = validateResponse(await authAPI.register({ ...data, goalNotification, workoutPlanNotification, otherNotification }));
            setAuth({ user, email: data.email, accessToken, roles });
        }
        catch (error) {
            console.log(error);
        }
    }

    return { login, register };
}