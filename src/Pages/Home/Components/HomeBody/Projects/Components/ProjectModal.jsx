import { Button, Stack, Box, Typography, Modal, Divider } from '@mui/material';
import ProjectCarousel from './ProjectCarousel';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', lg: '50%' },
  height: { xs: '90%', lg: '60%' },
  bgcolor: 'background.paper',
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
          justifyContent='space-around'
          alignItems='stretch'
        >
       <Box >
       <Typography
            variant='h7'
            component='h2'
            sx={{color: 'primary.main', mb: 1 }}
          >
            {card.title}
          </Typography>
          <Divider />
       </Box>
          <ProjectCarousel projects={card.projects} />
          <Box display='flex' justifyContent='flex-end'>
          <Button sx={{width: 100, fontSize:'1.1em'}} onClick={() => handleClose()}>
            Close
          </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  );
}
