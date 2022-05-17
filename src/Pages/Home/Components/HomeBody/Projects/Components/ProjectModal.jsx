import { Button, Stack, Box, Typography, Modal, Divider } from '@mui/material';
import ProjectCarousel from './ProjectCarousel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: '70%', md: '50%', xl: '40%' },
  height: { xs: '87%', sm: '70%', md: '70%', xl: '78%' },
  backgroundColor: '#424242',
  border: '2px solid #000',
  boxShadow: 24,
  textAlign: 'center',
};

export default function ProjectModal({ open, handleClose, card }) {
  return (
    <Modal open={open} onClose={handleClose} card={card}>
      <Box sx={style}>
        <Stack
          height={'100%'}
          direction='column'
          justifyContent='space-between'
          alignItems='stretch'
        >
          <Box>
            <Typography
              variant='h7'
              component='h3'
              sx={{ color: 'secondary.main', my: 1, fontSize: {md: '1.2em'} }}
            >
              {card.title}
            </Typography>
            <Divider />
          </Box>
          <Box sx={{ flexGrow: 1, height: '100%', overflow: 'auto'}}>
            <ProjectCarousel projects={card.projects} />
          </Box>
            <Divider />
          <Box display='flex' justifyContent='flex-end'>
            <Button
              sx={{ width: 100, fontSize: '1.1em', color: 'secondary.main' }}
              onClick={() => handleClose()}
            >
              Close
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}
