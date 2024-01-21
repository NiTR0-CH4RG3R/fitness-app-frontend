import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Missing() {
    return (
        <Box
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='h1'>404 - Page Not Found!</Typography>
        </Box>
    );
}