import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
const GoaKVK = () => {
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        {/* Removed the hardcoded Typography for "How to Reach Us" as Commonpage handles the title */}
        <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
          <Typography variant="body1" color="text.secondary">
            <embed src="https://ik.imagekit.io/ataripune/assets/Contact%20Details/KVK%20Heads%20contact%20%20/Contact%20Details%20of%20Senior%20Scientist%20&%20Heads%20of%20Goa%20KVKs-09.07.2025.pdf?updatedAt=1753943180202" width="600" height="500" type="application/pdf"/>
          </Typography>
        </Box>
      </Box>
    </Commonpage>
  );
}


export default GoaKVK