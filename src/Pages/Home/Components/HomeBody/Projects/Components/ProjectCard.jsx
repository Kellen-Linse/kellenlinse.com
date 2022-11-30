import { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import ProjectModal from './ProjectModal';

const cardStyle = {
  width: { xs: 345, md: 500 },
  mb: 9,
  transition: 'transform 0.15s ease-in-out',
  '&:hover': { transform: 'scale3d(1.1, 1.1, 1)' },
};

export default function ProjectCard({ card }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Card raised sx={cardStyle} onClick={() => handleOpen()}>
            <Typography gutterBottom variant='h4' component='div' textAlign='center' sx={{m: 3, textShadow: "2px 2px 2px black"}}>
              {card.title}
            </Typography>
          <CardMedia
            component='img'
            height='200'
            image={card.img}
            alt={card.title}
          />
          <CardContent>
            <Divider />
            <Typography sx={{ mt: 3, textAlign: 'center', textShadow: "1px 1px 1px black" }} variant='h6' color='text.primary'>
              {card.desc}
            </Typography>
          </CardContent>
      </Card>
      <ProjectModal handleClose={handleClose} open={open} card={card} />
    </>
  );
}
