import emailjs from 'emailjs-com';
import { TextField, Button, Paper, Typography, Grid } from '@mui/material';
import React, { useState } from 'react';

import WarningModal from './WarningModal';
import env from 'react-dotenv';

const formStyles = {
  formPaper: {
    maxWidth: 500,
    border: '3px solid #26c6da',
    m: { xs: 1, md: 5 },
    mt: '500px',
    p: 3,
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
  buttonStyle: {
    color: 'text.secondary',
    transition: 'transform 0.15s ease-in-out',
    '&:hover': { transform: 'scale3d(1.1, 1.1, 1)' },
    fontWeight: 'bold'
  },
};

const ContactForm = () => {
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
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(String(email).toLowerCase());
  };

  const submit = () => {
    // check that all input fields are filled in
    if (name && email && message) {
      // check for valid email
      if (!isValidEmail(email)) {
        setValidEmail(false);
        return;
      } else {
        setValidEmail(true);
      }

      // Set parameters for email
      const templateParams = {
        name,
        email,
        message,
      };

      // Send email with message
      emailjs
        .send(env.SERVICE_ID, env.TEMPLATE_ID, templateParams, env.PUB_KEY)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));

      // Reset state
      setName('');
      setEmail('');
      setMessage('');
      setEmailSent(true);
    } else {
      // Open warning model if all inputs are not filled out.
      handleInputOpen();
    }
  };

  return (
    <Paper id='contact-form' elevation={12} sx={formStyles.formPaper}>
      <Grid container>
        <Grid container sx={{ mx: 3 }}>
          <Grid
            sx={{ pr: { sm: 1 } }}
            container
            item
            sm={6}
            justifyContent='center'
            alignContent='center'
            direction='column'
          >
            <TextField
              fullWidth
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
            sx={{ pl: { sm: 1 } }}
            container
            item
            sm={6}
            justifyContent='center'
            alignContent='center'
            direction='column'
          >
            <TextField
              fullWidth
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
        </Grid>
        <Grid
          container
          item
          sm={12}
          sx={{ mx: 3, my: 3 }}
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
          sx={{ mx: 3, my: 2 }}
          justifyContent='end'
          alignContent='end'
          direction='column'
        >
          <Button variant='contained' sx={formStyles.buttonStyle} onClick={submit}>
            Send Message
          </Button>
        </Grid>
        <Grid
          container
          item
          sm={12}
          sx={{ mx: 1, mb: 1, mt: 2, textAlign: 'center' }}
          justifyContent='center'
          alignContent='center'
          direction='column'
        >
          <Typography>
            {emailSent ? 'Thank you for your message, I will be in touch!' : ''}
          </Typography>
        </Grid>
      </Grid>
      <WarningModal
        openModal={openInputModal}
        handleClose={handleInputClose}
        text='Please fill in all fields.'
      />
    </Paper>
  );
};

export default ContactForm;
