import React from 'react';
import { Link as MuiLink } from '@mui/material'; // Alias Material-UI Link to avoid conflict
import { Link as RouterLink } from 'react-router-dom'; // Import React Router's Link

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#198754', color: '#F5F5F5', padding: '20px 0' }}>
      <div className="container-xl">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="d-flex flex-wrap justify-content-center gap-2">
              {/* Using RouterLink for internal navigation */}
              <MuiLink component={RouterLink} to="/" style={{ color: '#F5F5F5' }} underline="hover">
                Home
              </MuiLink>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <MuiLink component={RouterLink} to="/privacy-policy" style={{ color: '#F5F5F5' }} underline="hover">
                Privacy Policy
              </MuiLink>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <MuiLink component={RouterLink} to="/linking-policy" style={{ color: '#F5F5F5' }} underline="hover">
                Linking Policy
              </MuiLink>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <MuiLink component={RouterLink} to="/disclaimer-policy" style={{ color: '#F5F5F5' }} underline="hover">
                Disclaimer Policy
              </MuiLink>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <MuiLink component={RouterLink} to="/contact-us" style={{ color: '#F5F5F5' }} underline="hover">
                Contact Us
              </MuiLink>
              <span style={{ color: '#F5F5F5' }}>|</span>
              <MuiLink component={RouterLink} to="/feedback" style={{ color: '#F5F5F5' }} underline="hover">
                Feedback
              </MuiLink>
            </div>
          </div>
          <div className="col-12 mt-2">
            <p className="text-center" style={{ color: '#F5F5F5' }}>
              &copy; {new Date().getFullYear()} www.ataripune.org.in. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
