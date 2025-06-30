import React, { useState } from 'react';
import { AppBar, Toolbar, Menu, Box, SvgIcon, IconButton, Drawer, List } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MenuIcon from '@mui/icons-material/Menu'; // Hamburger icon

// Data structure for navigation items, including nested children and icons
const navItems = [
  {
    label: '', // Empty label for icon-only home button
    link: '#',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-house-fill" viewBox="0 0 16 16">
             <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
             <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
           </svg>`,
  },
  {
    label: 'About us',
    link: '#',
    children: [
      { label: 'Organisational set up', link: '#' },
      { label: 'Mission', link: '#' },
      { label: 'Vision', link: '#' },
    ],
  },
  { label: 'Staff', link: '#' },
  {
    label: 'KVKs',
    link: '#',
    children: [
      { label: 'About KVKs', link: '#' },
      {
        label: 'KVKs of ICAR-ATARI',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'Vice-Chancellors of SAU / CAU',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'Comptroller of SAUs',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'Directors of ICAR Insitutes',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'Presidents of NGOs',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'Directors of Extension Education',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'ATICs',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'Senior Scientist & Head',
        link: '#',
        children: [
          { label: 'Rajasthan', link: '#' },
          { label: 'Haryana', link: '#' },
          { label: 'Delhi', link: '#' },
        ],
      },
      {
        label: 'SAC Meeting',
        link: '#',
        children: [
          {
            label: '2017 - 18',
            link: '#',
            children: [
              { label: 'Rajasthan', link: '#' },
              { label: 'Haryana', link: '#' },
              { label: 'Delhi', link: '#' },
            ],
          },
          {
            label: '2018 - 19',
            link: '#',
            children: [
              { label: 'Rajasthan', link: '#' },
              { label: 'Haryana', link: '#' },
              { label: 'Delhi', link: '#' },
            ],
          },
          {
            label: '2019 - 20',
            link: '#',
            children: [
              { label: 'Rajasthan', link: '#' },
              { label: 'Haryana', link: '#' },
              { label: 'Delhi', link: '#' },
            ],
          },
        ],
      },
      { label: 'Reporting Format', link: '#' },
    ],
  },
  { label: 'Projects', link: '#' },
  { label: 'RTI', link: '#' },
  { label: 'Gallery', link: '#' },
  {
    label: 'Reports',
    link: '#',
    children: [
      { label: 'NPR', link: '#' },
      { label: 'QPR', link: '#' },
      { label: 'APR', link: '#' },
    ],
  },
  { label: 'Contact', link: 'Contact.html' },
  { label: 'Online Payment', link: '#' },
];

/**
 * Renders a menu item, potentially with a nested submenu that opens on click.
 * @param {object} props - The component props.
 * @param {object} props.item - The menu item data (label, link, children, icon).
 * @param {boolean} [props.isRoot=false] - True if this is a top-level menu item.
 * @param {boolean} [props.isLast=false] - True if this is the last item in its current list.
 * @param {boolean} [props.isMobileDrawer=false] - True if rendering within the mobile drawer.
 * @param {function} [props.onDrawerClose] - Function to close the main mobile drawer.
 */
const MenuItemWithSubmenu = ({ item, isRoot = false, isLast = false, isMobileDrawer = false, onDrawerClose }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isMobileSubMenuOpen, setIsMobileSubMenuOpen] = useState(false); // State for mobile drawer submenus
  const open = Boolean(anchorEl);

  // Handles opening the submenu on click
  const handleClick = (event) => {
    if (isMobileDrawer) {
      if (item.children) {
        // Toggle visibility of children in mobile drawer (accordion behavior)
        setIsMobileSubMenuOpen(!isMobileSubMenuOpen);
      } else {
        // Close the main drawer for leaf items
        if (onDrawerClose) {
          onDrawerClose();
        }
      }
    } else {
      // Desktop behavior
      if (item.children) {
        setAnchorEl(event.currentTarget);
      } else {
        // If it's a leaf item (no children), close its own menu
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

  // Define border styles based on whether it's a mobile drawer item or a desktop root item
  const itemBorderRight = isRoot && !isLast && !isMobileDrawer ? '1px solid rgba(255, 255, 255, 0.2)' : 'none';
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
        }}
      >
        <Box
          onClick={handleClick}
          role="button"
          tabIndex={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            color: 'white',
            textTransform: 'none',
            fontSize: '0.9rem',
            padding: '8px 16px',
            cursor: 'pointer',
            '&:hover': {
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              boxShadow: 'none',
            },
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {item.icon && (
              <SvgIcon component={() => <div dangerouslySetInnerHTML={{ __html: item.icon }} />} sx={{ mr: 1 }} />
            )}
            {item.label}
          </Box>
          {item.children && arrowIcon} {/* Render arrow for parents */}
        </Box>
        {item.children && isMobileSubMenuOpen && (
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
        <Box
          aria-controls={open ? `menu-${item.label.replace(/\s/g, '-')}` : undefined}
          aria-haspopup="true"
          onClick={handleClick}
          role="button"
          tabIndex={0}
          sx={{
            color: 'white',
            textTransform: 'none',
            fontSize: '0.9rem',
            padding: '8px 16px',
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
            minWidth: isRoot ? 'auto' : '160px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {item.icon && (
              <SvgIcon component={() => <div dangerouslySetInnerHTML={{ __html: item.icon }} />} sx={{ mr: 1 }} />
            )}
            {item.label}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1 }}>
            {arrowIcon}
          </Box>
        </Box>
        {/* Only render Menu if item has children for desktop popovers */}
        {item.children && (
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
              <MenuItemWithSubmenu key={index} item={child} isLast={index === item.children.length - 1} isMobileDrawer={false} />
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
        {navItems.map((item, index) => (
          <MenuItemWithSubmenu key={index} item={item} isRoot={true} isLast={index === navItems.length - 1} isMobileDrawer={true} onDrawerClose={handleDrawerToggle} />
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
            {navItems.map((item, index) => (
              <MenuItemWithSubmenu key={index} item={item} isRoot={true} isLast={index === navItems.length - 1} isMobileDrawer={false} />
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
