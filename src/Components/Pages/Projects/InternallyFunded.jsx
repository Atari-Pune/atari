// import React from 'react';
// import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
// import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout

import React from 'react';
import { Box, Typography, ListItemIcon, ListItem, ListItemText, List } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// Adjust paths as per your project structure
import CommonLayout from '../../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout


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
const programmesBreadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Quick Links', path: '/important-links' }, // Assuming Quick Links is a parent category
  { label: 'Programmes', path: '' } // Current page, no path for last item
];
/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
const InternallyFunded = () => {
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
        <Box id="test" sx={{ p: 2, }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'Bold',
              color: greenTextColor,
            }}
          >
            ICAR Funded

          </Typography>
          <List dense={false} sx={{ mt: 1, width: '100%', p: 2 }}>
            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Impact of ARYA on promotion of agri-preneurship and attractive livelihoods."
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
                primary="Impact of technological interventions of KVKs on socio-economic empowerment and sustainable livelihood security of tribal farmers."
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
                primary="Income enhancement through KVKs interventions under Doubling Farmers' Income programme."
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
                primary="Impact assessment of popular pulses varieties and technologies disseminated through Cluster Frontline Demonstrations of Pulses (CFLD-P) in India."
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
                primary="Impact of climate resilient technologies in different agro-climatic zones in India- A study in National Innovations
in Climate Resilient Agriculture (NICRA) Project areas."
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
                primary="Assessing impact of nutri-small villages on dietary pattern, consumption level and food availability in India."
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
                primary="Network project on analysis of agriculture and micro irrigation programmes in aspirational districts in India."
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

export default InternallyFunded;