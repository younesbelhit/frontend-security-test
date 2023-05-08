import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
  return (
    <Helmet>
      <title>React App - {title} !</title>
    </Helmet>
  );
};

export default Head;
