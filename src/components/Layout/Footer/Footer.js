import React from 'react';

function Footer () {
  return(
    // The footer component
    <footer className="Footer">
      
      {/* Links to social media pages */}
      <div className="Footer__links">
        <a href="https://www.instagram.com/?hl=en" alt="instagram link" aria-label="Visit our social media page on Instagram"><i className="fab fa-instagram"></i></a>
        <a href="https://www.facebook.com/" alt="facebook link" aria-label="Visit our social media page on Facebook"><i className="fab fa-facebook-f"></i></a>
        <a href="https://twitter.com/?lang=en" alt="twitter link" aria-label="Visit our social media page on Twitter"><i className="fab fa-twitter"></i></a>
      </div>

      {/* Company name and copyright */}
      <div className="Footer__copyright">
        <p  className="Footer__highlightText" >POP Shop</p>
        <p className="Footer__text">&copy; Copyright 2023 POP Shop Inc.
        </p>
        <p className="Footer__text">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
