import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
import Commonpage from '../../../../Layout/Commonpage';

// Sample staff data (replace with real data and image paths)
const staffMembers = [
  {
    name: 'Miss Pratibha  Surwade',
    designation: 'YP-II(IT)',
    qualification: 'MCA',
    project:'Institute Budget',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Pratibha%20Surwade.jpg?updatedAt=1753095441372', // Replace with actual photo path
  },
  {
    name: 'Miss Priyanka Bhalerao',
    designation: 'YP-I',
    project:'Natural farming',
    qualification: 'B.Sc Agriculture',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Priyanka%20Bhalerao.jpg?updatedAt=1753095442492', // Replace with actual photo path
  },
  {
    name: 'Miss Neha Salunke',
    designation: 'YP-I ',
    project:'Special Project on Cotton',
    qualification: 'B.Sc Agriculture',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Neha%20Salunke.jpeg?updatedAt=1753163346837', // Replace with actual photo path
  },
  {
    name: 'Shri Kapil Gaikwad',
    designation: 'YP-I',
    project:'Institute Budget',
    qualification: 'B.A.',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Kapil%20Gaikwad.jpeg?updatedAt=1753163346387', // Replace with actual photo path
  },
  {
    name: 'Shri Swapnil Gaikwad',
    designation: 'YP-I',
    project:'Institute Budget',
    qualification: 'B.A.',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Swapnil%20Gaikwad.jpeg?updatedAt=1753435492412', // Replace with actual photo path
  },
  {
    name: 'Mrs Sunita Kade',
    designation: 'DEO',
    qualification: 'B.A.',
    project:'CFLD Pulses',
    photo:'https://ik.imagekit.io/ataripune/assets/images/staff/Sunita%20M%20Kade.png?updatedAt=1753095442561', // Replace with actual photo path
  },
  // Add more staff as needed
];

const YPsContractual = () => {
  return (
    <Commonpage>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
         Young Professionals & DEO
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {staffMembers.map((staff, idx) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
              <Card sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 300 }}>
                <Box
                  sx={{
                    width: 140,
                    height: 140,
                    mt: 1,
                    mb: 1,
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: 2,
                    bgcolor: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src={staff.photo}
                    alt={staff.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'fill', // or 'scale-down'
                      display: 'block',
                    }}
                  />
                </Box>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ fontWeight: 500 }}>
                    {staff.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {staff.designation}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {staff.qualification}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {staff.project}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Commonpage>
  );
}

export default YPsContractual

