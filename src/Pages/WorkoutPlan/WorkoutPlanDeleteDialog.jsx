import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function WorkoutPlanDeleteDialog({ isOpen, onSubmit, onClose }) {
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
            <DialogTitle>
                Confirm to delete data?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure, you need to delete this data?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    Close
                </Button>
                <Button type='submit'>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}