import React, { useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
// Adjust paths as per your project structure
import CommonLayout from '../../../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout
import TableLayout from "../../../../Layout/TableLayout";
import recruitmentData from "../../../../Data/Quicklink.json";

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 */
const customReleaseOrderCircularsSidebarItems = [
    { label: 'Portal', path: '/portal' },
    { label: 'Important Links', path: '/important-links' },
    { label: 'Release / Order / Circulars', path: '/release-order-circulars' },
    { label: 'Programmes', path: '/programmes' },
    { label: 'Publication', path: '/publications/research-papers-books' },
    { label: 'Vigilance Officer', path: '/vigilance-officer' },
    { label: 'Proceedings', path: '/reports/proceedings' },
    // Add more items as needed for this specific sidebar
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const releaseOrderCircularsBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Quick Links', path: '/' }, // Example: assuming a parent route
    { label: 'Release / Order / Circulars' } // Current page, no path for last item
];

/**
 * Component for the Release / Order / Circulars page, now with tabs.
 */
const ReleaseOrderCircularsPage = () => {
    const [selectedTab, setSelectedTab] = useState('Recruitment'); // Default to 'Recruitment' tab

    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);
    };

    // Define the sections and their corresponding tab labels
    const sections = [
        { id: 'Recruitment', label: 'Recruitment' },
        { id: 'Orders', label: 'Orders' },
        { id: 'Circulars', label: 'Circulars' },
        { id: 'Tenders', label: 'Tenders' },
        { id: 'Auction', label: 'Auction' },
    ];

    // Filter the data to show only for the selected tab
    const reportsData = recruitmentData.filter(report => report.section === selectedTab);

    return (
        <CommonLayout
            pageTitle="Release / Order / Circulars" // REQUIRED page title
            breadcrumbItems={releaseOrderCircularsBreadcrumbs} // REQUIRED breadcrumbs
            sidebarNavItems={customReleaseOrderCircularsSidebarItems} // Pass custom sidebar items
            sidebarTitle="Quick Links" // Custom sidebar title
        >
            <Box>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs
                        value={selectedTab}
                        onChange={handleChange}
                        aria-label="release order circulars tabs"
                        variant="scrollable"
                        scrollButtons="auto"
                        textColor="primary"
                        indicatorColor="primary"
                        sx={{
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#198754', // Green indicator
                            },
                        }}
                    >
                        {sections.map((section) => (
                            <Tab
                                key={section.id}
                                label={section.label}
                                value={section.id}
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

                {/* Render TabPanel content based on selectedTab */}
                {sections.map((section) => (
                    <Box
                        key={section.id}
                        role="tabpanel"
                        hidden={selectedTab !== section.id}
                        id={`simple-tabpanel-${section.id}`}
                        aria-labelledby={`simple-tab-${section.id}`}
                        sx={{ p: 0, pt: 2 }} // Consistent padding
                    >
                        <TableLayout data={reportsData} />
                    </Box>
                ))}
            </Box>
        </CommonLayout>
    );
}

export default ReleaseOrderCircularsPage;