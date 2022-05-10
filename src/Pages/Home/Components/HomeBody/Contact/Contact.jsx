import { Paper, Grid, IconButton, Link } from '@mui/material';
import Title from '../../Shared_Components/Title';
import ContactForm from './Components/ContactForm';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const styles = {
  imgPaper: {
    pb: 5,
    pt: 2, 
    height: {sm: '1000px'}
  },
  iconPaper: {
    width: 80,
    height: 80,
    display: 'flex',
    backgroundColor: 'primary.main',
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
    m: 4,
  }
};

function Contact() {
  return (
    <Paper id='contact' elevation={0} sx={styles.imgPaper}>
      <Grid container>
        <Grid item xs={12}>
          <Title title='<Contact />' txtColor='secondary.main'/>
        </Grid>
        <Grid item container justifyContent='center' alignContent='center' xs={12} sx={{my: 5}}>
          <ContactForm />
          <Grid
          container
          item
          justifyContent='center'
          alignItems='start'
          sx={{ mt: 4 }}
        >
          <Paper sx={styles.iconPaper} elevation={12}>
            <Grid container item justifyContent='center' alignItems='center'>
              <Link href='https://www.linkedin.com/in/kellen-linse/'>
                <IconButton color='iconColor'>
                  <LinkedInIcon fontSize='large' />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
          <Paper sx={styles.iconPaper} elevation={12}>
            <Grid container item justifyContent='center' alignItems='center'>
              <Link href='https://github.com/Kellen-Linse'>
                <IconButton color='iconColor'>
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
          <Paper sx={styles.iconPaper} elevation={12}>
            <Grid container item justifyContent='center' alignItems='center'>
              <Link href='https://mailto:kellen.linse@gmail.com'>
                <IconButton color='iconColor'>
                  <MailOutlineIcon fontSize='large' />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
        </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Contact;
