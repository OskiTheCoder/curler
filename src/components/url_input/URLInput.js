import React from 'react';
import TextField from '@mui/material/TextField';
import '../../styles/url_input/styles.scss';

const URLInput = () => {
  return (
    <div className='url-input-container'>
      <TextField fullWidth label='URL' variant='outlined' />
    </div>
  );
};

export default URLInput;
