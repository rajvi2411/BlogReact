import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cardImage from '../assets/scenary.png'

export default function MediaCard() {
    return (
        <Card sx={{ maxWidth: { xs: 550, sm: 550, md: 345 } }}>
            <CardMedia
                sx={{ height: { xs: 300, sm: 280, md: 140 } }}
                image={cardImage}
                title="scenary image"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Heading
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    This is a media card. You can use this section to describe the content
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
            </CardActions>
        </Card>
    );
}