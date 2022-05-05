import { Button, Grid, Paper, Box, Typography, Modal } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  height: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 1,
  pb: 4,
  pl: 4,
  pr: 4,
  textAlign: 'center',
};

export default function ProjectModal({ open, handleClose, card }) {
  return (
    <Modal open={open} onClose={handleClose} card={card}>
      <Box sx={style}>
        <Grid container sx={{height: 465}}>
          <Grid
          container
            direction='column'
            justifyContent='space-between'
            alignItems='center'
          >
            <Grid>

            <Typography variant='h6' component='h2'>
              {card.title}
            </Typography>
            </Grid>
            <Grid>

            <Paper sx={{ bgcolor: 'red', height: 200}}></Paper>
            </Grid>
            <Grid>

            <Button variant='contained' onClick={() => handleClose()}>
              Close
            </Button>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
