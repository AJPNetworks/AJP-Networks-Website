import React from 'react';

function Footer() {
  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; {new Date().getFullYear()} AJP Networks LLC | All rights reserved.</p>
    </footer>
  );
}

const footerStyle = {
  backgroundColor: '#111',
  padding: '20px',
  textAlign: 'center',
};

export default Footer;
