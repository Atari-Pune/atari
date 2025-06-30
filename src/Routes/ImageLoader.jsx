// src/components/ImageLoader.jsx
import React from 'react';
import { CircularProgress, Box } from '@mui/material';

const ImageLoader = ({ size = 40 }) => {
  return (
    <Box
      sx={{
        height: size,
        width: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={size} color="success" />
    </Box>
  );
};

export default ImageLoader;
