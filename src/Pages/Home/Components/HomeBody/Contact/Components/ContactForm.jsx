import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import React, { useState } from 'react'

const formStyles = {
  formPaper: {
    maxWidth: 500,
    border: '2px solid #26c6da',
  }, 
  inputFormsSX: {
    mx: 3,
    my: 3, 
  },
  label: {style: {
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
        color: 'grey'
      } }
}

const Contact = () => {

  
    return (
        <Paper id="contact-form" elevation={6} style={formStyles.formPaper} sx={{m:2}}>
          <Grid container >
            <Grid container item sm={6} justifyContent='center' alignContent='center' direction='column'>
            <TextField id="name" label="Your Name" variant="outlined" color='secondary' InputLabelProps={formStyles.label} sx={formStyles.inputFormsSX} />
            </Grid>
            <Grid container item sm={6} justifyContent='center' alignContent='center' direction='column'>
            <TextField id="email" label="Your Email Address" variant="outlined" color="secondary" InputLabelProps={formStyles.label}  sx={formStyles.inputFormsSX}/>
            </Grid>
            <Grid container item sm={12} sx={{mx: 3}} justifyContent='center' alignContent='center' direction='column'>
            <TextField id="message" label="Your Message" variant="outlined" color="secondary" InputLabelProps={formStyles.label} multiline rows={8} fullWidth/>
            </Grid>
            <Grid container item sm={12} sx={{mx: 1, my: 2}} justifyContent='center' alignContent='center' direction='column'>
            <Button variant="outlined" >Send Message</Button>
            </Grid>
            <Grid container item sm={12} sx={{mx: 1, mb: 2, textAlign: 'center'}} justifyContent='center' alignContent='center' direction='column'>
            <Typography>Thank you for your message, I will be in touch!</Typography>
            </Grid>
          </Grid> 
        </Paper>
    );
};

export default Contact;