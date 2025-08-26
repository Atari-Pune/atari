import React from 'react';
import { Box, Typography,ListItemIcon,ListItem,ListItemText,List } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// Adjust paths as per your project structure
import CommonLayout from '../../../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * Reusing the "Quick Links" sidebar items for consistency.
 */
const customProgrammesSidebarItems = [
    { label: 'Portal', path: '/portal' },
    { label: 'Important Links', path: '/important-links' },
    { label: 'Release / Order / Circulars', path: '/release-order-circulars' },
    { label: 'Research Project', path: '/programmes' },
    { label: 'Publication', path: '/publications/research-papers-books' },
    { label: 'Proceedings', path: '/reports/proceedings' },
     // { label: 'Vigilance Officer', path: '/vigilance-officer' },
    // Add more items as needed for this specific sidebar
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const programmesBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Quick Links', path: '/important-links' }, // Assuming Quick Links is a parent category
    { label: 'Programmes',path:'https://ik.imagekit.io/ataripune/assets/Committee%20Cell/PME_RPP-Guide-Lines.pdf?updatedAt=1753694636324' } // Current page, no path for last item
];

/**
 * Component for the Programmes page.
 */
const ProgrammesPage = () => {
     const greenTextColor = '#198754';
    return (
        <CommonLayout
            pageTitle="Programmes" // REQUIRED page title for the Programmes page
            breadcrumbItems={programmesBreadcrumbs} // REQUIRED breadcrumbs for the Programmes page
            sidebarNavItems={customProgrammesSidebarItems} // Pass custom sidebar items
            sidebarTitle="Quick Links" // Custom sidebar title, consistent with other Quick Links pages
        >
            <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mx: 'auto',
                        // mt: { xs: 2, md: 4 } // Replaced by Bootstrap mt-4 above
                    }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: greenTextColor,
                            }}
                        >
                            Institute Funded
                            
                        </Typography>
                        <Box id="test" sx={{p: 2,}}>
                            <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'Bold',
                                color: greenTextColor,
                            }}
                        >
                            ICAR Funded
                            
                        </Typography>
                        <List dense={false} sx={{ mt: 1, width: '100%',p:2 }}>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Planning, monitoring and reviewing of KVK activities in the zone; to identify, prioritize and implement various activities related to technology integration and dissemination."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Coordinating with SAUs, ICAR institutes/organizations, line departments and voluntary organizations in the zone for implementation of KVK mandated activities."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="primary" /> {/* Using primary for default color */}
                                </ListItemIcon>
                                <ListItemText
                                    primary="Facilitating financial and infrastructural support to KVKs for effective functioning."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                        </List>
                        </Box>
                        
                    </Box>
                

            
    
        </CommonLayout>
    );
}

export default ProgrammesPage;