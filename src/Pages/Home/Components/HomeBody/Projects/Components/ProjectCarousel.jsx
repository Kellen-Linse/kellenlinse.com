import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {
    Button,
    Link,
    Card,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';

export default function ProjectCarousel({ projects }) {
    return (
        <Carousel
        duration={3000}
        interval={10000}
        indicators={false}
        height={350}
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
        <Card sx={{border: '2px solid red', height: 300}}>
        <Typography variant='h6'>{project.title}</Typography>
        <CardMedia
            component='img'
            height='140'
            image={project.img}
            alt={project.img}
        />
        <CardContent>
            <Typography>{project.description}</Typography>
        </CardContent>
        <Link href={project.link}>
            <Button>Check it out!</Button>
        </Link>
        </Card>
    );
}
