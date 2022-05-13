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
} from '@mui/material';

export default function ProjectCarousel({ projects }) {
  return (
    <Carousel
      interval={10000}
      navButtonsAlwaysVisible
    >
      {projects.map((project, i) => (
        <Item key={i} project={project} />
      ))}
    </Carousel>
  );
}

function Item({ project }) {
  return (
    <Card elevation={0} >
        <Typography variant='h5' sx={{ my: { xs: 1, md: 3 } }}>
          {project.title}
        </Typography>
        <CardMedia
          component='img'
          image={project.img}
          alt={project.img}
          sx={{ px: { xs: 0, md: 12 }, height: {xs: '175px', md: '400px'} }}
        />
        <Stack justifyContent='space-between' sx={{ height: {xs: '200px', md: '200px', xl: '350px'}}} >

        <CardContent>
          <Typography sx={{ p: { xs: 0, md: 3 } }}>
            {project.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', p: 0, m: 0 }}>
        {project.link &&
          <Button href={project.link} variant='outlined'>
            Check it out!
          </Button>}
        </CardActions>
        </Stack>

    </Card>
  );
}
