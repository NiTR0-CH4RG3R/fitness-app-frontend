import { useState } from "react";
import Box from '@mui/material/Box'
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const columns = [
    { id: "id", label: "Id", minWidth: 170 },
    { id: "type", label: "Type", minWidth: 100 },
    { id: "value", label: "Value", minWidth: 170 },
    { id: "currentDate", label: "Current Date", minWidth: 170 },
    { id: "currentAchivedValue", label: "Current Achived Value", minWidth: 170 },
    { id: "action", label: "Action", minWidth: 170 },
];

export default function GoalList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [rows, setRows] = useState([
        {
            id: 1,
            type: "Weight loss",
            value: "1",
            currentDate: new Date().toISOString().split("T")[0],
            currentAchivedValue: 8,
        },
    ]);



    const [id, setId] = useState(0);
    const [isConfirm, setIsConfirm] = useState(false);
    const [isEditModal, setIsEditModal] = useState(false);
    const [isAddModal, setIsAddModal] = useState(false);

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    function onPressAdd() {
        setIsAddModal(true);
        console.log("Add");
    }

    function onPressEdit(id) {
        setId(id);
        setIsEditModal(true);
        console.log(`Edit: ${id}`);
    }

    function onPressDelete(id) {
        setId(id);
        setIsConfirm(true);
        console.log(`Delete: ${id}`);
    }

    function handleCloseAdd() {
        setIsAddModal(false);
    }

    function handleCloseConfirm() {
        setIsConfirm(false);
    }

    function handleCloseEdit() {
        setIsEditModal(false);
    }

    return (
        <Box width='100%' height='100%' display='flex' flexDirection='column' alignItems='center'>
            <Box
                width='100%'
                display='flex'
                justifyContent='flex-end'
                alignItems='center'
                p={2}
            >
                <Button variant="contained" color="success" onClick={onPressAdd}>
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
                            {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === "action" && (
                                                        <div>
                                                            <Button
                                                                variant="contained"
                                                                onClick={() => onPressEdit(row.id)}
                                                                sx={{ marginRight: "1rem" }}
                                                            >
                                                                Edit
                                                            </Button>
                                                            <Button
                                                                variant="outlined"
                                                                onClick={() => onPressDelete(row.id)}
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
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>
            <Dialog
                fullScreen={fullScreen}
                open={isConfirm}
                onClose={handleCloseConfirm}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Confirm to delete data?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure, you need to delete this data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleCloseConfirm}>
                        Close
                    </Button>
                    <Button onClick={handleCloseConfirm} autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={isEditModal}
                onClose={handleCloseEdit}
                PaperProps={{
                    component: "form",
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const currentDate = formJson.currentDate;
                        const currentAchivedValue = formJson.currentAchivedValue;
                        console.log(currentAchivedValue);
                        handleCloseEdit();
                    },
                }}
            >
                <DialogTitle>Edit data</DialogTitle>
                <DialogContent>
                    <form action="">
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Current Date"
                            variant="outlined"
                            sx={{ marginTop: "1.25rem" }}
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            name="currentDate"
                        />
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Current Achived Value"
                            variant="outlined"
                            sx={{ marginTop: "1.25rem" }}
                            InputLabelProps={{ shrink: true }}
                            name="currentAchivedValue"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseEdit}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={isAddModal}
                onClose={handleCloseAdd}
                PaperProps={{
                    component: "form",
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());
                        const currentDate = formJson.currentDate;
                        const currentAchivedValue = formJson.currentAchivedValue;
                        console.log(currentAchivedValue);
                        handleCloseAdd();
                    },
                }}
            >
                <DialogTitle>Create data</DialogTitle>
                <DialogContent>
                    <form action="">
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Type"
                            variant="outlined"
                            sx={{ marginTop: "1.25rem" }}
                            InputLabelProps={{ shrink: true }}
                            name="type"
                        />
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Value"
                            variant="outlined"
                            sx={{ marginTop: "1.25rem" }}
                            InputLabelProps={{ shrink: true }}
                            name="value"
                        />
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Current Date"
                            variant="outlined"
                            sx={{ marginTop: "1.25rem" }}
                            type="date"
                            InputLabelProps={{ shrink: true }}
                            name="currentDate"
                        />
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            label="Current Achived Value"
                            variant="outlined"
                            sx={{ marginTop: "1.25rem" }}
                            InputLabelProps={{ shrink: true }}
                            name="currentAchivedValue"
                        />
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAdd}>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}