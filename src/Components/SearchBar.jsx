import { Search } from '@mui/icons-material';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

export default function SearchBar({ outerBoxProps, onSearchChange, onSearchClick }) {
    return (
        <Box
            display='flex'
            justifyContent='center'
            alignItems='center'
            borderRadius='10px'
            backgroundColor='background.paper'
            p='2px'
            width='content-fit'
            boxShadow='-2px 2px 10px 0px rgba(0,0,0,0.5)'
            sx={{ ...outerBoxProps }}

        >
            <InputBase
                variant='outlined'
                placeholder='Search...'
                inputProps={{ 'aria-label': 'search' }}
                sx={{ ml: 1, flex: 1 }}
                onChange={onSearchChange}
                fullWidth
            />
            <IconButton type='button' sx={{ p: 1 }} aria-label='search' onClick={onSearchClick}>
                <Search />
            </IconButton>
        </Box>
    )
}