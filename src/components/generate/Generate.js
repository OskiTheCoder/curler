import Button from '@mui/material/Button';
import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Generate = () => {
  return (
    <div>
      <Button
        variant='contained'
        size='large'
        color='secondary'
        endIcon={<CheckCircleIcon />}
      >
        Generate!
      </Button>
    </div>
  );
};

export default Generate;
