import React from 'react';
import { Box, keyframes } from '@mui/material';
import { styled } from '@mui/system';
import loadingImage from '../Assets/atrai.gif'; // Adjust the path as necessary

const pulse = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const AnimatedImage = styled('img')({
  animation: `${pulse} 2s infinite`,
});

const PageLoader = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimatedImage src={loadingImage} alt="Loading" style={{ width: 250, height: 250, marginBottom: 2 }} />
    </Box>
  );
};

export default PageLoader;
