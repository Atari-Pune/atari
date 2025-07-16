// src/Layout/Fixpage/CommonLayout.jsx
import React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Link as RouterLink } from 'react-router-dom';
// routesConfig and useLocation are NO LONGER imported or used for content here.

// Import your new SidebarLayout
import SidebarLayout from './SidebarLayout'; // Ensure this path is correct

/**
 * A common page layout component that provides a consistent responsive structure,
 * including a header with a page title, breadcrumbs, and a sidebar.
 * All content (title, breadcrumbs, sidebar) is expected to be passed via props.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The main content of the page.
 * @param {string} props.pageTitle - The title for the page header. This is now REQUIRED.
 * @param {Array<object>} props.breadcrumbItems - An array of breadcrumb items. This is now REQUIRED.
 * Each item should be { label: string, path?: string }. The last item should have no path.
 * @param {Array<object>} [props.sidebarNavItems] - Optional custom navigation items for the sidebar.
 * These are passed directly to SidebarLayout.
 * @param {string} [props.sidebarTitle] - Optional custom title for the sidebar.
 */
const CommonLayout = ({ children, pageTitle, breadcrumbItems, sidebarNavItems, sidebarTitle }) => {

  // No dynamic calculation of pageTitle or breadcrumbItems from location/routesConfig.
  // They are expected to be fully provided by the parent component.

  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#f9f9f9', minHeight: '100vh', p: { xs: 1, sm: 2, md: 3 } }}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-9">
            <Paper elevation={3} sx={{ p: 3, my: { xs: 1, md: 2 }, backgroundColor: '#ffffff', position: 'relative', animation: 'fadeIn 1s ease-in' }}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, mb: { xs: 1, sm: 2 } }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold', mb: { xs: 1, sm: -2 } }}>
                  {pageTitle} {/* Use the REQUIRED pageTitle prop */}
                </Typography>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mt: { xs: 1, sm: 1 } }}>
                  {breadcrumbItems.map((item, index) => (
                    // The last breadcrumb item typically isn't a link
                    item.path ? (
                      <Link component={RouterLink} underline="hover" sx={{ color: '#198754' }} to={item.path} key={item.path || item.label}>
                        {item.label}
                      </Link>
                    ) : (
                      <Typography color="#198754" key={item.label}>
                        {item.label}
                      </Typography>
                    )
                  ))}
                </Breadcrumbs>
              </Box>
            </Paper>

            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: '#ffffff', animation: 'fadeIn 1.5s ease-in' }}>
              {children}
            </Paper>
          </div>

          <div className="col-12 col-md-3 d-none d-md-block" style={{ paddingTop: '15px', paddingLeft: '10px', zIndex: 1 }}>
            {/* SidebarLayout now receives its content solely from props */}
            <SidebarLayout navItems={sidebarNavItems} title={sidebarTitle} />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default CommonLayout;