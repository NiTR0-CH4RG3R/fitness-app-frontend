import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import FormControl from '@mui/material/FormControl';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import useExerciseService from '../../services/useExerciseService';

export default function Exercise() {

    const { id } = useParams();

    const exerciseService = useExerciseService();

    const [title, setTitle] = useState('');
    const [image, setImage] = useState("https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg");
    const [description, setDescription] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);
    const [video, setVideo] = useState('AWl3WBAU4h8');
    const [comments, setComments] = useState([
        { comment: 'This is a comment', rating: 5, user: 'Buddhima Zoysa' },
        { comment: 'This is another comment', rating: 4, user: 'Pubudu Tharaka' },
        { comment: 'This is a comment', rating: 3, user: 'Sachindu Umayangana' },
    ]);

    useEffect(() => {
        exerciseService.getExercise(id)
            .then((response) => {
                setImage(response.image);
                setTitle(response.title);
                setDescription(response.description);
                setVideo(response.video);
            })
            .then(() => exerciseService.getExerciseReviews(id))
            .then((reviews) => {
                setComments(reviews);
            })
            .catch((error) => {
                console.log(error);
            });
        ;
    }, [id]);

    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);

    function addComment(e) {
        exerciseService.createExerciseReview(id, { comment, rating })
            .then(() => exerciseService.getExerciseReviews(id))
            .then((reviews) => {
                setComments(reviews);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (

        <Grid
            container
            direction='column'
            justifyContent='center'
            width='100%'
            maxWidth={600}
            height='100%'
            sx={{
                '& .MuiGrid-item': {
                    mb: 4,
                    borderRadius: 4,
                    width: '100%',
                    overflow: 'hidden',
                }
            }}
        >

            <Grid
                item
                component={Paper}
                elevation={3}
                sx={{
                    maxHeight: 300,
                }}
            >
                <Box
                    component='img'
                    src={image}
                    alt={title}
                    width='100%'
                    height='100%'
                />
            </Grid>

            <Grid
                item
                component={Paper}
                elevation={3}
                padding={3}
            >
                <Typography variant='body'>{description}</Typography>
            </Grid>

            <Grid
                item
                component={Paper}
                elevation={3}
            >
                <YouTube
                    videoId={video}
                    opts={{
                        width: '100%',
                        playerVars: {
                            // https://developers.google.com/youtube/player_parameters
                            autoplay: 0,
                        },
                    }} onReady={(e) => {
                        //e.target.stopVideo();
                    }}
                />
            </Grid>

            <Grid
                item
                component={Paper}
                elevation={3}
                padding={3}
            >
                <Box
                    component='form'
                    onSubmit={addComment}
                    onReset={(e) => { e.preventDefault(); setComment(''); setRating(0); }}
                    display='flex'
                    flexDirection='column'
                    width='100%'
                >
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', mb: 2 }}>
                        <Typography component="legend" fontWeight='bold'>Rating</Typography>
                        <Rating
                            name='rating'
                            value={rating}
                            onChange={(e, newValue) => { setRating(newValue); }}
                        />
                    </FormControl>
                    <TextField
                        label='Comment'
                        variant='outlined'
                        value={comment}
                        multiline
                        rows={4}
                        sx={{
                            width: '100%',
                        }}
                        onChange={(e) => { setComment(e.target.value) }}
                    />
                    <Box
                        display='flex'
                        justifyContent='flex-end'
                        width='100%'
                        mt={2}
                    >
                        <Button
                            variant='outlined'
                            color='error'
                            type='reset'
                            sx={{
                                mr: 2,
                            }}
                        >
                            Clear
                        </Button>
                        <Button
                            variant='contained'
                            color='primary'
                            type='submit'
                        >
                            Add
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems='center'

                sx={{
                    '& .MuiGrid-item': {
                        overflow: 'visible',
                        mb: 1.5,
                    }
                }}
            >
                {
                    comments.map((comment, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                component={Paper}
                                elevation={3}
                                padding={3}
                            >
                                <Box display='flex' flexDirection='row' justifyContent='space-between' mb={1}>
                                    <Typography variant='body1' fontWeight='bold'>{comment.user}</Typography>
                                    <Rating name='rating' value={comment.rating} readOnly />
                                </Box>
                                <Typography variant='body2' fontStyle='italic'>{comment.comment}</Typography>
                            </Grid>
                        );
                    })
                }
            </Grid>

        </Grid>

    );
}