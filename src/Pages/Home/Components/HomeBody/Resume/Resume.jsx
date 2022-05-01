import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';
import ResumeCard from './components/ResumeCard';

const styles = {
  imgPaper: {
    height: 500,
    backgroundColor: '#26C6DA'
  },
};

function Resume() {

  return (
    <Paper id='resume' elevation={0} style={styles.imgPaper}>

      <Grid container>
        <Grid item xs={12}>
          <Title title='Resume' />
        </Grid>
        <Grid item container justifyContent='center' alignContent='center' xs={12}>
        <ResumeCard />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Resume;
