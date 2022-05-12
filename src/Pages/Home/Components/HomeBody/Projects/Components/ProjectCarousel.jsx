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
      duration={3000}
      interval={10000}
      navButtonsAlwaysVisible
      animation='slide'
    >
      {projects.map((project, i) => (
        <Item key={i} project={project} />
      ))}
    </Carousel>
  );
}

function Item({ project }) {
  return (
    <Card elevation={0} sx={{ height: 600 }}>
      <Stack
        height={'100%'}
        direction='column'
        justifyContent='space-around'
        alignItems='center'
      >
        <Typography variant='h5' sx={{ my: { xs: 1, md: 3 } }}>
          {project.title}
        </Typography>
        <CardMedia
          component='img'
          image={project.img}
          alt={project.img}
          sx={{ px: { xs: 0, md: 12 }, height: { xs: '50%', md: '60%' } }}
        />

        <CardContent>
          <Typography sx={{ p: { xs: 0, md: 3 } }}>
            {project.description}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center', p: 0, m: 0 }}>
          <Button
            variant='contained'
            sx={{ color: 'secondary.main' }}
            href={project.link}
          >
            Check it out!
          </Button>
        </CardActions>
      </Stack>
    </Card>
  );
}
