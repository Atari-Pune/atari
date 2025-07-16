import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material'; // Import Paper and Button
import { useNavigate } from 'react-router-dom';
import Imagesvg from "../../Assets/logos/page-not-found.svg"; // Ensure this SVG path is correct

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    // Start the countdown timer
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Redirect to the home page after 10 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 10000);

    // Cleanup function to clear timers if the component unmounts
    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [navigate]); // Dependency array includes navigate to avoid lint warnings


  return (
    <Container maxWidth="sm" sx={{ py: 4 }}> {/* Added vertical padding to container */}
      <Box
        sx={{
          p: { xs: 3, sm: 5 }, // Responsive padding
          borderRadius: 4, // More rounded corners
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh', // Adjusted minHeight for better vertical centering within the paper
          textAlign: 'center',
          backgroundColor: '#ffffff', // White background for the pape
          animation: 'fadeInUp 0.8s ease-out', // Simple fade-in animation
          '@keyframes fadeInUp': {
            '0%': { opacity: 0, transform: 'translateY(20px)' },
            '100%': { opacity: 1, transform: 'translateY(0)' },
          },
        }}
      >
        <Box
          component="img"
          src={Imagesvg}
          alt="Page Not Found"
          sx={{
            width: { xs: 150, sm: 200 }, // Responsive image size
            height: { xs: 150, sm: 200 },
            marginBottom: 4,
            filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.2))', // Add a subtle shadow to the SVG
          }}
        />
        <Typography
          variant="h3"
          component="h1" // Semantic HTML for main heading
          gutterBottom
          sx={{
            color: '#333333', // Darker text for better contrast
            fontWeight: 700, // Bolder font
            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }, // Responsive font size
            mb: 2,
          }}
        >
          404 - Page Not Found
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: '#666666', // Slightly lighter text for body
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 1.6,
            mb: 3, // Increased margin bottom
            maxWidth: '400px', // Constrain text width for readability
          }}
        >
          Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          You will be redirected to the home page in <Box component="span" sx={{ fontWeight: 'bold', color: '#198754' }}>{countdown}</Box> seconds.
        </Typography>
      </Box>
    </Container>
  );
};

export default NotFound;
