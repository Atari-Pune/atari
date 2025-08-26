import React from 'react';
import { Box, Typography,Button } from '@mui/material';
// Adjust paths as per your project structure
import CommonLayout from '../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */
const customPortalSidebarItems = [
    { label: 'Home', path: '/' },
    { label: 'Online Payment', path: '/online-payment' },
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const portalBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Online Payment' } // Current page, no path for last item
];

/**
 * Component for the Portal page.
 */
const OnlinePayment = () => {
    return (
        <CommonLayout
            pageTitle="Online Payment" // REQUIRED page title for the Portal page
            breadcrumbItems={portalBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customPortalSidebarItems} // Pass custom sidebar items
            sidebarTitle="Online Payment" // Custom sidebar title, consistent with Important Links
        >
            <Box sx={{ mb: 2 }}>
                <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                    <Typography variant="body1" color="text.secondary">
                    

          {/* SBI Collect Link Button */}
          <div
            variant="contained"
            color="primary"
            href="https://www.onlinesbi.sbi/sbicollect/icollecthome.htm"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ px: 4, py: 1.5, fontWeight: 'bold' }}
          >
            Pay Now (SBI Collect)
          </div>
                    </Typography>
                </Box>
            </Box>
        </CommonLayout>
    );
}

export default OnlinePayment;
