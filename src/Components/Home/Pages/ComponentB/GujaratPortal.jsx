import React from 'react';
import { Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  useMediaQuery,
  useTheme, } from '@mui/material';
import  { useState } from 'react';




// Adjust paths as per your project structure
import Commonpage from '../../../../Layout/Commonpage';
const portalBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Quick Links', path: '/important-links' }, // Adjust path if 'Quick Links' has its own landing page
    { label: 'Portal' } // Current page, no path for last item
];

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */
const customPortalSidebarItems = [
    { label: 'Portal', path: '/portal' },
    { label: 'Important Links', path: '/important-links' },
    { label: 'Release / Order / Circulars', path: '/release-order-circulars' },
    { label: 'Programmes', path: '/programmes' },
    { label: 'Publication', path: '/publications/research-papers-books' },
    { label: 'Vigilance Officer', path: '/vigilance-officer' },
    { label: 'Proceedings', path: '/reports/proceedings' },
    // Add more items as needed for this specific sidebar
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */


const kvkData = [ 
  {
    university: 'NAU Navsari',
    color: '#D1C4E9',
    kvks: [		
      { name: 'Surat', url: 'https://kvksolapur2.in' },
      { name: 'Navsari', url: 'https://kvkdhule.in' },
      { name: 'Tapi	', url: 'https://kvkjalgaon2.in' },
      { name: 'Narmada', url: 'https://kvksatara2.in' },
      { name: 'Dang', url: 'https://kvksatara2.in' },
    ],
  },

   {
    university: 'AAU Anand',
    	
    color: '#FFE0B2',
   kvks: [
    { name: 'Anand', url: 'https://kvkraigad.in' },
      { name: 'Dahod ', url: 'https://kvkraigad.in' },
             { name: 'Ahmedabad', url: 'https://kvkratnagiri.in' }, 		
    ],
  },
  {
    university: 'JAU Junagadh',
    color: '#FFE0B2',
   kvks: [
    { name: 'Amreli', url: 'https://kvkraigad.in' },
    { name: 'Jamnagar', url: 'https://kvkraigad.in' },
    { name: 'Morbi', url: 'https://kvkraigad.in' },
    { name: 'Porbandar', url: 'https://kvkraigad.in' },
    { name: 'Rajkot-I', url: 'https://kvkraigad.in' },
      { name: 'Suredranagar', url: 'https://kvkraigad.in' },
      { name: '', url: 'https://kvkratnagiri.in' },
    ],
  },
  
  {
    university: 'SDAU SK Nagar',
    color: '#FFE0B2',
   kvks: [
    { name: 'Banaskantha-I', url: 'https://kvkraigad.in' },  
    { name: 'Banaskantha-II', url: 'https://kvkratnagiri.in' },
    { name: 'SabarkanthaNagpur-I', url: 'https://kvkratnagiri.in' },   		
    ],
  },
   {
    university: 'ICAR KVKs',
    color: '#FFECB3',
    kvks: [
      { name: 'Kutch-II', url: 'https://kvkbhandara.in' },
      { name: 'Panchmahal', url: 'https://kvkwardha.in' },
      
      { name: '', url: 'https://kvkyavatmal1.in' },
    ],
  },
  
    {
    university: 'NGO ',
    color: '#fadeb0ff',
   kvks: [
      			
		
      { name: 'Mehsana', url: 'https://kvkratnagiri.in' },
              
      { name: 'Bharuch	', url: 'https://kvkratnagiri.in' },
      { name: 'Junagadh', url: 'https://kvkraigad.in' },         
      { name: 'Patan', url: 'https://kvkratnagiri.in' },
       { name: 'Kutch-I', url: 'https://kvkraigad.in' },
        { name: 'Vadodara', url: 'https://kvkraigad.in' },
         { name: 'Bhavnagar', url: 'https://kvkraigad.in' }
    //  { name: '', url: 'https://kvkraigad.in' }		
      				
		   ],
  },
];

/**
 * Component for the Portal page.
 */
const GujaratPortal = () => {
    const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredData = kvkData
    .map((group) => {
      const filteredKvks = group.kvks.filter((kvk) =>
        kvk.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (
        group.university.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return group;
      }

      return filteredKvks.length
        ? { ...group, kvks: filteredKvks }
        : null;
    })
    .filter(Boolean);

  return (
    <Commonpage>
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        fontWeight="bold"
        color="green"
        gutterBottom
      >
        Gujarat KVKs Links
      </Typography>

      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <TextField
          label="Search by KVK or university"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '100%', maxWidth: 500 }}
          size="small"
        />
      </Box>

      <Grid container spacing={3}>
        {filteredData.map((group, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Card
              sx={{
                // backgroundColor: group.color,
                borderRadius: 3,
                boxShadow: 4,
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                //   color="primary"
                  sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
                >
                  {group.university}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.kvks.map((kvk, i) => (
                    <Chip
                      key={i}
                    
                      label={kvk.name}
                      clickable
                      component="a"
                      href={kvk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: '#198754',
                        color: '#fff',
                        fontWeight: 'bold',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          backgroundColor: '#0e562bff',
                          boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
                        },
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredData.length === 0 && (
        <Typography align="center" sx={{ mt: 4 }} color="text.secondary">
          No KVK found for "{searchTerm}"
        </Typography>
      )}
    </Box>
    </Commonpage>
  );
};

export default GujaratPortal;