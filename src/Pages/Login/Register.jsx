import { useFormik } from 'formik';
import * as Yup from 'yup';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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

export default function Register() {
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            type: '',
            email: '',
            password: '',
            confirmPassword: '',
            dob: '',
            phonenumber: '',
            address: '',
            weight: 1,
            bloodGroup: '',
            healthIssues: '',
            emergencyContact: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    });


    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
            onChange={formik.handleChange}
            onReset={formik.handleReset}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} >
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="firstName"
                                name="firstName"
                                label="First Name"
                                value={formik.values.firstName}
                                error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                helperText={formik.touched.firstName && formik.errors.firstName}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="lastName"
                                name="lastName"
                                label="Last Name"
                                value={formik.values.lastName}
                                error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                helperText={formik.touched.lastName && formik.errors.lastName}
                            />
                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>
                            <FormControl fullWidth size='small' variant='filled'>
                                <InputLabel>User Type</InputLabel>
                                <Select
                                    id="type"
                                    name="type"
                                    label="User Type"
                                    value={formik.values.type}
                                    error={formik.touched.type && Boolean(formik.errors.type)}
                                    helperText={formik.touched.type && formik.errors.type}
                                    onChange={(e) => formik.setFieldValue('type', e.target.value)}

                                >
                                    <MenuItem value={'ADMIN'}>Admin</MenuItem>
                                    <MenuItem value={'USER'}>User</MenuItem>
                                </Select>
                            </FormControl>

                        </Item>
                    </Grid>
                    <Grid item xs={6} >
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="email"
                                name="email"
                                label="Email"
                                value={formik.values.email}
                                error={formik.touched.email && Boolean(formik.errors.email)}
                                helperText={formik.touched.email && formik.errors.email}
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={6} >
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                value={formik.values.password}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="confirmPassword"
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                value={formik.values.confirmPassword}
                                error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                                helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="dob"
                                name="dob"
                                label="Date of Birth"
                                type="date"
                                value={formik.values.dob}
                                error={formik.touched.dob && Boolean(formik.errors.dob)}
                                helperText={formik.touched.dob && formik.errors.dob}
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={6}>
                        <Item>
                            <TextField
                                fullWidth
                                variant='filled'
                                size='small'
                                id="phonenumber"
                                name="phonenumber"
                                label="Phone Number"
                                value={formik.values.phonenumber}
                                error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                                helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={12}>
                        <Item>
                            <TextField
                                multiline
                                fullWidth
                                variant='filled'
                                size='small'
                                id="address"
                                name="address"
                                label="Address"
                                value={formik.values.address}
                                error={formik.touched.address && Boolean(formik.errors.address)}
                                helperText={formik.touched.address && formik.errors.address}
                            />
                        </Item>
                    </Grid>

                    <Grid item xs={6}>

                    </Grid>
                </Grid>
            </Box>

            <Button 
            color="primary" 
            variant="contained" 
            fullWidth 
            type="submit">
                Submit
            </Button>


            <Button 
            color="warning" 
            variant="contained" 
            fullWidth type="reset"
            >
                Reset
            </Button>

        </Box>
    );
};