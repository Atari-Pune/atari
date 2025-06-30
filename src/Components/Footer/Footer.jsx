import React from 'react';
import { Link } from '@mui/material';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#2E7D32', color: '#F5F5F5', padding: '20px 0' }}>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              <Link href="#" style={{ color: '#F5F5F5' }} underline="hover">
                Home
              </Link>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <Link href="#" style={{ color: '#F5F5F5' }} underline="hover">
                Privacy Policy
              </Link>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <Link href="#" style={{ color: '#F5F5F5' }} underline="hover">
                Linking Policy
              </Link>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <Link href="#" style={{ color: '#F5F5F5' }} underline="hover">
                Disclaimer Policy
              </Link>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <Link href="Contact.html" style={{ color: '#F5F5F5' }} underline="hover">
                Contact Us
              </Link>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <Link href="#" style={{ color: '#F5F5F5' }} underline="hover">
                Feedback
              </Link>
            </div>
          </div>
          <div className="col-12 mt-2">
            <p className="text-center" style={{ color: '#F5F5F5' }}>
              &copy; {new Date().getFullYear()} www.ataripune.icar.gov.in. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
