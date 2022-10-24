import React from 'react';
import ButtonGroup from '../button_group/ButtonGroup';
import URLInput from '../url_input/URLInput';
import Body from '../body/Body';
import ContentType from '../content_type/ContentType';
import '../../styles/curl_form/styles.scss';
import Generate from '../generate/Generate';

const CurlForm = () => {
  return (
    <div className='curlform-container'>
      <ButtonGroup />
      <URLInput />
      <Body />
      <ContentType />
      <Generate />
    </div>
  );
};

export default CurlForm;
