import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';
import ProjectCard from './Components/ProjectCard';

// Import images
import webDevImg from '../images/birb.jpg';
import IoTImg from '../images/circuit_board_cropped.jpg';
import artImg from '../images/artImg.JPG';

const styles = {
  imgPaper: {
    backgroundColor: 'secondary.main',
  },
};

let cardInfo = [
  {
    title: 'Web and Mobile Development',
    desc: 'Full Stack and Mobile App Development Projects',
    img: webDevImg,
  },
  {
    title: 'IoT',
    desc: 'Internet of Things and Embedded Systems Projects',
    img: IoTImg,
  },
  {
    title: 'Visual Art',
    desc: 'Visual and Interactive Arts Projects',
    img: artImg,
  },
];

function Projects() {
  return (
    <Paper id='projects' elevation={0} style={styles.imgPaper}>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Title title='Projects' />
        </Grid>
        <Grid
          item
          container
          justifyContent='center'
          alignContent='center'
          sx={{ mb: 4, mt: 2 }}
          spacing={3}
          xs={12}
        >
          {cardInfo.map((card) => {
            return (
              <Grid
                item
                container
                justifyContent='center'
                alignContent='center'
                xs={12}
                md={6}
                lg={4}
              >
                <ProjectCard
                  title={card.title}
                  desc={card.desc}
                  img={card.img}
                ></ProjectCard>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Projects;
