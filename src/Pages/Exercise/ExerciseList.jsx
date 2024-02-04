import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Data/AppRoutes';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import MediaCard from '../../Components/MediaCard';
import SearchBar from '../../Components/SearchBar';
import axios from '../../api/axios';

// [TODO] Replace this with a call to the backend
const sample = [
    { title: 'Lizard 01', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,001 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 02', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,002 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 03', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,003 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 04', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,004 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 05', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,005 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 06', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,006 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 07', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,007 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 08', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,008 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 09', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,009 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 10', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,010 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 11', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,011 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 12', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,012 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 13', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,013 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 14', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,014 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 15', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,015 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 16', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,016 species, ranging across all continents except Antarctica' },
    { title: 'Lizard 17', image: (process.env.PUBLIC_URL + '/img/contemplative-reptile.jpg'), description: 'Lizards are a widespread group of squamate reptiles, with over 6,017 species, ranging across all continents except Antarctica' },
]

const EXERCISES_URL = '/exercises';

const cardsPerPage = 8;

export default function ExerciseList() {

    const [page, setPage] = useState(1);
    const [exerciseList, setExerciseList] = useState(sample.slice((page - 1) * cardsPerPage, page * cardsPerPage));
    const [pageCount, setPageCount] = useState(Math.floor(sample.length / cardsPerPage) + 1);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get(`${EXERCISES_URL}/count`)
            .then(response => {
                setPageCount(Math.ceil(response?.data?.count / cardsPerPage));
                axios.get(EXERCISES_URL,
                    JSON.stringify({ page, cardsPerPage }),
                    {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        withCredentials: true
                    })
                    .then(response => {
                        setExerciseList(response?.data?.exercises);
                    })
            })
            .catch(error => {
                console.log(error);
            });
    }, [page]);

    useEffect(() => {
        if (search === '') {
            return;
        }

        axios.get(`${EXERCISES_URL}/search`,
            JSON.stringify({ search }),
            {
                headers: {
                    'Content-Type': 'application/json'
                },
                withCredentials: true
            })
            .then(response => {
                setExerciseList(response?.data?.exercises);
            })
            .catch(error => {
                console.log(error);
            });
    }, [search]);

    const navigate = useNavigate();

    return (
        <>
            {/* [INFO] Here I have given a very higher value to the zIndex. If we are doing things correctly we should return a value from material ui. Also maybe we should move the zIndex to the SearchBar component. Let's do it if we were to use this in another place*/}
            <Box
                position='fixed'
                top='12%'
                display='flex'
                width='100%'
                height='content-fit'
                justifyContent='center'
                alignItems='center'
                zIndex={1000}
            >
                <SearchBar
                    onSearchChange={(e) => { setSearch(e.target.value); }}
                    outerBoxProps={{}}
                />
            </Box>

            <Grid
                container
                spacing={3}
                direction='row'
                justifyContent='center'
                alignItems='center'
                width='100%'
                height='90%'
                overflow='auto'
            >
                {exerciseList.map((card, index) => (
                    <Grid item key={index} >
                        <MediaCard title={card.title} image={card.image} description={card.description} onClick={(e) => { navigate(AppRoutes.exercise.path); }} />
                    </Grid>
                ))}
            </Grid>

            <Box
                width='100%'
                display='flex'
                justifyContent='center'
                alignItems='center'
                position='fixed'
                bottom='1%'
                padding={0}
            >
                <Pagination page={page} count={pageCount} onChange={(_, p) => { setPage(p); }} />
            </Box>

        </>
    );
}