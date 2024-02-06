import { useEffect, useState } from "react";
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import GoalDeleteDialog from "./GoalDeleteDialog";
import GoalAddDialog from "./GoalAddDialog";
import GoalEditDialog from "./GoalEditDialog";
import useGoalService from "../../services/useGoalService";

const columns = [
    { id: "id", label: "Id", minWidth: 170 },
    { id: "type", label: "Type", minWidth: 100 },
    { id: "value", label: "Value", minWidth: 170 },
    { id: "currentDate", label: "Current Date", minWidth: 170 },
    { id: "currentAchivedValue", label: "Current Achived Value", minWidth: 170 },
    { id: "action", label: "Action", minWidth: 170 },
];


export default function GoalList() {
    const goalService = useGoalService();

    const [rows, setRows] = useState([]);
    const [deleteDialogState, setDeleteDialogState] = useState({ isOpen: false, id: undefined });
    const [editDialogState, setEditDialogState] = useState({ isOpen: false, id: undefined });
    const [addDialogState, setAddDialogState] = useState({ isOpen: false });

    function deleteGoal(formdata) {
        goalService.deleteGoal(deleteDialogState.id)
            .then(() => {
                setRows(rows.filter(row => row.id !== deleteDialogState.id));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    function addGoal(formdata) {
        goalService.createGoal(formdata)
            .catch((error) => {
                console.log(error);
            });
    }

    function editGoal(formdata) {
        goalService.updateGoal(editDialogState.id, formdata).catch((error) => {
            console.log(error);
        });
    }

    useEffect(() => {
        goalService.getGoals().then((response) => {
            if (response === null) return;
            setRows(response);
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <Box width='100%' height='100%' display='flex' flexDirection='column' alignItems='center'>
            <Box
                width='100%'
                display='flex'
                justifyContent='flex-end'
                alignItems='center'
                p={2}
            >
                <Button variant="contained" color="success" onClick={() => {
                    setAddDialogState({ isOpen: true });
                }}>
                    Add
                </Button>
            </Box>
            <Paper sx={{ width: "90%" }}>
                <TableContainer sx={{ maxHeight: "90%" }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.id === "action" && (
                                                    <div>
                                                        <Button
                                                            variant="contained"
                                                            onClick={() => {
                                                                setEditDialogState({ isOpen: true, id: row.id });
                                                            }}
                                                            sx={{ marginRight: "1rem" }}
                                                        >
                                                            Edit
                                                        </Button>
                                                        <Button
                                                            variant="outlined"
                                                            onClick={() => {
                                                                setDeleteDialogState({ isOpen: true, id: row.id });
                                                            }}
                                                        >
                                                            Delete
                                                        </Button>
                                                    </div>
                                                )}
                                                {column.id !== "action" &&
                                                    column.format &&
                                                    typeof value === "number"
                                                    ? column.format(value)
                                                    : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Paper>

            <GoalDeleteDialog
                isOpen={deleteDialogState.isOpen}
                onSubmit={deleteGoal}
                onClose={() => {
                    setDeleteDialogState({ isOpen: false });
                }}
            />

            <GoalAddDialog
                isOpen={addDialogState.isOpen}
                onSubmit={addGoal}
                onClose={() => {
                    setAddDialogState({ isOpen: false });
                }}
            />

            <GoalEditDialog
                isOpen={editDialogState.isOpen}
                onSubmit={editGoal}
                onClose={() => {
                    setEditDialogState({ isOpen: false });
                }}
            />


        </Box>
    );
}