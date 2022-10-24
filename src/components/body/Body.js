import React from 'react';
import TextField from '@mui/material/TextField';

const Body = () => {
  return (
    <div className='body-container'>
      <TextField
        id='standard-multiline-flexible'
        label='Body'
        fullWidth
        multiline
        rows={8}
      />
    </div>
  );
};

export default Body;
