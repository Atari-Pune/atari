import * as React from 'react';
import { Box, Button, ButtonGroup } from '@mui/material'; // Removed Grid, Paper, Breadcrumbs, Link, NavigateNextIcon, useLocation, RouterLink, Sidebar
import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout

/**
 * Component to display Agro Climatic Zones with selectable maps.
 * This page now uses the Commonpage layout for consistent structure.
 */
export default function AgroClimaticZonesPage() {
  const [selectedMap, setSelectedMap] = React.useState('maharashtra'); // Default to Maharashtra map

  const handleMapChange = (mapName) => {
    setSelectedMap(mapName);
  };
// Get the base URL from environment variables
// Add a fallback in case the env variable is not set
const WEBSITE_BASE_URL = process.env.REACT_APP_WEBSITE_URL;

const mapImages = {
    maharashtra: {
        src: `${WEBSITE_BASE_URL}/images/agroclimaticzone_page-0001.jpg`,
        alt: "Agro Climatic Zones of Maharashtra",
        title: "Maharashtra Agro Climatic Zones"
    },
    gujarat: {
        src: `${WEBSITE_BASE_URL}/images/agroclimaticzone_page-0002.jpg`,
        alt: "Agro Climatic Zones of Gujarat",
        title: "Gujarat Agro Climatic Zones"
    },
    goa: {
        src: `${WEBSITE_BASE_URL}/images/agroclimaticzone_page-0003.jpg`,
        alt: "Agro Climatic Zones of Goa",
        title: "Goa Agro Climatic Zones"
    },
};

  const currentMap = mapImages[selectedMap];

  return (
    // Use the Commonpage layout component to wrap the specific content of this page.
    // Commonpage will handle the header (title and breadcrumbs) and sidebar.
    <Commonpage>
      <Box sx={{ mb: 2, display: 'flex'}}>
        <ButtonGroup variant="contained" aria-label="map selection buttons" sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Button
            onClick={() => handleMapChange('maharashtra')}
            disabled={selectedMap === 'maharashtra'}
            sx={{
              backgroundColor: selectedMap === 'maharashtra' ? '#146c43' : '#198754',
              color: 'white',
              '&:hover': {
                backgroundColor: '#146c43',
              },
              borderRight: '1px solid rgba(255, 255, 255, 0.2)',
              border:'#146c43',
              borderRadius: '0', // Remove individual button rounding
            }}
          >
            Maharashtra
          </Button>
          <Button
            onClick={() => handleMapChange('gujarat')}
            disabled={selectedMap === 'gujarat'}
            sx={{
              backgroundColor: selectedMap === 'gujarat' ? '#146c43' : '#198754',
              color: 'white',
              '&:hover': {
                backgroundColor: '#146c43',
              },
              borderRight: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '0',
            }}
          >
            Gujarat
          </Button>
          <Button
            onClick={() => handleMapChange('goa')}
            disabled={selectedMap === 'goa'}
            sx={{
              backgroundColor: selectedMap === 'goa' ? '#146c43' : '#198754',
              color: 'white',
              '&:hover': {
                backgroundColor: '#146c43',
              },
              borderRadius: '0',
            }}
          >
            Goa
          </Button>
        </ButtonGroup>
      </Box>

      {currentMap && (
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          <img
            src={currentMap.src}
            alt={currentMap.alt}
            style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
            // Fallback for image loading errors
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = "https://placehold.co/800x600/FF0000/FFFFFF?text=Image+Load+Error"; // Red placeholder
              e.target.alt = "Error loading image";
            }}
          />
        </Box>
      )}
    </Commonpage>
  );
}
