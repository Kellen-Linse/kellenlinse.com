import { Grid, Paper } from '@mui/material';
import Title from '../../Shared_Components/Title';
import ContactForm from './Components/ContactForm';

const styles = {
  imgPaper: {
    pb: 5,
    pt: 2, 
    height: {sm: '1000px'}
  },
};

function Contact() {
  return (
    <Paper id='contact' elevation={0} sx={styles.imgPaper}>
      <Grid container>
        <Grid item xs={12}>
          <Title title='Contact' />
        </Grid>
        <Grid item container justifyContent='center' alignContent='center' xs={12} sx={{my: 5}}>
          <ContactForm />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Contact;
