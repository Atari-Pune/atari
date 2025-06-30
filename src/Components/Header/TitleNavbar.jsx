import React from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';

import AzadiLogo from '../../Assets/Azadi.png';
import AtariLogo from '../../Assets/atari_logo.png';
import IcarLogo from '../../Assets/ICAR-logo without background.png';

const TitleNavbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="static" color="default" sx={{ py: 1, boxShadow: 'none', borderBottom: '1px solid #ddd' }}>
      <Toolbar sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'nowrap',
        width: '100%',
        px: isMobile ? 1 : 2,
      }}>
        {/* Left Logo */}
        <Box component="a" href="/" sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}>
          <img
            src={AzadiLogo}
            alt="Azadi Logo"
            style={{
              height: isMobile ? '30px' : '120px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Box>

        {/* Center Title */}
        <Box sx={{
          textAlign: 'center',
          flex: '1 1 auto',
          minWidth: 0,
          px: 1,
          overflow: 'hidden',
        }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{
              fontSize: isMobile ? '0.7rem' : '1.5rem',
              lineHeight: 1.2,
              whiteSpace: 'normal',
              marginTop:2
            }}
          >
            भा.कृ.अनु.प.-कृषि प्रौद्योगिकी अनुप्रयोग अनुसंधान संस्थान, जोन VIII, पुणे
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'text.secondary',
              fontSize: isMobile ? '0.6rem' : '1.2rem',
              whiteSpace: 'normal',
            }}
          >
            ICAR- Agricultural Technology Application Research Institute, Zone VIII, Pune
          </Typography>
        </Box>

        {/* Right Logos */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexShrink: 0,
          gap: isMobile ? 0.5 : 1,
        }}>
          <img
            src={AtariLogo}
            alt="ATARI Logo"
            style={{
              height: isMobile ? '30px' : '120px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
          <img
            src={IcarLogo}
            alt="ICAR Logo"
            style={{
              height: isMobile ? '30px' : '120px',
              width: 'auto',
              objectFit: 'contain'
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TitleNavbar;
