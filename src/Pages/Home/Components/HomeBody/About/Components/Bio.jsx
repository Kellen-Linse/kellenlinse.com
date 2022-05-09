import { Paper, Typography } from '@mui/material';

const styles = {
  infoPaper: {
    textAlign: 'center',
    borderRadius: '20%',
    border: '5px solid #00e676',
    maxWidth: '400px',
  }
}


function Bio() {
  return (
    <Paper sx={{ m: 4 }} style={styles.infoPaper}>
      <Typography sx={{ m: 4 }}>
        Hi! My name is Kellen Linse. I'm a Seattle based IoT and Full Stack
        Software Developer and an interactive visual artist. My growth mindset
        and constant curiosity have led me to develop a multitude of skills
        across several disciplines, including low voltage and vehicle
        electronics, programming and software development, basic CAD design, 3D
        printing, circuit board design, and product design.
      </Typography>
    </Paper>
  );
}

export default Bio;
