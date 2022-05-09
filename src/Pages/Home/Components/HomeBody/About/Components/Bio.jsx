import { Paper, Typography } from '@mui/material';

const styles = {
  infoPaper: {
    textAlign: 'center',
    border: '5px solid #00e676',
    maxWidth: '75%',
    minHeight: '300px',
    textAlign: 'start'
  }
}


function Bio() {
  return (
    <Paper sx={{ m: 4 }} style={styles.infoPaper}>
      <Typography variant='h5' sx={{ m: 4 }}>
        Hi! My name is Kellen Linse.
      </Typography>
      <Typography variant='h5' sx={{ m: 4 }}>
        I am a Seattle based IoT and Full Stack
        Software Developer and an interactive / visual artist. My growth mindset
        and constant curiosity have led me to develop a multitude of skills
        across several disciplines, including low voltage and vehicle
        electronics, programming and software development, basic CAD design, 3D
        printing, circuit board design, and product design.
      </Typography>
    </Paper>
  );
}

export default Bio;
