import React from 'react';
import Button from '@mui/material/Button';
import '../../styles/button_group/styles.scss';

const ButtonGroup = ({ handleMethodSelection }) => {
  return (
    <div>
      <div className='button-group-label'>
        <span>HTTP Method</span>
      </div>
      <div className='button-group-container'>
        <Button
          variant='contained'
          size='large'
          onClick={() => handleMethodSelection('GET')}
        >
          GET
        </Button>
        <Button
          variant='contained'
          size='large'
          onClick={() => handleMethodSelection('POST')}
        >
          POST
        </Button>
        <Button
          variant='contained'
          size='large'
          onClick={() => handleMethodSelection('PUT')}
        >
          PUT
        </Button>
        <Button
          variant='contained'
          size='large'
          onClick={() => handleMethodSelection('PATCH')}
        >
          PATCH
        </Button>
        <Button
          variant='contained'
          size='large'
          onClick={() => handleMethodSelection('DELETE')}
        >
          DELETE
        </Button>
      </div>
    </div>
  );
};

export default ButtonGroup;
