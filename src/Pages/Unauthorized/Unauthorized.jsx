import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Unauthorized() {
    return (
        <Box
            display='flex'
            width='100%'
            height='100%'
            justifyContent='center'
            alignItems='center'
        >
            <Typography variant='h1'>Unauthorized</Typography>
        </Box>
    );
}