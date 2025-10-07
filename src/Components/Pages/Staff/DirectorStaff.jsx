import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import Commonpage from '../../../Layout/Commonpage';

const DirectorStaff = () => {
  // Sample data, replace with real info and photo filename as needed
  const director = {
    name: 'Dr. Subrata Kumar Roy',
    designation: 'Director, ICAR_ATARI Pune ',
    qualification: 'M.Sc-(Ag)-Agronomy, Ph.D. ARS',
    contact:'020-25535665',
    doj:'15 March 2023',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Dr.Subrata%20Kumar%20Roy.jpg?updatedAt=1753161545813', // Placeholder, replace with actual photo
  };

  return (
    <Commonpage>
      <Container maxWidth="sm" sx={{ mt: 6, mb: 4 }}>
        <Card sx={{ boxShadow: 6, borderRadius: 4, overflow: 'visible', textAlign: 'center', pt: 4 }}>
          <CardMedia
            component="img"
            image={director.photo}
            alt={director.name}
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
              {director.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              <b>{director.designation}</b>
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Qualification:</b> {director.qualification}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Contact Number:</b> {director.contact}
            </Typography>
            <Typography variant="body1" color="text.primary">
              <b>Date of Joining:</b> {director.doj}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Commonpage>
  );
}

export default DirectorStaff;