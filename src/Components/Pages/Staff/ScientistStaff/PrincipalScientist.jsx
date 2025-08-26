import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar,Container,CardMedia} from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

// import {  Grid, Card, CardContent, Avatar } from '@mui/material';

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
  */


// Sample staff data (replace with real data and image paths)


const PrincipalScientist = () => {
  const prscientist = 
  {
    name: 'Dr. Shakir Ali Q Sayed',
    designation: 'Principal Scientist',
    qualification: 'PhD in Agriculture Extension',
    contact:'8380090282',
    doj:'27 February 2024',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Dr%20Shakir%20Ali.jpg?updatedAt=1753095438265', // Replace with actual photo path
  };
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      <Container maxWidth="sm" sx={{ mt: 6, mb: 4 }}>
        <Card sx={{ boxShadow: 6, borderRadius: 4, overflow: 'visible', textAlign: 'center', pt: 4 }}>
          <CardMedia
            component="img"
            image={prscientist.photo}
            alt={prscientist.name}
            sx={{
              width: 140,
              height: 140,
              borderRadius: '50%',
              objectFit: 'cover',
              mx: 'auto',
              mt: -8,
              boxShadow: 3,
              border: '4px solid #fff',
              background: '#f5f5f5',
            }}
          />
          <CardContent>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              {prscientist.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              <b>{prscientist.designation}</b>
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Qualification:</b> {prscientist.qualification}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Contact Number:</b> {prscientist.contact}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Date of Joining:</b> {prscientist.doj}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Commonpage>
  );
}




export default PrincipalScientist;