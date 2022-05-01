import { React, useState } from 'react';
import { Card, CardActions, CardMedia, Button } from '@mui/material';
import resImg from '../../images/res.JPG';
import PDF_Modal from './PDF_Modal';

export default function ResumeCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card raised sx={{ maxWidth: 350, border: '2px solid #00e676' }}>
      <CardMedia
        sx={{ borderBottom: '3px solid #00e676' }}
        component='img'
        alt='resume image'
        height='200'
        image={resImg}
      />
      <CardActions sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
        <Button onClick={() => handleOpen()} variant='outlined'>View</Button>
        <Button variant='outlined'>Download</Button>
      </CardActions>
      <PDF_Modal open={open} handleClose={handleClose} />
    </Card>
  );
}
