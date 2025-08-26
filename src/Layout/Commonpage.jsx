import * as React from 'react';
import {
  Box,
  Typography,
  Breadcrumbs,
  Link,
  Paper,
  // Removed Grid as we're moving to Bootstrap grid
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import Sidebar from '../Components/Home/Sidebar/sidebar'; // Assuming Sidebar is in Components/Home/Sidebar
import routesConfig from '../Data/nav.json'; // Import routesConfig
import quickLinksConfig from   '../Data/QuickLinks2.json'; // Import routesConfig
import './style.css'; // Ensure this CSS file contains the necessary styles

/**
 * Helper function to find a route object by its path in the routesConfig.
 * This function recursively searches through children arrays.
 * @param {Array<object>} routes - The array of route objects (e.g., routesConfig).
 * @param {string} path - The path to search for.
 * @returns {object|null} The matching route object, or null if not found.
 */
const findRouteByPath = (routes, path) => {
  for (const route of routes) {
    if (route.path === path) {
      return route;
    }
    if (route.children) {
      const foundChild = findRouteByPath(route.children, path);
      if (foundChild) {
        return foundChild;
      }
    }
  }
  return null;
};

const findRouteByPathInQuickLink = (quickLinksConfig, path) => {
  for (const route of quickLinksConfig) {
    if (route.href === path) {
      return route;
    }
  }
  return null;
};

/**
 * A reusable common page component that provides a consistent responsive layout
 * including a header with a dynamic title, breadcrumbs, and a sidebar.
 * The main content of the page is passed as children.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The main content of the page.
 */
const Commonpage = ({ children }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Determine the current page title dynamically from routesConfig
  var currentPageRoute = findRouteByPath(routesConfig, location.pathname);
  if(currentPageRoute==null)
  {
    currentPageRoute = findRouteByPathInQuickLink(quickLinksConfig, location.pathname);
  }
  const currentPageTitle = currentPageRoute ? currentPageRoute.label : 'Page Not Found'; // Fallback title

  return (
    // Outer Box for background and overall padding
    <Box sx={{ flexGrow: 1, backgroundColor: '#f9f9f9', minHeight: '100vh', p: { xs: 1, sm: 2, md: 3 } }}>
      {/* Bootstrap Container-fluid and Row for responsive grid */}
      <div className="container-fluid"> {/* Use Bootstrap container-fluid */}
        <div className="row"> {/* Use Bootstrap row */}
          {/* Main Content Area - Bootstrap column classes */}
          <div className="col-12 col-md-9"> {/* Takes full width on xs, sm; 9 columns on md and up */}
            {/* Header & Breadcrumbs Paper */}
            <Paper elevation={3} sx={{ p: 3, my: { xs: 1, md: 2 }, backgroundColor: '#ffffff', position: 'relative', animation: 'fadeIn 1s ease-in' }}>
              {/* Header & Breadcrumbs Box */}
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, mb: { xs: 1, sm: 2 } }}>
                <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold', mb: { xs: 1, sm: -2 } }}>
                  {currentPageTitle} {/* Dynamic page title */}
                </Typography>
                <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb" sx={{ mt: { xs: 1, sm: 1 } }}>
                  <Link component={RouterLink} underline="hover" sx={{ color: '#198754' }} to="/">
                    Home
                  </Link>
                  {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    
                    // Find the route in routesConfig for the current breadcrumb segment
                    const routeForBreadcrumb = findRouteByPath(routesConfig, to);
                    // Use the label from routesConfig if found, otherwise format the path segment
                    const breadcrumbLabel = routeForBreadcrumb ? routeForBreadcrumb.label : value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

                    return last ? (
                      <Typography color="#198754" key={to}>
                        {breadcrumbLabel}
                      </Typography>
                    ) : (
                      <Link component={RouterLink} underline="hover" sx={{ color: '#198754' }} to={to} key={to}>
                        {breadcrumbLabel}
                      </Link>
                    );
                  })}
                </Breadcrumbs>
              </Box>
            </Paper>

            {/* Dynamic Content Area */}
            <Paper elevation={3} sx={{ p: 3, borderRadius: 2, backgroundColor: '#ffffff', animation: 'fadeIn 1.5s ease-in' }}>
              {children} {/* Render dynamic content passed to Commonpage */}
            </Paper>
          </div>

          {/* Sidebar - Bootstrap column classes for responsiveness */}
          <div className="col-12 col-md-3 d-none d-md-block" style={{ paddingTop: '15px', paddingLeft: '10px', zIndex: 1 }}> {/* Hidden on xs/sm, visible on md and up */}
            <Sidebar />
          </div>
        </div>
      </div>
    </Box>
  );
};

export default Commonpage;
