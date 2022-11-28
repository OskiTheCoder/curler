import React from 'react';
import TextField from '@mui/material/TextField';
import '../../styles/url_input/styles.scss';

const URLInput = () => {
  return (
    <div className='url-input-container'>
      <TextField
        fullWidth
        label='URL'
        variant='outlined'
        onChange={(e) => console.log(e.target.value)}
      />
    </div>
  );
};

export default URLInput;
