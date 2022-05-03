import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ card }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card raised sx={{ width: 345, mb: 5 }}>
      <CardActionArea>
        <CardMedia component='img' height='200' image={card.img} alt={card.title} />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {card.title}
          </Typography>
          <Typography variant='body2' color='text.primary'>
            {card.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
        <Button
          onClick={() => handleOpen()}
          color='primary'
          variant='contained'
          sx={{ color: 'text.secondary' }}
        >
          Learn More
        </Button>
        <ProjectModal handleClose={handleClose} open={open} card={card} />
      </CardActions>
    </Card>
  );
}
