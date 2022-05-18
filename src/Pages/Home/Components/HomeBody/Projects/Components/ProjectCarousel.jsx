import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
  Stack,
  Divider,
} from '@mui/material';

export default function ProjectCarousel({ projects }) {
  return (
    <Carousel interval={120000} navButtonsAlwaysVisible stopAutoPlayOnHover swipe={false}>
      {projects.map((project, i) => (
        <Item key={i} project={project} />
      ))}
    </Carousel>
  );
}

function Item({ project }) {
  return (
    <Card elevation={0} sx={{ backgroundColor: '#616161', color: 'white', minHeight: '600px', height: '100%', orderBottom: '2px solid black', py: 2 }}>
      <Typography variant='h4' sx={{ mt: 0, mb: { xs: 1, md: 0 } }}>
        {project.title}
      </Typography>
      <Divider  sx={{mb: 2}} />
      <CardMedia
        component='img'
        image={project.img}
        alt={project.img}
        sx={{
          px: { xs: 0, md: 12 },
          height: { xs: '175px', md: '400px' },
          objectFit: 'contain',
          my: 2
        }}
      />
      <Stack
        justifyContent='space-between'
        sx={{ flexGrow: 1, height: '100%', overflow: 'auto'}}
      >
        <CardContent sx={{ m: 1 }}>
          <Typography variant='h6' sx={{ py: { xs: 0, md: 2 }, px: {xs: 3, md: 8}}}>
            {project.description}
          </Typography>
          <Typography sx={{ py: { xs: 2, md: 2 },  px: {xs: 0, md: 8}}}>
            {project.tech && `Tech: ${project.tech}`}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', p: 0, m: 0 }}>
          {project.link && (
            <Button href={project.link} variant='outlined' sx={{mb: 2}}>
              {project.buttonMsg}
            </Button>
          )}
        </CardActions>
      </Stack>
    </Card>
  );
}
