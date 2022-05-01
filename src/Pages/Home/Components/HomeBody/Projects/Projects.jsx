import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';
import ProjectCard from './Components/ProjectCard';

// Import images
import webDevImg from '../images/birb.jpg';
import IoTImg from '../images/circuit_board_cropped.jpg';
import artImg from '../images/artImg.JPG';

const styles = {
  imgPaper: {
    backgroundColor: "secondary.main"
  },
};

let cardInfo = [
  {
    title: 'Web Development',
    desc: 'Description here!',
    img: webDevImg
  },
  {
    title: 'IoT',
    desc: 'Description here!',
    img: IoTImg
  },
  {
    title: 'Visual Art',
    desc: 'Description here!',
    img: artImg
  }
]

function Projects() {
  return (
    <Paper id='projects' elevation={0} style={styles.imgPaper}>

      <Grid container>
        <Grid item xs={12} sx={{mt: 3}}>
          <Title title='Projects' />
        </Grid>
        <Grid item container justifyContent='center' alignContent='center' sx={{mb: 4, mt: 2}} spacing={3} xs={12}>
          <Grid item container justifyContent='center' alignContent='center' xs={12} md={6} lg={4}>
            <ProjectCard title={cardInfo[0].title} desc={cardInfo[0].desc} img={cardInfo[0].img}></ProjectCard>
          </Grid>
          <Grid item container justifyContent='center' alignContent='center' xs={12} md={6} lg={4}>
          <ProjectCard title={cardInfo[1].title} desc={cardInfo[1].desc} img={cardInfo[1].img}></ProjectCard>
          </Grid>
          <Grid item container justifyContent='center' alignContent='center' xs={12} md={6} lg={4}>
          <ProjectCard title={cardInfo[2].title} desc={cardInfo[2].desc} img={cardInfo[2].img}></ProjectCard>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Projects;
