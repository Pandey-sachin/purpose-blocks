import React from 'react';
import Timer from './Timer';
import Hint from './Hint';

const Footer = () => {
  return (
    <footer className="footer">
      <Hint/>
      <Timer/>
    </footer>
  );
};

export default Footer;