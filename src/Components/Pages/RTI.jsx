import React from 'react';
import { Box, Typography } from '@mui/material';
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
    { label: 'RTI Policy', path: '/rti' },
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const portalBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'RTI' } // Current page, no path for last item
];

/**
 * Component for the Portal page.
 */
const RTI = () => {
    return (
        <CommonLayout
            pageTitle="RTI" // REQUIRED page title for the Portal page
            breadcrumbItems={portalBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customPortalSidebarItems} // Pass custom sidebar items
            sidebarTitle="RTI" // Custom sidebar title, consistent with Important Links
        >
            <Box sx={{ mb: 2 }}>
                <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                    <Typography variant="body1" color="text.secondary">
                        Content for the Portal will be updated soon.
                    </Typography>
                </Box>
            </Box>
        </CommonLayout>
    );
}

export default RTI;
