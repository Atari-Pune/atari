import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, useTheme, useMediaQuery } from '@mui/material';
import { keyframes } from '@mui/system';
import Commonpage from '../../../Layout/Commonpage';

const videoList = [

  {
    title: "Video VI",
    url: "https://www.youtube.com/embed/0vjjYC5tpfA?si=LPTmCT2FVjv5lj_W",

      },
      {
    title: "Video V",
    url: "https://www.youtube.com/embed/zb23HQeteec?si=CSrzmKLS3W_sSWU3",

      },

  {
    title: "Video I",
    url: "https://www.youtube.com/embed/wGTjYLB34dI?si=odbcP4cO1goqrrp",
  },
  {
    title: "Video II",
    url: "https://www.youtube.com/embed/z7N8UX9FYvg?si=dUuRS_q6uJOcw-_6_",
  },
  {
    title: "Video III",
    url: "https://www.youtube.com/embed/ogZGBK_Gqas?si=R8khycuG0yRiQy2C",
  },
  {
    title: "Video IV",
    url: "https://www.youtube.com/embed/m8L5SBWzmA4?si=kYo7ik6PcqVfjlxZ",
      },





];
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;
export default function VideoGallery() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Commonpage>
      <Box sx={{ background: "linear-gradient(135deg, #f5f5f5, #ffffff)", minHeight: "100vh", p: 4 }}>
        <Typography variant="h4" align="center" sx={{ mb: 4, fontWeight: 'bold', color: '#228d45' }}>
          Video Gallery
        </Typography>
       <Grid container spacing={3} justifyContent="center">
  {videoList.map((video, index) => (
 
      
    
      
            <iframe
              width="28%"
              height="100%"
              src={video.url}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`YouTube Video ${index + 1}`}
              aria-label={`YouTube Video ${index + 1}`}
               key={index}
            />
      
  
   
  ))}
</Grid>

      </Box>

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
              {videoList.map((src, index) => (
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
                  
                </Box>
              ))}
            </Box>
          </Box>
    </Commonpage>
  );
}
