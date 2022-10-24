import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ContentType = () => {
  return (
    <div>
      <div>
        <span>Content Type</span>
      </div>
      <div>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label='application/json'
        />
      </div>
    </div>
  );
};

export default ContentType;
