import React from 'react';
import ButtonGroup from '../button_group/ButtonGroup';
import URLInput from '../url_input/URLInput';
import Body from '../body/Body';
import ContentType from '../content_type/ContentType';
import Command from '../command/Command';
import '../../styles/curl_form/styles.scss';
import Generate from '../generate/Generate';

const CurlForm = () => {
  const [method, setMethod] = React.useState('GET');
  const [url, setUrl] = React.useState('');
  const [body, setBody] = React.useState('');
  const [command, setCommand] = React.useState('curl');

  const handleMethodSelection = (method) => setMethod(method);

  return (
    <div className='curlform-container'>
      <ButtonGroup handleMethodSelection={handleMethodSelection} />
      <URLInput />
      <Body />
      <ContentType />
      <Generate />
      <Command />
    </div>
  );
};

export default CurlForm;
