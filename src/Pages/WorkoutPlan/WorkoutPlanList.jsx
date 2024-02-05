import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab'
import AddIcon from '@mui/icons-material/Add';
import WorkoutPlanAddDialog from './WorkoutPlanAddDialog';
import WorkoutPlanEditDialog from './WorkoutPlanEditDialog';
import WorkoutPlanDeleteDialog from './WorkoutPlanDeleteDialog';
import useWorkoutPlanService from '../../services/useWorkoutPlanService';
import useUserService from '../../services/useUserService';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
    { id: 'duration', label: 'Duration (Days)', minWidth: 100 },
    { id: 'createdBy', label: 'Created By', minWidth: 100 },
    { id: 'createdDate', label: 'Created Date', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 270, align: 'center' },
];

export default function WorkoutPlanList() {

    const workoutPlanService = useWorkoutPlanService();
    const userService = useUserService();

    const [mode, setMode] = useState('public');

    const [rows, setRows] = useState([]);

    const [confirmDialogState, setConfirmDialogState] = useState({
        id: undefined,
        isOpen: false
    });

    const [editDialogState, setEditDialogState] = useState({
        id: undefined,
        isOpen: false
    });

    const [addDialogState, setAddDialogState] = useState({
        isOpen: false
    });

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(25);

    const followWorkoutPlan = async (id) => {
        await userService.followWorkoutPlan(id);
    }

    const addWorkoutPlan = async (formdata) => {
        await workoutPlanService.createWorkoutPlan(formdata);
    }

    const editWorkoutPlan = async (formdata) => {
        await workoutPlanService.updateWorkoutPlan(editDialogState.id, formdata);
    }

    const deleteWorkoutPlan = async (formdata) => {
        await workoutPlanService.deleteWorkoutPlan(confirmDialogState.id);
    }

    useEffect(() => {
        (async () => {
            const isPublic = mode === 'public';
            try {
                const response = isPublic ? await workoutPlanService.getPublicWorkoutPlans() : await workoutPlanService.getPrivateWorkoutPlans();
                const plans = response.map((workoutplan) => {
                    return {
                        id: workoutplan.id,
                        name: workoutplan.name,
                        duration: workoutplan.duration,
                        createdBy: workoutplan.createdBy,
                        createdDate: new Date(workoutplan.createdDate).toLocaleString(),
                        action: (
                            <>
                                <Button variant='contained' color='success' sx={{ m: 0.3 }} onClick={async () => await followWorkoutPlan(workoutplan.isFollowing ? undefined : workoutplan.id)}> {workoutplan.isFollowing ? <span> Unfollow </span> : <span> Follow </span>} </Button>
                                {isPublic && <Button variant='contained' color='primary' sx={{ m: 0.3 }} onClick={() => setEditDialogState({ id: workoutplan.id, isOpen: true })}> Edit </Button>}
                                {isPublic && <Button variant='contained' color='error' sx={{ m: 0.3 }} onClick={() => setConfirmDialogState({ id: workoutplan.id, isOpen: true })}> Delete </Button>}
                            </>
                        )
                    };
                });
                setRows(plans);
            }
            catch (error) {
                console.log(error);
                setRows(mode === 'private' ? [
                    {
                        id: 0, name: 'Yo Yo Diet', duration: 7, createdBy: 'Yo Yo Man', createdDate: Date.now().toLocaleString(), action: (
                            // <Box display='flex' width='fit-content' height='fit-content' justifyContent='center' alignItems='center'>
                            //     <Button variant='contained' color='success' sx={{ m: 0.3 }}> Follow </Button>
                            //     <Button variant='contained' color='primary' sx={{ m: 0.3 }}> Edit </Button>
                            //     <Button variant='contained' color='error' sx={{ m: 0.3 }}> Delete </Button>
                            // </Box>
                            <>
                                <Button variant='contained' color='success' sx={{ m: 0.3 }}> Follow </Button>
                                <Button variant='contained' color='primary' sx={{ m: 0.3 }} onClick={() => setEditDialogState({ id: 0, isOpen: true })}> Edit </Button>
                                <Button variant='contained' color='error' sx={{ m: 0.3 }} onClick={() => setConfirmDialogState({ id: 0, isOpen: true })}> Delete </Button>
                            </>
                        )
                    },
                ] :
                    [
                        {
                            id: 0, name: 'Yo Yo Diet', duration: 7, createdBy: 'Yo Yo Man', createdDate: Date.now().toLocaleString(), action: (
                                // <Box display='flex' width='fit-content' height='fit-content' justifyContent='center' alignItems='center'>
                                //     <Button variant='contained' color='success' sx={{ m: 0.3 }}> Follow </Button>
                                // </Box>
                                <>
                                    <Button variant='contained' color='success' sx={{ m: 0.3 }}> Follow </Button>
                                </>
                            )
                        },
                    ]);
            }
        })()
    }, [mode, rowsPerPage, page]);

    const handleChange = (event, newMode) => {
        if (newMode === null) return;
        setMode(newMode);
    };

    return (
        <Box display='flex' flexDirection='column' width='100%' height='100%' justifyContent='start' alignItems='center' p={7}>

            <Fab sx={{
                position: 'fixed',
                bottom: '5%',
                right: '2%',
            }}
                variant="extended"
                onClick={() => { setAddDialogState({ isOpen: true }); }}
                color='primary'
            >
                <AddIcon sx={{ mr: 1 }} />
                Add
            </Fab>

            <ToggleButtonGroup
                color="primary"
                value={mode}
                exclusive
                onChange={handleChange}
                aria-label="Platform"
                sx={{
                    mb: 5,
                }}

            >
                <ToggleButton value="private">Private</ToggleButton>
                <ToggleButton value="public">Public</ToggleButton>
            </ToggleButtonGroup>

            <Paper elevation={4} sx={{ minWidth: '100%', maxHeight: '90%' }}>

                <TableContainer sx={{ maxHeight: '90%' }}>
                    <Table stickyHeader aria-label="simple table">
                        <TableHead>
                            <TableRow key={0}>
                                {
                                    columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align === undefined ? 'right' : column.align}
                                            sx={{ fontWeight: 'bold', ...((column.minWidth !== undefined) && { minWidth: column.minWidth }) }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                rows.map((row) => (
                                    <TableRow
                                        key={row[0]}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}
                                        hover
                                        role="checkbox"
                                    >
                                        {columns.map((column, index) => (
                                            <TableCell
                                                key={column.id}
                                                component={index === 0 ? 'th' : 'td'}
                                                scope={index === 0 ? 'row' : ''}
                                                align={column.align === undefined ? 'right' : column.align}
                                            >
                                                {row[column.id]}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={-1}
                    page={page}
                    onPageChange={(e, newPage) => { setPage(newPage); }}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={(e) => { setRowsPerPage(e.target.value); }}
                />
            </Paper>
            <WorkoutPlanAddDialog isOpen={addDialogState.isOpen} onSubmit={addWorkoutPlan} onClose={() => setAddDialogState({ isOpen: false })} />
            <WorkoutPlanEditDialog isOpen={editDialogState.isOpen} onSubmit={editWorkoutPlan} onClose={() => setEditDialogState({ id: undefined, isOpen: false })} />
            <WorkoutPlanDeleteDialog isOpen={confirmDialogState.isOpen} onSubmit={deleteWorkoutPlan} onClose={() => setConfirmDialogState({ id: undefined, isOpen: false })} />

        </Box>
    );
}