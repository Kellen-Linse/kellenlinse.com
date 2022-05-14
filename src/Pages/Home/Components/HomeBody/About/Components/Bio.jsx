import { Box, Paper, Typography } from '@mui/material';

const styles = {
  infoPaper: {
    border: '5px solid #00e676',
    maxWidth: '75%',
    minHeight: '300px',
    textAlign: 'start',
    m: 4,
    mt: 8,
  },
};

function Bio() {
  return (
    <Box justifyContent='center' alignContent='center' display='flex'>
      <Paper sx={styles.infoPaper}>
        <Typography variant='h5' sx={{ m: 4 }}>
          Hi! My name is Kellen Linse.
        </Typography>
        <Typography variant='h5' sx={{ m: 4 }}>
          I am a Seattle based Software Developer with a focus in IoT and Full
          Stack development. I am also a interactive and visual artist. My
          growth mindset and constant curiosity have led me to develop a
          multitude of skills across several disciplines, including low voltage
          and vehicle electronics, programming and software development, basic
          CAD design, 3D printing, circuit board design, and product design.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Bio;
