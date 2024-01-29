import React from "react";
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
 
function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
 
export default function Goals() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([
    {
      id: 1,
      type: "Weight loss",
      value: "1",
      currentDate: new Date().toISOString().split("T")[0],
      currentAchivedValue: 8,
    },
  ]);
  const [id, setId] = React.useState(0);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [isConfirm, setIsConfirm] = React.useState(false);
  const [isEditModal, setIsEditModal] = React.useState(false);
  const [isAddModal, setIsAddModal] = React.useState(false);
 
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
    <div>
      <div style={{ height: "100vh", width: "97.05vw", backgroundColor: "#ebebeb", padding: "1rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginBottom: "1rem",
          }}
        >
          <Button variant="contained" color="success" onClick={() => onPressAdd()}>
            Add
          </Button>
        </div>
        <Paper sx={{ width: "100%" }}>
          <TableContainer sx={{ maxHeight: "100vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column, index) => (
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
      </div>
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
    </div>
  );
}
 