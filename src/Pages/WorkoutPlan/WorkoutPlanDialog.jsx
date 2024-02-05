import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function WorkoutPlanDialog({ isOpen, mode, onSubmit, onClose, ...props }) {

    const [initialValues, setInitialValues] = useState({});

    useEffect(() => {
        mode === 'edit' && setInitialValues(props);
        
    }, []);

    return ( 
        <Dialog
            open={isOpen}
            onClose={onClose}
            component={ mode === ('add' || 'edit') ? 'form' : 'div' }
            onSubmit={(event) => {
                event.preventDefault();
                const formData = new FormData(event.currentTarget);
                onSubmit(Object.fromEntries(formData));
                onClose();
            }}
        >
            <DialogTitle>
                { mode === 'add' ? 'Add a Workout Plan' : mode === 'edit' ? 'Edit Workout Plan' : 'View Workout Plan' }
            </DialogTitle>

        </Dialog>
    )
}