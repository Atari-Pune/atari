import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar  } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
// Sample staff data (replace with real data and image paths)
const staffMembers = [
  {
    name: 'Dr Anita Deshmukh',
    designation: 'SRF',
    project:'NICRA',
    qualification: 'PhD Agri Extension',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Dr%20Anita%20Deshmukh%20.jpg?updatedAt=1753095438223', // Replace with actual photo path
  },
  {
    name: 'Shri Ganesh Chaware',
    designation: 'SRF',
    project:'NEMA',
    qualification: 'M.Sc Agricultural Entomology',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Ganesh%20Chaware.jpg?updatedAt=1753095438505',// Replace with actual photo path
  },
  {
    name: 'Miss Arti Patole',
    designation: 'SRF ',
    project:'CFLD-Oilseeds',
    qualification: 'M.Sc. Agriculture Economics',
    photo:'https://ik.imagekit.io/ataripune/assets/images/staff/Aarti%20Patole.png?updatedAt=1753095438286',// Replace with actual photo path
  },
  
  
  {
    name: 'Dr Sneha Patil',
    designation: ' SRF',
    project:'CFLD-Pulses',
    qualification: 'PhD (Horticulture)-Food Science',
    photo: 'https://ik.imagekit.io/ataripune/assets/images/staff/Dr.%20Sneha%20Suresh%20Patil.jpg?updatedAt=1753095438226', // Replace with actual photo path
  },
  
  // Add more staff as needed
];
const SRFContractual = () => {
  return (
    <Commonpage>
      <Box sx={{ mt: 4, mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 3, fontWeight: 600, textAlign: 'center' }}>
          Senior Research Fellow
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

export default SRFContractual