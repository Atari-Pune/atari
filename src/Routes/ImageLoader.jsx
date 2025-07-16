import React from 'react';
import { Box } from '@mui/material';
import loadingImage from '../Assets/atrai.gif'; // Adjust the path as necessary

const ImageLoader = ({ size = 120 }) => {
  return (
    <Box
      sx={{
        height: size,
        width: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <img
        src={loadingImage}
        alt="Loading"
        style={{
          width: size,
          height: size,
          position: 'absolute',
        }}
      />
    </Box>
  );
};

export default ImageLoader;
