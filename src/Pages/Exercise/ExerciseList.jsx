import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import MediaCard from '../../Components/MediaCard';
import SearchBar from '../../Components/SearchBar';


// [TODO] Replace this with a call to the backend
const sample = [
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
    { title: 'Lizard', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica' },
]

const cardsPerPage = 8;

export default function ExerciseList() {
    const exerciseCount = sample.length;
    const pageCount = Math.floor(exerciseCount / cardsPerPage) + 1;

    const [page, setPage] = useState(1);

    // [TODO] : Replace this with a call to the backend
    const exerciseList = sample.slice((page - 1) * cardsPerPage, page * cardsPerPage);

    return (
        <Box
            width='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
        >
            {/* [INFO] Here I have given a very higher value to the zIndex. If we are doing things correctly we should return a value from material ui. Also maybe we should move the zIndex to the SearchBar component. Let's do it if we were to use this in another place*/}
            <SearchBar outerBoxProps={{ position: 'fixed', top: '10%', zIndex: 2000 }} />

            <Grid
                container
                spacing={5}
                direction='row'
                justifyContent='center'
                alignItems='center'
            >
                {exerciseList.map((card, index) => (
                    <Grid item xs='auto' key={index}>
                        <MediaCard title={card.title} image={card.image} description={card.description} />
                    </Grid>
                ))}
                {/* <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Pagination page={page} count={pageCount} onChange={(_, p) => { setPage(p); }} />
                </Grid> */}
            </Grid>

            <Box
                width='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'
                position='fixed'
                bottom={0}
                padding={4}
            >
                <Pagination page={page} count={pageCount} onChange={(_, p) => { setPage(p); }} />
            </Box>

        </Box>
    );
}