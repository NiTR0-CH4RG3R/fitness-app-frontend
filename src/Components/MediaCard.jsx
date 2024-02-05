import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * This function is directly copied from the material ui documentation.
 * https://mui.com/material-ui/react-card/
 */

export default function MediaCard({ title, description, image, onClick }) {
    return (
        <Card sx={{ maxWidth: 300, width: 300, borderRadius: 2, height: '40%', maxHeight: 300 }} raised>
            <CardMedia
                sx={{
                    height: 100
                }}
                image={image}
                title={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div"> {title}</Typography>
                <Typography variant="body2" color="text.secondary">{description}</Typography>
            </CardContent>
            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Button size="small" onClick={onClick}>Learn More</Button>
            </CardActions>
        </Card>
    );
}