import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid, Button, ButtonGroup, Card, CardMedia, CardContent, Dialog, IconButton,Tabs,Tab } from '@mui/material';
import Commonpage from '../../../Layout/Commonpage';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

// Hardcoded photo data
const photos = [
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Union%20Minister%20of%20Agriculture%20&%20Farmers%20Welfare%20Inaugurates%20Administrative%20Building%20of%20ICAR-ATARI,%20Pune%20on%2019th%20January%202023.JPG?updatedAt=1753181625045' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/DSC_8099.JPG?updatedAt=1753761650500' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Republic%20Day%202024.jpeg?updatedAt=1753181622335' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/DSC_8097.JPG?updatedAt=1753761612259'}, //title: 'ICAR Logo', category: 'Logos'
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Annual%20Action%20Plan%20Workshop%20of%20KVKs%20in%20Maharashtra%20inaugurated%20on%2022%20February%202023.jpg?updatedAt=1753181622375' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Review%20Workshop%20of%20KVKs%20of%20ATARI%20Zone%20VIII%204%20May%202023,%20ICAR-ATARI,%20Pune..png?updatedAt=1753181622481' },
  
 
  // { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Kisan%20Samman%20Divas.JPG?updatedAt=1753357122161' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Navsari%20Agricultural%20University.png?updatedAt=1753356829117' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Valedictory%20speech%20by%20Honble%20Cheif%20guest%20Dr%20U%20S%20Gautam..JPG?updatedAt=1753356727475' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Valedictory%20speech%20by%20Honble%20Cheif%20guest%20Dr%20U%20S%20Gautam.jpg?updatedAt=1753356725573'}, //title: 'ICAR Logo', category: 'Logos'
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Narayangaon%20kisan%20mela%202024.jpeg?updatedAt=1753356630795' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/seventh%20Annual%20Zonal%20Workshop%20At%20JAU%20Junagadh.jpeg?updatedAt=1753356627413' },
  { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Women%20SHG%20mela%20at%20Osmanabad%20VNMKV%20Parbhani%203%20january%202024.jpeg?updatedAt=1753356627396' },
  // { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Women%20SHG%20mela%20at%20Osmanabad%20VNMKV%20Parbhani%203%20january%202024.jpeg?updatedAt=1753356627396' },
 
 
 
 
 
 
 
 
 
 
 
 
  // Add more photos as needed
];

// Extract unique categories
const categories = ['All', ...Array.from(new Set(photos.map(photo => photo.category)))];
// const dummyCategories = Array.from({ length: 100 }, (_, i) => `DummyCategory${i + 1}`);
// const categories = ['All', ...Array.from(new Set(photos.map(photo => photo.category))), ...dummyCategories];

const AUTO_PLAY_INTERVAL = 2500; // ms

const PhotoGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(false);
  const autoPlayRef = useRef();

  // Filter photos by selected category
  const filteredPhotos = selectedCategory === 'All'
    ? photos
    : photos.filter(photo => photo.category === selectedCategory);

  // Open modal and set current image index
  const handleOpen = (idx) => {
    setCurrentIndex(idx);
    setOpen(true);
  };

  // Close modal and stop autoplay
  const handleClose = () => {
    setOpen(false);
    setAutoPlay(false);
  };

  // Next/Prev navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredPhotos.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
  };

  // Auto-play effect
  useEffect(() => {
    if (autoPlay && open && filteredPhotos.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev === filteredPhotos.length - 1 ? 0 : prev + 1));
      }, AUTO_PLAY_INTERVAL);
      return () => clearInterval(autoPlayRef.current);
    } else {
      clearInterval(autoPlayRef.current);
    }
  }, [autoPlay, open, filteredPhotos.length]);

  // Reset currentIndex if filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);
  const handleCategoryChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  return (
    <Commonpage>
      <Box sx={{ mb: 10 }}>
       
         <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs
            value={selectedCategory}
            onChange={handleCategoryChange}
            aria-label="publication sections tabs"
            // Removed 'centered' prop to align tabs to the left
            variant="scrollable" // Make tabs scrollable if they overflow
            scrollButtons="auto" // Show scroll buttons automatically
            textColor="primary" // Use primary color for text
            indicatorColor="primary" // Use primary color for indicator
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#198754', // Green indicator
              },
              // Added flexGrow: 1 to the Box containing Tabs to allow it to take available space,
              // and removed centered property from Tabs to align left.
              justifyContent: 'flex-start', // Align tabs to the start (left)
            }}
          >
            {categories.map(category => (
              <Tab
                key={category}
                label={category}
                value={category}
                sx={{
                  textTransform: 'none', // Prevent uppercase
                  fontWeight: 'bold',
                  color: '#198754', // Green color for inactive tabs
                  '&.Mui-selected': {
                    color: '#198754', // Green color for active tab
                    backgroundColor: 'rgba(25, 135, 84, 0.08)', // Light green background for active tab
                  },
                  '&.Mui-focusVisible': {
                    backgroundColor: 'rgba(25, 135, 84, 0.15)', // Focus style
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>
        {/* Responsive Photo Grid */}
        <Grid container spacing={2} justifyContent="center" >
          {filteredPhotos.length === 0 ? (
            <Grid item xs={12}>
              <Typography variant="body1" color="text.secondary" align="center">
                No photos available in this category.
              </Typography>
            </Grid>
          ) : (
            filteredPhotos.map((photo, idx) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
                <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleOpen(idx)}>
                  <CardMedia
                    component="img"
                    height="180"
                    image={photo.url}
                    alt={photo.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent>
                    <Typography variant="subtitle1" align="center">{photo.title}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))
          )}
        </Grid>
        {/* Image Preview Modal */}
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <Box sx={{ position: 'relative', bgcolor: '#000', p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <IconButton onClick={handleClose} sx={{ position: 'absolute', top: 8, right: 8, color: '#fff', zIndex: 2 }}>
              <CloseIcon />
            </IconButton>
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'center', minHeight: 300 }}>
              <IconButton onClick={handlePrev} sx={{ color: '#fff' }} aria-label="Previous">
                <ArrowBackIosNewIcon />
              </IconButton>
              {filteredPhotos[currentIndex] && (
                <img
                  src={filteredPhotos[currentIndex].url}
                  alt={filteredPhotos[currentIndex].title}
                  style={{ maxHeight: 200, maxWidth: '80vw', objectFit: 'contain', margin: '0 16px', borderRadius: 8 }}
                />
              )}
              <IconButton onClick={handleNext} sx={{ color: '#fff' }} aria-label="Next">
                <ArrowForwardIosIcon />
              </IconButton>
            </Box>
            <Typography variant="h6" color="#fff" sx={{ mt: 2, textAlign: 'center' }}>
              {filteredPhotos[currentIndex]?.title}
            </Typography>
            <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
              <Button
                variant="contained"
                color={autoPlay ? 'secondary' : 'primary'}
                startIcon={autoPlay ? <PauseIcon /> : <PlayArrowIcon />}
                onClick={() => setAutoPlay((prev) => !prev)}
              >
                {autoPlay ? 'Pause' : 'Auto Play'}
              </Button>
            </Box>
          </Box>
        </Dialog>
      </Box>
    </Commonpage>
  );
}

export default PhotoGallery;