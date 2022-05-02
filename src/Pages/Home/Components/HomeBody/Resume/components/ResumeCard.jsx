import { React, useState } from 'react';
import { saveAs } from "file-saver";
import { Card, CardActions, CardMedia, Button } from '@mui/material';
import resImg from '../../images/res.JPG';
import PDFModal from './PDFModal';
import resPDF from '../Resume.pdf'

export default function ResumeCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveFile = () => {
    saveAs(
      resPDF,
      "Kellen_Linse_Resume.pdf"
    );
  };

  return (
    <Card raised sx={{ mt: 3, maxWidth: {xs: 350, md: 500}, border: '2px solid #00e676' }}>
      <CardMedia
        sx={{ borderBottom: '3px solid #00e676' }}
        component='img'
        alt='resume image'
        height='200'
        image={resImg}
      />
      <CardActions sx={{ display: 'flex', justifyContent: 'end', p: 2 }}>
        <Button onClick={() => handleOpen()} variant='contained' sx={{color: 'text.secondary'}}>View</Button>
        <Button onClick={() => saveFile()} variant='contained' sx={{color: 'text.secondary'}}>Download</Button>
      </CardActions>
      <PDFModal open={open} handleClose={handleClose} />
    </Card>
  );
}
