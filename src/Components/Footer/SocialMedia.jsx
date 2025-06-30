import React from 'react';
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';

const videoLinks = [
  'https://www.youtube.com/embed/XMmXmI0sl3M',
  'https://www.youtube.com/embed/-IYvXuVcMGE',
  'https://www.youtube.com/embed/vUI52wVB7LM',
  'https://www.youtube.com/embed/iGxebaESbi0',
];

// Duplicate the video links to create a seamless loop
const duplicatedVideoLinks = [...videoLinks, ...videoLinks];

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const SocialMedia = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ px: isMobile ? 1 : 2, py: isMobile ? 2 : 4, overflow: 'hidden' }}>
      <Box
        sx={{
          display: 'flex',
          width: 'max-content',
          gap: 2,
          animation: `${scroll} 30s linear infinite`,
          '&:hover': {
            animationPlayState: 'paused',
          },
        }}
      >
        {duplicatedVideoLinks.map((src, index) => (
          <Box
            key={index}
            sx={{
              maxWidth: '25%',
              aspectRatio: '16/9',
              borderRadius: 1,
              overflow: 'hidden',
              boxShadow: 2,
              bgcolor: 'background.paper',
              flexShrink: 0,
            }}
          >
            <iframe
              width="100%"
              height="100%"
              src={src}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube Video ${index + 1}`}
              aria-label={`YouTube Video ${index + 1}`}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SocialMedia;
