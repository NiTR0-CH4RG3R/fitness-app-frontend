import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function UserEditDialog({ isOpen, onSubmit, onClose }) {
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
            <DialogTitle>
            Confirm to Prmote as Admin?
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                Are you sure, you need to promote this User?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={onClose}>
                    Close
                </Button>
                <Button type='submit'>
                    Promote
                </Button>
            </DialogActions>
        </Dialog>
    )
}