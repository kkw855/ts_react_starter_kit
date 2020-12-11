import React from 'react';
import smileyImage from '../../../assets/images/smiley.gif';

const Links: React.FC = () => {
  return (
    <>
      <a href="https://www.google.com/" target="_blank" rel="noreferrer">
        <img src={smileyImage} alt="smile" />
      </a>
    </>
  );
};

export default Links;
