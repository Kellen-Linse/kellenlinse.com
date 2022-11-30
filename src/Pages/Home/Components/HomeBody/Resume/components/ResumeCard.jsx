import { React, useState } from 'react';
import { saveAs } from 'file-saver';
import { Card, CardActions, CardMedia, Button } from '@mui/material';
import resImg from '../../../../../../images/res.JPG';
import PDFModal from './PDFModal';
import resPDF from '../Resume-p.pdf';

export default function ResumeCard() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const saveFile = () => {
    saveAs(resPDF, 'Kellen_Linse_Resume.pdf');
  };

  return (
    <Card
      raised
      sx={{
        my: { xs: 8, md: 14 },
        height: '400px',
        maxWidth: { xs: 350, md: 600, lg: 800 },
        border: '3px solid #00e676',
      }}
    >
      <CardMedia
        sx={{ borderBottom: '3px solid #00e676' }}
        component='img'
        alt='resume image'
        height='300'
        image={resImg}
      />
      <CardActions sx={{ display: 'flex', justifyContent: 'end', p: 2, mt: 2 }}>
        <Button
          onClick={() => handleOpen()}
          variant='contained'
          size='large'
          sx={{ color: 'text.secondary' }}
        >
          View
        </Button>
        <Button
          onClick={() => saveFile()}
          variant='contained'
          size='large'
          sx={{ color: 'text.secondary' }}
        >
          Download
        </Button>
      </CardActions>
      <PDFModal open={open} handleClose={handleClose} />
    </Card>
  );
}
