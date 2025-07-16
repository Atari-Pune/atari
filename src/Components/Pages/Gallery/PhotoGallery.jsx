import React from 'react'
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Sidebar from "../../Home/Sidebar/sidebar" // This import is incorrect here

const PhotoGallery = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={10} sx={{ p: 2, height: '100%' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6" gutterBottom component="div" sx={{ mb: 0 }}>
            PhotoGallery
            </Typography>
          </Box>
        </Grid>
        <Grid size={2} sx={{ py: 2 }}>
          <Sidebar />
        </Grid>
      </Grid>
    </Box>
  )
}

export default PhotoGallery