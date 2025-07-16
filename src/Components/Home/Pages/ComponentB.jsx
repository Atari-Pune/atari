import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Import RouterLink

const ComponentB = () => {
    // Access the environment variable
  const baseUrl = process.env.REACT_APP_WEBSITE_URL;
  const headingColor = '#212529'; // Dark text for headings (Bootstrap default)
  const linkColor = '#007bff';     // Bootstrap primary color for links

  const quickLinks = [
    { label: 'Portal', href:'/portal' }, // Corrected: Removed /atari/
    { label: 'Important Links', href: '/important-links' }, // Corrected: Removed /atari/
    { label: 'Release / Order / Circulars', href: '/release-order-circulars' }, // Corrected: Removed /atari/
    { label: 'Programmes', href: '/programmes' }, // Corrected: Removed /atari/
    { label: 'Publication', href: '/publications/research-papers-books' }, // Corrected: Removed /atari/
    { label: 'Success Stories', href: `${baseUrl}pdf/Success-Stories.pdf` }, // This is an external/PDF link
    { label: 'Vigilance Officer', href: '/vigilance-officer' }, // Corrected: Removed /atari/
    { label: 'Proceedings', href: '/reports/proceedings' }, // Corrected: Removed /atari/
  ];

  return (
    <Box
      sx={{
        p: 2,
        borderRadius: '8px',
        backgroundColor: '#ffffff', // White background for a clean look
        height: '100%',
      }}
    >
      <Typography
        variant="h5"
        component="h5"
        sx={{
          fontSize: { xs: '1.25rem', sm: '1.5rem' },
          fontWeight: 'bold',
          color: headingColor,
          mb: 2,
        }}
      >
        Quick Links
      </Typography>

      <Box className="ongoing-links" sx={{ width: '100%' }}>
        <Box className="textwidget" sx={{ width: '100%' }}>
          <List sx={{ p: 0 }}>
            {quickLinks.map((link, index) => {
                const isPdf = link.href.endsWith('.pdf');
                // Check if it's an external URL (starts with http or https)
                const isExternalUrl = link.href.startsWith('http://') || link.href.startsWith('https://');
                // An internal route is one that is not a PDF and not an external URL (i.e., a relative path within the app)
                const isInternalRoute = !isPdf && !isExternalUrl;

                return (
                  <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                    <ListItemText>
                      <Typography
                        // Conditionally render as RouterLink for internal app routes, or a standard <a> tag for external/PDF links
                        component={isInternalRoute ? RouterLink : 'a'}
                        to={isInternalRoute ? link.href : undefined} // 'to' prop for RouterLink
                        href={!isInternalRoute ? link.href : undefined} // 'href' prop for 'a' tag
                        // Conditionally apply target="_blank" and rel="noopener noreferrer" for external/PDF links
                        {...(isPdf || isExternalUrl ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        sx={{
                          textDecoration: 'none',
                          color: linkColor,
                          fontSize: { xs: '0.9rem', sm: '1rem' },
                          '&:hover': {
                            textDecoration: 'underline',
                            color: '#0056b3',
                          },
                        }}
                      >
                        {link.label}
                      </Typography>
                    </ListItemText>
                  </ListItem>
                );
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentB;
