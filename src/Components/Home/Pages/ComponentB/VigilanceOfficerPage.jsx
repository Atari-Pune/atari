import React from 'react';
import { Box, Typography } from '@mui/material';
// Adjust paths as per your project structure
import CommonLayout from '../../../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * Reusing the "Quick Links" sidebar items for consistency.
 */
const customVigilanceOfficerSidebarItems = [
    { label: 'Portal', path: '/portal' },
    { label: 'Important Links', path: '/important-links' },
    { label: 'Release / Order / Circulars', path: '/release-order-circulars' },
    { label: 'Programmes', path: '/programmes' },
    { label: 'Publication', path: '/publications/research-papers-books' },
    { label: 'Vigilance Officer', path: '/vigilance-officer' },
    { label: 'Proceedings', path: '/reports/proceedings' },
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const vigilanceOfficerBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Quick Links', path: '/important-links' }, // Assuming Quick Links is a parent category
    { label: 'Vigilance Officer' } // Current page, no path for last item
];

/**
 * Component for the Vigilance Officer page.
 */
const VigilanceOfficerPage = () => {
    return (
        <CommonLayout
            pageTitle="Vigilance Officer" // REQUIRED page title for the Vigilance Officer page
            breadcrumbItems={vigilanceOfficerBreadcrumbs} // REQUIRED breadcrumbs for the Vigilance Officer page
            sidebarNavItems={customVigilanceOfficerSidebarItems} // Pass custom sidebar items
            sidebarTitle="Quick Links" // Custom sidebar title, consistent with other Quick Links pages
        >
            <Box sx={{ mb: 2 }}>
                <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                    <Typography variant="body1" color="text.secondary">
                        Content for Vigilance Officer will be updated soon.
                    </Typography>
                </Box>
            </Box>
        </CommonLayout>
    );
}

export default VigilanceOfficerPage;