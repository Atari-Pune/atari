import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ComponentB = () => {
  const headingColor = '#212529'; // Dark text for headings (Bootstrap default)
  const linkColor = '#007bff';    // Bootstrap primary color for links

  const quickLinks = [
    { label: 'Portal', href: '#' },
    { label: 'Important Links', href: '#' },
    { label: 'Release / Order / Circulars', href: '#' },
    { label: 'Programmes', href: '#' },
    { label: 'Publication', href: '#' },
    { label: 'Success Stories', href: '#' },
    { label: 'Vigilance Officer', href: '#' },
    { label: 'Proceedings', href: '#' },
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
            {quickLinks.map((link, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemText>
                  <Typography
                    component="a"
                    href={link.href}
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
            ))}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default ComponentB;
