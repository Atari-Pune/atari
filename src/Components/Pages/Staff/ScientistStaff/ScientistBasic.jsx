import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import { Grid, Card, CardContent, Avatar } from '@mui/material';


/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */


const staffMembers = [
  {
    name: 'Shri Tushar Athare',
    designation: 'Scientist',
    qualification: 'M.Sc. Agriculture',
    contact:'020-25535660',
    doj:'10 October 2021',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/tathare.jpg?updatedAt=1753690271718', // Replace with actual photo path
  },
  {
    name: 'Dr Rajesh T',
    designation: 'Scientist',
    qualification: 'PhD in Agriculture Economics',
    contact:'020-25535660',
    doj:'04 October 2021',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/rajesh.jpg?updatedAt=1753690270515', // Replace with actual photo path
  },

  // Add more staff as needed
];

const ScientistBasic = () => {
  return (
    <Commonpage>
      <Box sx={{ mt: 4, mb: 2 }}>
        {/* <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}> */}
        {/* Contractual Young Professionals */}
        {/* </Typography> */}
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
                    <b>{staff.designation}</b>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {staff.qualification}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {staff.contact}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {staff.doj}
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


export default ScientistBasic