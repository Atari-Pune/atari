import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import "./ContactInfo.css";

const contact_wrapper= {
      background: "white",
      borderRadius: "20px",
      overflow: "hidden",
      color:"green",
      // boxShadow: "0 5px 30px rgba(0,0,0,0.1)"
    }



    
/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */

const HowToReachUs = () => {
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        {/* Removed the hardcoded Typography for "How to Reach Us" as Commonpage handles the title */}
        {/* <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#44ea57ff' }}>
          <Typography variant="body1" color="text.secondary"> */}
           <div className="container"  >
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div className='contact-wrapper'>
          <div class="row g-0">
            <div class="col-md-5" >
              <div class="contact-info h-100" >
                <h3 class="mb-4">Reach Us</h3>
                

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  
                  <div>
                    <h6 class="mb-0">Address</h6>
                    <p class="mb-0">Indian Council of Agricultural Research	Agricultural Technology Application Research Institute (ATARI)                                         
Zone VIII, Pune College of Agriculture Campus, Shivajinagar, Pune - 411005
</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div>
                    <h6 class="mb-0">Phone</h6>
                    <p class="mb-0">020-25535665 (Director’s Office), 	020-25535660, (Admin Office)</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div class="contact-icon">
                    <i class="fas fa-envelope"></i>
                  </div>
                  <div>
                    <h6 class="mb-0">Email</h6>
                    <p class="mb-0">atari.pune@icar.gov.in  </p>
                  </div>
                </div>
                

                  

                <div className="social-links">
                  <h6 class="mb-3">Follow Us</h6>
                  <a href="https://www.facebook.com/profile.php" className="social-icon"><i class="fab fa-facebook-f"></i></a>
                  <a href="https://x.com/ATARI_Pune" className="social-icon"><i class="fab fa-twitter"></i></a>
                  <a href=" https://youtube.com/@icar-ataripune2107?si=2ZbtIiFs0ba94xDl" className="social-icon"><i class="fab fa-youtube"></i></a>
                  <a href="#" className="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
            
            <div class="col-md-7">
          
                    {/* <!-- Google Map iframe --> */}
                    {/* <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.6088242523726!2d-73.9854284845936!3d40.74881797932754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259ab2d2b70b1%3A0xd4c56d08aa15b0c5!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1634104251592!5m2!1sen!2sus" allowfullscreen="" loading="lazy"></iframe> */}
                    {/* <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7023.84895297799!2d73.841555774776!3d18.536569668686244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c081855692b3%3A0xb468438664cba14!2sCollege%20of%20Agriculture%2C%20Pune!5e1!3m2!1sen!2sus!4v1752740963904!5m2!1sen!2sus" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                    <iframe class="contact-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.818238087144!2d73.8380038747761!3d18.541738118528198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0066ba5753%3A0x95a40b1f0b915551!2sICAR-ATARI%2C%20Zone%20VIII%2C%20Pune%2C%20College%20of%20Agriculture%20Campus%2C%20Shivajinagar!5e1!3m2!1sen!2sin!4v1753050328776!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
          {/* </Typography>
        </Box> */}
      </Box>
    </Commonpage>
  );
}

export default HowToReachUs;
