import { Box, Paper, Typography } from '@mui/material';

const styles = {
  infoPaper: {
    backgroundColor: 'rgba(0, 0, 0, .3)',
    maxWidth: '80%',
    minHeight: '300px',
    textAlign: 'center',
    m: 4,
    mt: 8,
    color: 'white',
  },
};

function Bio() {
  return (
    <Box justifyContent='center' alignContent='center' display='flex'>
      <Paper sx={styles.infoPaper}>

        <Typography variant='h4' sx={{ m: 4 }}>
          Hello, my name is Kellen.
        </Typography>

        <Typography variant='h5' sx={{ m: 4 }}>
          I am a Seattle based Software Developer, visual artist, and maker. My expertise and interests
          lie at the edge of the digital and the physical; in IoT and full stack
          software development and in interactive visual art.
        </Typography>

        <Typography variant='h5' sx={{ m: 4 }}>
          My growth mindset and constant curiosity have led me to develop a
          multitude of skills across several disciplines, including low voltage
          and vehicle electronics, basic CAD design, 3D printing, circuit board
          design, product design, and software development.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Bio;
