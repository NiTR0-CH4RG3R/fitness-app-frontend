import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";


export default function UserAddDialog({ isOpen, onSubmit, onClose }) {
    const [isPublic, setIsPublic] = useState(false);
    return (
        <Dialog
            open={isOpen}
            onClose={onClose}
            PaperProps={{
                component: "form",
                onSubmit: (event) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    onSubmit(Object.fromEntries(formData));
                },
            }}
        >
            <DialogTitle>Add a Workout Plan</DialogTitle>
            <DialogContent>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    sx={{ marginTop: "1.25rem" }}
                    InputLabelProps={{ shrink: true }}
                    name="name"
                />
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Duration (in Days)"
                    variant="outlined"
                    sx={{ marginTop: "1.25rem" }}
                    InputLabelProps={{ shrink: true }}
                    name="duration"
                />



                <FormControlLabel
                    control={
                        <Switch checked={isPublic} onChange={() => { setIsPublic(!isPublic) }} name="isPublic" />
                    }
                    label="Is Public"
                    labelPlacement="start"
                />


            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit">Submit</Button>
            </DialogActions>
        </Dialog>
    )
}