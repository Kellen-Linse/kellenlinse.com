import { Link as ScrollLink } from 'react-scroll';
import { Paper, Grid, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const paperStyles = {
  upPaper: {
    width: 80,
    height: 50,
    display: 'flex',
    position: 'relative',
    top: '-35px',
    backgroundColor: 'primary.main',
    transition: "transform 0.15s ease-in-out",
    "&:hover": { transform: "scale3d(1.1, 1.1, 1)" },
  },
};

function Footer() {
  return (
    <Grid container sx={{height: '230px' }}>
      <Grid
        container
        item
        justifyContent='center'
        alignItems='start'
        sx={{ pt: 1}}
      >
        <ScrollLink to='top' spy={true} smooth={true}>
          <Paper sx={paperStyles.upPaper} elevation={12}>
            <Grid container item justifyContent='center' alignItems='center'>
              <ArrowUpwardIcon fontSize='large' />
            </Grid>
          </Paper>
        </ScrollLink>
      </Grid>
      <Grid container>
        <Grid
          item
          container
          xs={12}
          justifyContent='center'
          alignItems='center'
        >
          <Typography variant='h5' color='white' sx={{ mb: 4, mt: 3 }}>
            Made by Kellen Linse &copy; 2022
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
