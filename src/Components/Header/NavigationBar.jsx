import React, { useState } from 'react';
import { AppBar, Toolbar, Menu, Box, SvgIcon, IconButton, Drawer, List } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon
import { useNavigate, useLocation, Link as RouterLink } from 'react-router-dom'; // Corrected import for RouterLink
import routesConfig from '../../Data/nav.json'; // Import your centralized routes configuration

/**
 * Renders a menu item, potentially with a nested submenu that opens on click.
 * @param {object} props - The component props.
 * @param {object} props.item - The menu item data (label, path, children, icon).
 * @param {boolean} [props.isRoot=false] - True if this is a top-level menu item.
 * @param {boolean} [props.isLast=false] - True if this is the last item in its current list.
 * @param {boolean} [props.isMobileDrawer=false] - True if rendering within the mobile drawer.
 * @param {function} [props.onDrawerClose] - Function to close the main mobile drawer.
 */
const MenuItemWithSubmenu = ({ item, isRoot = false, isLast = false, isMobileDrawer = false, onDrawerClose }) => {
  // React Hooks must be called unconditionally at the top level of the component.
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false); // State for mobile drawer submenus
  const navigate = useNavigate();
  const location = useLocation();

  // CRITICAL FIX: Add a check for undefined or null 'item' AFTER hook calls
  if (!item) {
    console.warn("MenuItemWithSubmenu received an undefined or null item prop.");
    return null; // Don't render anything if the item is invalid
  }

  const open = Boolean(anchorEl);

  // Determine if the current path or any child path makes this item 'active'
  const isActive = location.pathname === item.path || // Changed from item.link to item.path
    (item.children && item.children.some(child => {
      // Check direct child path
      if (child && location.pathname === child.path) return true; // Changed from child.link to child.path
      // Check grand-children for deeper active states
      return child && child.children && child.children.some(grandChild => grandChild && location.pathname === grandChild.path); // Changed from grandChild.link to grandChild.path
    }));

  // Handles opening the submenu or navigating based on context (desktop/mobile)
  const handleClick = (event) => {
    if (isMobileDrawer) {
      if (item.children) {
        // Toggle visibility of children in mobile drawer (accordion behavior)
        setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
      } else {
        // Close the main drawer for leaf items
        if (item.path && item.path !== '#') { // Changed from item.link to item.path
          navigate(item.path); // Changed from item.link to item.path for navigation
        }
        if (onDrawerClose) {
          onDrawerClose();
        }
      }
    } else {
      // Desktop behavior
      if (item.children) {
        setAnchorEl(event.currentTarget);
      } else {
        // If it's a leaf item (no children), navigate and close its own menu
        if (item.path && item.path !== '#') { // Changed from item.link to item.path
          navigate(item.path); // Changed from item.link to item.path for navigation
        }
        handleClose();
      }
    }
  };

  // Handles closing the submenu for desktop popover menus
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Determine the appropriate arrow icon based on item level and children presence
  let arrowIcon = null;
  if (item.children) {
    if (isMobileDrawer) {
      // For mobile drawer, use down/right arrow to indicate expand/collapse
      arrowIcon = (
        isMobileSubMenuOpen ? (
          <ArrowDropDownIcon sx={{ ml: 1, transition: 'transform 0.2s' }} />
        ) : (
          <KeyboardArrowRightIcon sx={{ ml: 1, transition: 'transform 0.2s' }} />
        )
      );
    } else if (isRoot) {
      // For desktop root level dropdowns, use a down arrow that rotates
      arrowIcon = (
        <ArrowDropDownIcon
          sx={{ ml: 1, transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}
        />
      );
    } else {
      // For nested desktop dropdowns, use a right arrow that rotates
      arrowIcon = (
        <KeyboardArrowRightIcon
          sx={{ ml: 1, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}
        />
      );
    }
  }

  // Define common styles for menu items
  const commonLinkStyles = {
    // Changed active color from 'yellow' to 'lightgreen'
    color: isActive ? 'lightgreen' : 'white',
    textTransform: 'none',
    fontSize: '0.9rem',
    borderRadius: '0px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      boxShadow: 'none',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  };

  // Home item specific rendering: no label, only icon
  const isHomeItem = item.path === '/' && item.icon; // Changed from item.link to item.path

  const itemContent = (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {item.icon && (
        <SvgIcon component={() => <div dangerouslySetInnerHTML={{ __html: item.icon }} />} sx={{ mr: 1 }} />
      )}
      {/* Conditionally render label for home item */}
      {!isHomeItem && item.label}
    </Box>
  );

  // Define border styles based on whether it's a mobile drawer item or a desktop root item
  const itemBorderRight = isRoot && item.path !== '/' ? '1px solid rgba(255, 255, 255, 0.2)' : 'none'; // Changed from item.link to item.path
  // Bottom border for all items in mobile drawer (except last)
  const itemBorderBottom = isMobileDrawer && !isLast ? '1px solid rgba(255, 255, 255, 0.2)' : 'none';

  // --- Render logic for Mobile Drawer ---
  if (isMobileDrawer) {
    return (
      <Box
        component="li" // This Box acts as the <li> element for mobile drawer items
        sx={{
          width: '100%',
          borderBottom: itemBorderBottom,
          display: 'flex',
          flexDirection: 'column', // Stack children vertically for accordion effect
          alignItems: 'flex-start', // Align content to start
          padding: 0, // Remove default padding from li/box
          '&:last-child': {
            borderBottom: 'none', // No border for the last item
          },
        }}
      >
        <Box
          onClick={handleClick}
          role="button"
          tabIndex={0}
          sx={{
            ...commonLinkStyles,
            padding: '8px 16px', // Specific padding for mobile list items
          }}
        >
          {/* For mobile drawer, always use RouterLink for navigation */}
          <RouterLink to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> {/* Changed to item.path */}
            {itemContent}
            {item.children && arrowIcon} {/* Render arrow for parents */}
          </RouterLink>
        </Box>
        {item.children && isMobileSubMenuOpen && (
          // Note: Material-UI List is used here, as it's part of the MenuItemWithSubmenu's internal rendering for mobile
          <List sx={{ pl: 2, width: '100%', padding: 0 }}> {/* Nested list, indented for submenus */}
            {item.children.map((child, index) => (
              <MenuItemWithSubmenu
                key={index}
                item={child}
                isLast={index === item.children.length - 1}
                isMobileDrawer={true}
                onDrawerClose={onDrawerClose}
              />
            ))}
          </List>
        )}
      </Box>
    );
  } else {
    // --- Render logic for Desktop Navigation (Material-UI Menu Popover) ---
    return (
      <Box
        component="li"
        sx={{
          borderRight: itemBorderRight,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {/* Main button/link for desktop */}
        <Box
          aria-controls={open ? `menu-${item.label.replace(/\s/g, '-')}` : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          sx={{
            ...commonLinkStyles,
            padding: '8px 16px', // Specific padding for desktop menu items
            minWidth: isRoot ? 'auto' : '160px', // Min width for nested menu items
          }}
        >
          {item.children ? (
            <>
              {itemContent}
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                {arrowIcon}
              </Box>
            </>
          ) : (
            // For desktop leaf items, use RouterLink for navigation
            <RouterLink to={item.path} style={{ textDecoration: 'none', color: 'inherit', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> {/* Changed to item.path */}
              {itemContent}
              <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
                {arrowIcon}
              </Box>
            </RouterLink>
          )}
        </Box>
        {/* Only render Menu if item has children for desktop popovers */}
        {item.children && (
          // Note: Material-UI Menu and MenuItem are used here, as they are part of the MenuItemWithSubmenu's internal rendering for desktop
          <Menu
            id={`menu-${item.label.replace(/\s/g, '-')}`}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              // Keep the menu open if the mouse is over the menu itself (might not work reliably without custom CSS/JS for nested)
            }}
            anchorOrigin={{
              vertical: isRoot ? 'bottom' : 'top',
              horizontal: isRoot ? 'left' : 'right',
            }}
            transformOrigin={{
              vertical: isRoot ? 'top' : 'top',
              horizontal: isRoot ? 'left' : 'left',
            }}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#198754', // Bootstrap success color for desktop dropdowns
                borderRadius: '0px',
                border: '1px solid #146c43', // Darker shade for border
                mt: isRoot ? '4px' : '0',
                ml: isRoot ? '0' : '4px',
              },
            }}
          >
            {item.children.map((child, index) => (
              // RECURSIVELY RENDER MenuItemWithSubmenu for nested items
              <MenuItemWithSubmenu
                key={index}
                item={child}
                isLast={index === item.children.length - 1}
                isRoot={false} // Nested items are not root
                isMobileDrawer={false} // This is for desktop menus
                onDrawerClose={onDrawerClose} // Pass down the drawer close handler
              />
            ))}
          </Menu>
        )}
      </Box>
    );
  }
};

/**
 * Main App component rendering the Material-UI Navbar.
 */
export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ backgroundColor: '#198754', height: '100%', pt: 2 }}> {/* Bootstrap success color for mobile drawer */}
      <List>
        {routesConfig.map((item, index) => ( // Changed navItems to routesConfig
          <MenuItemWithSubmenu key={index} item={item} isRoot={true} isLast={index === routesConfig.length - 1} isMobileDrawer={true} onDrawerClose={handleDrawerToggle} />
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#198754', // Bootstrap success color for AppBar
          width: '100%',
          boxShadow: 'none', // Remove default AppBar shadow
          borderRadius: '0px', // Apply rounded corners to the App Bar
        }}
      >
        <Toolbar
          sx={{
            minHeight: 'auto', // Override default min-height for Toolbar
            padding: '2px 0', // Reduced padding for smaller navbar height
            justifyContent: 'space-between', // Space between hamburger and nav items
            display: 'flex',
            flexWrap: 'wrap', // Allow items to wrap on smaller screens
          }}
        >
          {/* Hamburger Icon for Mobile */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }} // Show on screens smaller than 'md'
          >
            <MenuIcon />
          </IconButton>

          {/* Desktop Navigation */}
          <Box
            component="ul"
            sx={{
              display: { xs: 'none', md: 'flex' }, // Hide on 'xs' and 'sm', show on 'md' and up
              justifyContent: 'center',
              listStyle: 'none', // Remove bullet points from list
              margin: 0,
              padding: 0,
              flexWrap: 'wrap', // Allow navigation items to wrap
              width: '100%', // Ensure it takes full width of toolbar
            }}
          >
            {routesConfig.map((item, index) => ( // Changed navItems to routesConfig
              <MenuItemWithSubmenu key={index} item={item} isRoot={true} isLast={index === routesConfig.length - 1} isMobileDrawer={false} />
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' }, // Show on 'xs' and 'sm', hide on 'md' and up
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, backgroundColor: '#198754' }, // Bootstrap success color for drawer
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}
