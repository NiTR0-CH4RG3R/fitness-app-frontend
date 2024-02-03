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
import WorkoutPlanAddDialog from "../WorkoutPlan/WorkoutPlanAddDialog";
import WorkoutPlanEditDialog from "../WorkoutPlan/WorkoutPlanEditDialog";
import WorkoutPlanDeleteDialog from '../WorkoutPlan/WorkoutPlanDeleteDialog';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170, align: 'left' },
    { id: 'addedDate', label: 'Added Date', minWidth: 100 },
    { id: 'action', label: 'Action', minWidth: 270, align: 'center' },
];

export default function UserList() {

    const [Followings, setFollowings] = useState(0);

    const [rows, setRows] = useState([

    ]);


    const [mode, setMode] = useState('private');

    const [isConfirm, setIsConfirm] = useState(false);
    const [isEditModal, setIsEditModal] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);

    useEffect(() => {
        if (mode === 'private') {
            setRows([
                {
                    id: 0, name: 'Yo Yo Diet', duration: 7, createdBy: 'Yo Yo Man', createdDate: Date.now().toLocaleString(), action: (
                        // <Box display='flex' width='fit-content' height='fit-content' justifyContent='center' alignItems='center'>
                        //     <Button variant='contained' color='success' sx={{ m: 0.3 }}> Follow </Button>
                        //     <Button variant='contained' color='primary' sx={{ m: 0.3 }}> Edit </Button>
                        //     <Button variant='contained' color='error' sx={{ m: 0.3 }}> Delete </Button>
                        // </Box>
                        <>
                            <Button variant='contained' color='success' sx={{ m: 0.3 }}> Follow </Button>
                            <Button variant='contained' color='primary' sx={{ m: 0.3 }} onClick={() => setIsEditModal(true)}> Edit </Button>
                            <Button variant='contained' color='error' sx={{ m: 0.3 }} onClick={() => setIsConfirm(true)}> Delete </Button>
                        </>
                    )
                },
            ]);
        }
        else {
            setRows([
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

    }, [mode]);

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
                onClick={() => { setIsAddModal(true); }}
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
                <TablePagination component="div" />
            </Paper>
            <WorkoutPlanAddDialog isOpen={isAddModal} onClose={() => setIsAddModal(false)} />
            <WorkoutPlanEditDialog isOpen={isEditModal} onClose={() => setIsEditModal(false)} />
            <WorkoutPlanDeleteDialog isOpen={isConfirm} onClose={() => setIsConfirm(false)} />

        </Box>
    );
}