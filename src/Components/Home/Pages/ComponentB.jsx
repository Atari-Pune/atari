import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ComponentB = () => {
    // Access the environment variable
  const baseUrl = process.env.REACT_APP_WEBSITE_URL;
  const headingColor = '#212529'; // Dark text for headings (Bootstrap default)
  const linkColor = '#007bff';     // Bootstrap primary color for links

  const quickLinks = [
    { label: 'Portal', href:'/atari/portal' },
    { label: 'Important Links', href: '/atari/important-links' },
    { label: 'Release / Order / Circulars', href: '/atari/release-order-circulars' },
    { label: 'Programmes', href: '/atari/programmes' },
    { label: 'Publication', href: '/atari/publications/research-papers-books' },
    { label: 'Success Stories', href: `${baseUrl}pdf/Success-Stories.pdf` },
    { label: 'Vigilance Officer', href: '/atari/vigilance-officer' },
    { label: 'Proceedings', href: '/atari/reports/proceedings' },
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
      {
        console.log(process.env.REACT_APP_WEBSITE_URL)
      }

      <Box className="ongoing-links" sx={{ width: '100%' }}>
        <Box className="textwidget" sx={{ width: '100%' }}>
          <List sx={{ p: 0 }}>
            {quickLinks.map((link, index) => {
                // Check if the link is a PDF file
                const isPdf = link.href.endsWith('.pdf');

                return (
                  <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                    <ListItemText>
                      <Typography
                        component="a"
                        href={link.href}
                        // Conditionally apply target="_blank" and rel="noopener noreferrer"
                        {...(isPdf ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
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
