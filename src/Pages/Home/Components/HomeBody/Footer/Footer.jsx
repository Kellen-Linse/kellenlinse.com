import { Link as ScrollLink } from 'react-scroll';
import { Paper, Grid, Typography, IconButton, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  const paperStyles = {
    bgPaper: {
      height: 230,
      color: 'white',
      backgroundColor: 'black',
      display: 'flex',
    },
    upPaper: {
      width: 80,
      height: 50,
      display: 'flex',
      position: 'relative',
      top: '-35px',
      backgroundColor: '#26c6da',
    },
    iconPaper: {
      width: 80,
      height: 80,
      display: 'flex',
      backgroundColor: '#26c6da',
      mx: 1,
    },
  };

  return (
    <>
      <Grid container>
        <Grid
          container
          item
          justifyContent='center'
          alignItems='start'
          sx={{ pt: 1, height: '0' }}
        >
          <ScrollLink to='top' spy={true} smooth={true}>
            <Paper sx={paperStyles.upPaper}>
              <Grid container item justifyContent='center' alignItems='center'>
                <ArrowUpwardIcon fontSize='large' />
              </Grid>
            </Paper>
          </ScrollLink>
        </Grid>
        <Grid
          container
          item
          justifyContent='center'
          alignItems='start'
          sx={{ pt: 2 }}
        >
          <Paper sx={paperStyles.iconPaper}>
            <Grid container item justifyContent='center' alignItems='center'>
              <Link href='https://www.linkedin.com/in/kellen-linse/'>
                <IconButton color='iconColor'>
                  <LinkedInIcon fontSize='large' />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
          <Paper sx={paperStyles.iconPaper}>
            <Grid container item justifyContent='center' alignItems='center'>
              <Link href='https://github.com/Kellen-Linse'>
                <IconButton color='iconColor'>
                  <GitHubIcon fontSize='large' />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
          <Paper sx={paperStyles.iconPaper}>
            <Grid container item justifyContent='center' alignItems='center'>
              <Link href='https://mailto:kellen.linse@gmail.com'>
                <IconButton color='iconColor'>
                  <MailOutlineIcon fontSize='large' />
                </IconButton>
              </Link>
            </Grid>
          </Paper>
        </Grid>
        <Grid container>
          <Grid
            item
            container
            xs={12}
            justifyContent='center'
            alignItems='center'
          >
            <Typography color='white' sx={{mb: 4, mt: 3}}>Made by Kellen Linse &copy; 2022</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
