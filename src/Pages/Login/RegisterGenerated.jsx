import React from 'react';
import { useFormik } from 'formik';
import { Button, TextField, MenuItem, Grid, Box, Paper } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import * as Yup from 'yup';
import { useNavigate, useLocation } from "react-router-dom";
import useAuthServices from "../../services/useAuthService";

const validationSchema = Yup.object({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    type: Yup.string().oneOf(['ADMIN', 'USER'], 'Invalid User Type').required('User Type is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),
    dob: Yup.date().required('Date of Birth is required'),
    phonenumber: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required('Phone Number is required'),
    address: Yup.string().required('Address is required'),
    weight: Yup.number().positive('Weight must be positive').required('Weight is required'),
    bloodGroup: Yup.string().oneOf(['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'], 'Invalid Blood Group').required('Blood Group is required'),
    healthIssues: Yup.string(),
    emergencyContact: Yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid').required('Emergency Contact is required'),
});

export default function RegisterGenerated() {

    const authService = useAuthServices();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || '/';

    const { handleSubmit, isSubmitting, handleChange, setFieldValue, values, touched, errors, resetForm } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            dob: null,
            phoneNumber: '',
            address: '',
            weight: '',
            bloodGroup: 'A+',
            healthIssues: '',
            emergencyContact: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { setSubmitting }) => {
            try {
                setSubmitting(true);
                authService.register(values).then(() => {

                    navigate(from, { replace: true });
                });
            }
            catch {
                setSubmitting(false);
            }
        }
    });


    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            height='100%'
            width='100%'
        >
            <Paper
                elevation={4}
                component='form'
                onSubmit={handleSubmit}
                onReset={resetForm}
                onChange={handleChange}
                sx={{
                    padding: 2,
                    width: '100%',
                    maxWidth: 500
                }}
            >



                <Grid container sx={{
                    '& .MuiGrid-item': {
                        padding: 1
                    }
                }}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            autoFocus
                            name="firstName"
                            label="First Name"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="firstName"
                            value={values.firstName}
                            error={touched.firstName && Boolean(errors.firstName)}
                            helperText={touched.firstName && errors.firstName}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="lastName"
                            label="Last Name"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="lastName"
                            value={values.lastName}
                            error={touched.lastName && Boolean(errors.lastName)}
                            helperText={touched.lastName && errors.lastName}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="email"
                            type="email"
                            label="Email"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="email"
                            value={values.email}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}

                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="password"
                            type="password"
                            label="Password"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="password"
                            value={values.password}
                            error={touched.password && Boolean(errors.password)}
                            helperText={touched.password && errors.password}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="confirmPassword"
                            type="password"
                            label="Confirm Password"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="confirmPassword"
                            value={values.confirmPassword}
                            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                            helperText={touched.confirmPassword && errors.confirmPassword}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                required
                                name="dob"
                                slotProps={{ textField: { variant: 'filled', size: 'small', fullWidth: true } }}
                                label="Date of Birth"
                                id="dob"
                                onChange={(value) => setFieldValue('dob', value)}
                                value={values.dob}
                                error={touched.dob && Boolean(errors.dob)}
                                helperText={touched.dob && errors.dob}

                            />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="phoneNumber"
                            label="Phone Number"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="phonenumber"
                            type="tel"
                            value={values.phoneNumber}
                            error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                            helperText={touched.phoneNumber && errors.phoneNumber}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            name="address"
                            label="Address"
                            multiline
                            fullWidth
                            variant='filled'
                            size='small'
                            id="address"
                            value={values.address}
                            error={touched.address && Boolean(errors.address)}
                            helperText={touched.address && errors.address}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="weight"
                            type="text"
                            label="Weight"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="weight"
                            value={values.weight}
                            error={touched.weight && Boolean(errors.weight)}
                            helperText={touched.weight && errors.weight}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            name="bloodGroup"
                            label="Blood Group"
                            select
                            fullWidth
                            variant='filled'
                            size='small'
                            id="bloodGroup"
                            value={values.bloodGroup}
                            error={touched.bloodGroup && Boolean(errors.bloodGroup)}

                            helperText={touched.bloodGroup && errors.bloodGroup}
                        >
                            <MenuItem value=""><em>None</em></MenuItem>
                            <MenuItem value={'A+'}>A+</MenuItem>
                            <MenuItem value={'A-'}>A-</MenuItem>
                            <MenuItem value={'B+'}>B+</MenuItem>
                            <MenuItem value={'B-'}>B-</MenuItem>
                            <MenuItem value={'O+'}>O+</MenuItem>
                            <MenuItem value={'O-'}>O-</MenuItem>
                            <MenuItem value={'AB+'}>AB+</MenuItem>
                            <MenuItem value={'AB-'}>AB-</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="healthIssues"
                            label="Health Issues"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="healthIssues"
                            value={values.healthIssues}
                            error={touched.healthIssues && Boolean(errors.healthIssues)}
                            helperText={touched.healthIssues && errors.healthIssues}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            name="emergencyContact"
                            label="Emergency Contact"
                            fullWidth
                            variant='filled'
                            size='small'
                            id="emergencyContact"
                            value={values.emergencyContact}
                            error={touched.emergencyContact && Boolean(errors.emergencyContact)}
                            helperText={touched.emergencyContact && errors.emergencyContact}
                        />
                    </Grid>
                    <Grid item xs={6}>

                    </Grid>
                    <Grid display='flex' item xs={6} justifyContent='end'>
                        <Button
                            color="warning"
                            variant="contained"
                            size='large'
                            type="reset"
                            sx={{ mr: 1 }}
                        >
                            Reset
                        </Button>
                        <Button
                            color="primary"
                            variant="contained"
                            type="submit"
                            size='large'
                        >
                            Submit
                        </Button>
                    </Grid>

                </Grid>
            </Paper>
        </Box>
    );
}