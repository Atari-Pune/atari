import React from 'react';
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
// import Commonpage from '../../../../Layout/Commonpage'; // Import the reusable Commonpage layout

import CommonLayout from '../../../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout
import quickLinks from '../../../../Data/QuickLinks2.json'; // Import routesConfig

const customPortalPageSidebarItems = quickLinks.map(obj => {
  return {
    ...obj,
    path: obj.href,
    // Remove oldKey
    ...(delete obj.href && {})
  };
});
const portalpageBreadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Quick Links', path: '/important-links' }, // Adjust path if 'Quick Links' has its own landing page
  { label: 'Portal' } // Current page, no path for last item
];





/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
const SuccessStories= () => {
  return (
     // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <CommonLayout
            pageTitle="Sucess Stories" // REQUIRED page title for the Portal page
            breadcrumbItems={portalpageBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customPortalPageSidebarItems} // Pass custom sidebar items
            sidebarTitle="Quick Links" // Custom sidebar title, consistent with Important Links
        >
   
 
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        {/* Removed the hardcoded Typography for "How to Reach Us" as Commonpage handles the title */}
        <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
          <Typography variant="body1" color="text.secondary">
           <embed src="https://ik.imagekit.io/ataripune/assets/document/pdf/Success%20Stories/Success-Stories.pdf?updatedAt=1756122268368" width="1000" height="500" type="application/pdf"/>
            
          </Typography>
        </Box>
      </Box>
    
    </CommonLayout>
  );
}


export default SuccessStories
