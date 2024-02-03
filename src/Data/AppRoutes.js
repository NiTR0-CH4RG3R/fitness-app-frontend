import Dashboard from "../Pages/Dashboard/Dashboard";
import ExerciseList from "../Pages/Exercise/ExerciseList";
import Exercise from "../Pages/Exercise/Exercise";
import GoalList from "../Pages/Goal/GoalList";
import WorkoutPlanList from "../Pages/WorkoutPlan/WorkoutPlanList";
import Register from "../Pages/Login/Register";
import RegisterGenerated from "../Pages/Login/RegisterGenerated";

export const AppRoutes = {
    dashboard: { path: '/dashboard', component: <Dashboard /> },
    dashboard: { path: '/register', component: <RegisterGenerated /> },
    exercise_list: { path: '/exercise/list', component: <ExerciseList /> },
    exercise: { path: '/exercise/id', component: <Exercise /> },
    workout_plan: { path: '/workout/list', component: <WorkoutPlanList /> },
    goal: { path: '/goal/list', component: <GoalList /> },
    profile: { path: '/profile', component: (<></>) },
}