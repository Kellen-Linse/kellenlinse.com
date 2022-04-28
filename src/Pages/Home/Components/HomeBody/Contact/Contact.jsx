import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';

const styles = {
  imgPaper: {
    height: 500,
  },
};

function Contact() {
  return (
    <Paper id='contact' elevation={0} style={styles.imgPaper}>

      <Grid container>
        <Grid item xs={12}>
          <Title title='Contact' />
        </Grid>
      </Grid>
      <div style={{ color: 'white' }}>
        
        {/* <h1>This is About section</h1> */}
        To Do: resize the background image...
      </div>
    </Paper>
  );
}

export default Contact;
