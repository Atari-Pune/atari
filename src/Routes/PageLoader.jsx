// src/components/PageLoader.jsx
import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

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
      <CircularProgress color="success" size={60} />
      <Typography variant="h6" mt={2}>Loading...</Typography>
    </Box>
  );
};

export default PageLoader;
