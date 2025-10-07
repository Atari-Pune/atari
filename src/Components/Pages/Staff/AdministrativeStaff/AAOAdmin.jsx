import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar,Container,CardMedia} from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import {   } from '@mui/material';

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 
 */



const AAOAdmin = () => {

  // Sample data, replace with real info and photo filename as needed
  const aao = {
    name: 'Mrs Priyanka Kumari',
    designation: 'Assistant Administrative Officer ',
    qualification: 'Ph.D. in Agricultural Extension',
    contact:'020-25535660',
    doj:'05 April 2022',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/pk.jpg?updatedAt=1753690269713', // Placeholder, replace with actual photo
  };
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      <Container maxWidth="sm" sx={{ mt: 6, mb: 4 }}>
        <Card sx={{ boxShadow: 6, borderRadius: 4, overflow: 'visible', textAlign: 'center', pt: 4 }}>
          <CardMedia
            component="img"
            image={aao.photo}
            alt={aao.name}
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
              {aao.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
             <b> {aao.designation}</b>
            </Typography>
           
            <Typography variant="body1" color="text.primary">
              <b>Contact Number:</b> {aao.contact}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Date of Joining:</b> {aao.doj}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Commonpage>
  );
}



export default AAOAdmin