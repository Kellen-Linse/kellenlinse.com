import { React } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { useWindowWidth } from '@wojtekmaj/react-hooks';
import {Box, Button, Grid, Modal,  } from '@mui/material';
import pdf from '../Resume.pdf';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function PDFModal({open, handleClose}) {
  
  function adjustWidth(width){
    let adjWidth;

    if(width < 500){
      adjWidth = 350;
    } else if (width < 650){
      adjWidth = 500;
    } else if (width < 800){
      adjWidth = 600;
    } else {
      adjWidth = 700;
    }
    
    return adjWidth;
  }

  const width = adjustWidth(useWindowWidth());

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <Document
            file={pdf}
          >
            <Page renderMode='svg' renderAnnotationLayer={false} width={width} pageNumber={1}/>
          </Document>
        <Grid container item xs={12} justifyContent="end">
        <Button variant='outlined' sx={{mt: 2, mr: 2}} onClick={()=> handleClose()}>Close</Button>
        </Grid>
        </Box>
      </Modal>
  );
}
