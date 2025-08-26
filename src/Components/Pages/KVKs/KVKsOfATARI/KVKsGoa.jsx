import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
const KVKsGoa = () => {
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        {/* Removed the hardcoded Typography for "How to Reach Us" as Commonpage handles the title */}
        <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
          <Typography variant="body1" color="text.secondary">
           <embed src="https://ik.imagekit.io/ataripune/assets/Contact%20Details/KVKs%20in%20ATARI/KVKs%20in%20Goa.pdf?updatedAt=1753943076511" width="500" height="500" type="application/pdf"/>
          </Typography>
        </Box>
      </Box>
    </Commonpage>
  );
}


export default KVKsGoa;
