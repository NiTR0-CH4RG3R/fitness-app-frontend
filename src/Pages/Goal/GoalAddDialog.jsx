import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function GoalAddDialog({ isOpen, onSubmit, onClose }) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            component='form'
            onSubmit={async (event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                await onSubmit(Object.fromEntries(formData));
                onClose();
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
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </DialogActions>
        </Dialog>
    );
}