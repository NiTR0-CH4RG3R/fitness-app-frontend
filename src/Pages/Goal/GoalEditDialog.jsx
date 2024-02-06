
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

export default function GoalEditDialog({ isOpen, onSubmit, onClose }) {
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            component='form'
            onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                onSubmit(Object.fromEntries(formData));
                onClose();
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
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </DialogActions>
        </Dialog>
    );
}