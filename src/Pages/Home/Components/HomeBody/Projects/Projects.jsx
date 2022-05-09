import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';
import ProjectCard from './Components/ProjectCard';

//Import Project info
import projectInfo from '../projectInfo/projectInfo.js';

const styles = {
  imgPaper: {
    backgroundColor: 'secondary.main',
  },
};


function Projects() {
  return (
    <Paper id='projects' elevation={0} style={styles.imgPaper}>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 3 }}>
          <Title title='<Projects />' txtColor='secondary.main'/>
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
          {projectInfo.map((card) => {
            return (
              <Grid
                item
                container
                justifyContent='center'
                alignContent='center'
                xs={12}
                md={6}
                lg={4}
                key={card.title}
              >
                <ProjectCard
                  card={card}
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
