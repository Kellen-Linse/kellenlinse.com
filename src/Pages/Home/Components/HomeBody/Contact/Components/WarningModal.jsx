import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import {Divider} from '@mui/material'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  py: 2,
  px: 4,
  textAlign: 'center'
};

export default function WarningModal({ openModal, handleClose, text }) {
  return (
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
        sx={{p:0}}
      >
        <Box sx={style} >
          <Typography id='modal-modal-description' sx={{ mt: 2 }}>
            {text}
          </Typography>
          <Divider />
            <Grid
              item
              container
              xs={12}
              justifyContent='center'
              alignContent='center'
              direction='column'
            >
              <Button onClick={handleClose} sx={{mt: 2}} size='large' variant="outlined" color="secondary">OK</Button>
            </Grid>
        </Box>
      </Modal>
  );
}
