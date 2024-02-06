import { useAuthContext } from '../Auth/Auth';
import { validateResponse } from './service';
import * as authAPI from '../api/authAPI';

export default function useAuthServices() {
    const { setAuth } = useAuthContext();

    const login = (email, password) =>
        authAPI.login({ email, password })
            .then(response => {
                const { user, accessToken, roles } = validateResponse(response);
                setAuth({ user, email, accessToken, roles });
            });

    const register = ({ goalNotification = false, workoutPlanNotification = false, otherNotification = false, type = 'USER', ...data }) =>
        authAPI.register({ ...data, goalNotification, workoutPlanNotification, otherNotification })
            .then(response => {
                const { user, accessToken, roles } = validateResponse(response);
                setAuth({ user, email: data.email, accessToken, roles });
            });

    return { login, register };
}