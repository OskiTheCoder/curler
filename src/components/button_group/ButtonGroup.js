import React from 'react';
import Button from '@mui/material/Button';
import '../../styles/button_group/styles.scss';

const ButtonGroup = () => {
  return (
    <div>
      <div className='button-group-label'>
        <span>HTTP Method</span>
      </div>
      <div className='button-group-container'>
        <Button variant='contained' size='large'>
          GET
        </Button>
        <Button variant='contained' size='large'>
          POST
        </Button>
        <Button variant='contained' size='large'>
          PUT
        </Button>
        <Button variant='contained' size='large'>
          PATCH
        </Button>
        <Button variant='contained' size='large'>
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
