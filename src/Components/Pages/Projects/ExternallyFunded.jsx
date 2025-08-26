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
const ExternallyFunded = () => {
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
          Externally Funded

        </Typography>
        <Box id="test" sx={{ p: 2, }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'Bold',
              color: greenTextColor,
            }}
          >
            1.Collaborative Research Project

          </Typography>
          <List dense={false} sx={{ mt: 1, width: '100%', p: 2 }}>
            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              <ListItemText
                primary="Development, Validation and Promotion of Cotton IPM with Major Emphasis on Pink Boll Worm in Jalna, Maharashtra in collaboration with ICAR-NCIPM, New Delhi; ICAR-ATARI, Pune and KVK, Jalna."
                primaryTypographyProps={{
                  variant: 'body1',
                  sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                }}
              />
            </ListItem>

            <Box id="test1" sx={{ p: 2 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 'Bold',
                  color: greenTextColor,
                }}
              >
                2.ICAR Programs/Projects

              </Typography>
              <List dense={false} sx={{ mt: 1, width: '100%', p: 2 }}>
                <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                  <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                  </ListItemIcon>
                  <ListItemText
                    primary="Farmer FIRST Project."
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
                    primary="Attracting and Retaining Youth in Agriculture (ARYA)."
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
                    primary="National Innovations on Climate Resilient Agriculture (NICRA)."
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
                    primary="Cluster Frontline Demonstrations on Pulses."
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
                    primary="Cluster Frontline Demonstrations on Oilseeds."
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
                    primary="Pulses Seed Hub."
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
                    primary="Tribal Sub Plan."
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
                    primary="Nutri-sensitive Agriculture Resources and Innovations (NARI)."
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
                    primary="Value Addition and Technology Incubation Centers in Agriculture (VATICA)."
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
                    primary="Knowledge Systems and Homestead Agriculture Management in Tribal Areas (KSHAMTA)."
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
                    primary="New Extension Methodologies and Approaches (NEMA)."
                    primaryTypographyProps={{
                      variant: 'body1',
                      sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                    }}
                  />
                </ListItem>
              </List>

            </Box></List>

        </Box>

      </Box>




    </CommonLayout>
  );
}


export default ExternallyFunded;