import emailjs from 'emailjs-com'
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';
import WarningModal from './WarningModal';

const formStyles = {
  formPaper: {
    maxWidth: 500,
    border: '2px solid #26c6da',
  },
  inputFormsSX: {
    mx: 3,
    my: 3,
  },
  label: {
    style: {
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      width: '100%',
      color: 'grey',
    },
  },
};

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  const [validEmail, setValidEmail] = useState(true);
  const [openInputModal, setOpenInputModal] = useState(false);

  const handleInputOpen = () => setOpenInputModal(true);
  const handleInputClose = () => setOpenInputModal(false);

  const isValidEmail = (email) => {
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = () => {
    if (name && email && message) {

      if(! isValidEmail(email)){
        setValidEmail(false);
        return;
      }

      const serviceId = 'service_v3u7lkn';
      const templateId = 'template_x2cc5sf';
      const pubKey = 'DqIUDFNQsc8F88Oxv';
      const templateParams = {
          name,
          email,
          message
      };

      emailjs.send(serviceId, templateId, templateParams, pubKey)
          .then(response => console.log(response))
          .catch(error => console.log(error));

      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      handleInputOpen();
    }
  };

  return (
    <Paper
      id='contact-form'
      elevation={6}
      style={formStyles.formPaper}
      sx={{ m: 2 }}
    >
      <Grid container>
        <Grid
          container
          item
          sm={6}
          justifyContent='center'
          alignContent='center'
          direction='column'
        >
          <TextField
            label='Your Name'
            variant='outlined'
            color='secondary'
            InputLabelProps={formStyles.label}
            sx={formStyles.inputFormsSX}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid
          container
          item
          sm={6}
          justifyContent='center'
          alignContent='center'
          direction='column'
        >
          <TextField
            error={!validEmail}
            
            label='Your Email Address'
            variant='outlined'
            color='secondary'
            InputLabelProps={formStyles.label}
            sx={formStyles.inputFormsSX}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid
          container
          item
          sm={12}
          sx={{ mx: 3 }}
          justifyContent='center'
          alignContent='center'
          direction='column'
        >
          <TextField
            id='message'
            label='Your Message'
            variant='outlined'
            color='secondary'
            InputLabelProps={formStyles.label}
            multiline
            rows={8}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Grid>
        <Grid
          container
          item
          sm={12}
          sx={{ mx: 1, my: 2 }}
          justifyContent='center'
          alignContent='center'
          direction='column'
        >
          <Button variant='outlined' onClick={submit}>
            Send Message
          </Button>
        </Grid>
        <Grid
          container
          item
          sm={12}
          sx={{ mx: 1, mb: 2, textAlign: 'center' }}
          justifyContent='center'
          alignContent='center'
          direction='column'
        >
          <Typography>
            {emailSent ? 'Thank you for your message, I will be in touch!' : ''}
          </Typography>
        </Grid>
      </Grid>
      <WarningModal openModal={openInputModal} handleClose={handleInputClose} text='Please fill in all fields.'/>
    </Paper>
  );
};

export default Contact;
