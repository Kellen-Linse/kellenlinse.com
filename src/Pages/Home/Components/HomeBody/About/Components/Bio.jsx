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
          Hello, my name is {' '}
          <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
              fontSize: '1.2em'
            }}
          >
            Kellen
          </span>
          .
        </Typography>

        <Typography variant='h4' sx={{ m: 4 }}>
          I am a Seattle based           <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
            }}
          >
            software developer
          </span>, <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
            }}
          >
           visual artist
          </span>, and <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
            }}
          >
           maker
          </span>.
        </Typography>

        <Typography variant='h5' sx={{ m: 2 }}>
          My expertise and interests lie at the edge of the <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
            }}
          >
           digital
          </span> and the {' '}
          <span
            style={{
              color: '#26c6da',
              fontWeight: 'bold',
            }}
          >
           physical
          </span>; in IoT and full stack software development, in interactive
          visual art, and product development.
        </Typography>

        <Typography variant='h5' sx={{ m: 2 }}>
          My growth mindset, constant curiosity, and drive to create have led me to develop a
          multitude of skills across several disciplines, including low voltage
          and vehicle electronics, basic CAD design, 3D printing, circuit board
          design, product design, and software development.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Bio;
