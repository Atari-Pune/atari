import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
const MaharashtraKVK = () => {
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        {/* Removed the hardcoded Typography for "How to Reach Us" as Commonpage handles the title */}
        <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
          <Typography variant="body1" color="text.secondary">
            {/* <a href={'https://ik.imagekit.io/ataripune/assets/Contact%20Details/Contact%20details%20of%20KVK.pdf?updatedAt=1753682184098'} target="_blank" rel="noopener noreferrer"> */}
  {/* View Uploaded PDF */}
{/* </a> */}
<embed src="https://ik.imagekit.io/ataripune/assets/Contact%20Details/KVK%20Heads%20contact%20%20/Contact%20details%20of%20KVK%20Heads%20%20-%20Maharashtra%20.pdf?updatedAt=1753943179357" width="700" height="500" type="application/pdf"/>
          </Typography>
        </Box>
      </Box>
    </Commonpage>
  );
}


export default MaharashtraKVK
