import * as MuiIcons from '@mui/icons-material';

import { AppRoutes } from './AppRoutes';

export const SideNavigationPanelData = {
    width: 240,
    toolbarHeight: 80,
    items: [
        {
            title: { primary: 'Dashboard', secondary: 'You can find quick link to everythin here!' },
            icon: <MuiIcons.Dashboard />,
            path: AppRoutes.dashboard.path,
        },
        {
            title: { primary: 'Exercises', secondary: 'We have more than 100+ exercises' },
            icon: <MuiIcons.FitnessCenter />,
            path: AppRoutes.exercise_list.path,
        },
        {
            title: { primary: 'Workout Plan', secondary: 'Create your own workout plan, or follow others' },
            icon: <MuiIcons.ArrowForward />,
            path: AppRoutes.workout_plan.path,
        },
        {
            title: { primary: 'Goals', secondary: 'Create your own customized goals!' },
            icon: <MuiIcons.Flag />,
            path: AppRoutes.goal.path,
        },
    ]
}