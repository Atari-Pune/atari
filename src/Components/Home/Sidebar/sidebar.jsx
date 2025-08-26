import React, { useState, useEffect } from 'react';
import { Box, List, Typography, Divider, SvgIcon, Paper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate, useLocation } from 'react-router-dom';
import routesConfig from '../../../Data/nav.json';
import Events from '../../Pages/Gallery/Events'

/**
 * Helper function to find the top-level parent based on the current path.
 * This is crucial for determining which section's sub-navigation to display.
 * @param {Array} routes - The full array of top-level navigation routes.
 * @param {string} pathname - The current URL path.
 * @returns {object | null} The top-level route object that matches the current path, or null.
 */
const findCurrentTopLevelRoutes = (routes, pathname) => {
    // Iterate through top-level routes to find the one that is the 'parent'
    // for the current pathname.
    for (const route of routes) {
        // Ensure it has children to be displayed in a sub-navigation
        // and that the current pathname starts with this route's path,
        // but not if the route itself is just '/' (unless you want all main nav items as sub-nav on home)
        if (route.children && pathname.startsWith(route.path) && route.path !== '/') {
            return route;
        }
    }
    return null; // No relevant top-level route found for sub-navigation
};


/**
 * Renders a single item in the sub-navigation list, with accordion functionality for nested items.
 *
 * @param {object} props - The component props.
 * @param {object} props.item - The menu item data (label, path, children, icon).
 * @param {number} [props.level=0] - The nesting level of the item (for indentation).
 */
const SubNavigationListItem = ({ item, level = 0 }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // Determine if this item or any of its children/grandchildren are active.
    // This also helps to automatically open parent accordions if a deeper child is active.
    const isActive = location.pathname === item.path ||
        (item.children && item.children.some(child => {
            if (location.pathname === child.path) return true;
            return child.children && child.children.some(grandChild => location.pathname === grandChild.path);
        }));

    // Auto-open accordion if a child is active initially
    useEffect(() => {
        if (isActive && item.children) {
            setIsOpen(true);
        }
    }, [isActive, item.children]);

    const handleClick = () => {
        if (item.children) {
            setIsOpen(!isOpen); // Toggle accordion for parent items
        } else if (item.path && item.path !== '#') {
            navigate(item.path); // Navigate for leaf items
        }
    };

    const arrowIcon = item.children ? (
        isOpen ? (
            <ArrowDropDownIcon sx={{ ml: 1, transition: 'transform 0.2s' }} />
        ) : (
            <KeyboardArrowRightIcon sx={{ ml: 1, transition: 'transform 0.2s' }} />
        )
    ) : null;

    const itemContent = (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {item.icon && (
                <SvgIcon component={() => <div dangerouslySetInnerHTML={{ __html: item.icon }} />} sx={{ mr: 1 }} />
            )}
            {item.label}
        </Box>
    );

    // Styles for the individual list item (looking like a tab)
    const itemStyles = {
        color: isActive ? 'lightgreen' : 'white',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        textTransform: 'none',
        fontSize: '0.9rem',
        borderRadius: '0px', // Ensure individual items are not rounded
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: `8px ${16 + level * 16}px`, // Indent sub-items
    };

    return (
        <Box
            component="li"
            sx={{
                width: '100%',
                borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
                '&:last-child': { borderBottom: 'none' },
            }}
        >
            <Box
                onClick={handleClick}
                role="button"
                tabIndex={0}
                sx={itemStyles}
            >
                {itemContent}
                {arrowIcon}
            </Box>
            {item.children && isOpen && (
                <List sx={{ pl: 0, width: '100%', padding: 0 }}>
                    {item.children.map((child, index) => (
                        <SubNavigationListItem
                            key={index}
                            item={child}
                            level={level + 1}
                        />
                    ))}
                </List>
            )}
        </Box>
    );
};

/**
 * Renders a sub-navigation list suitable for embedding directly into page content.
 * It displays sub-navigation based on the current top-level route and does not use a Drawer.
 */
const SubNavigationList = () => {
    const location = useLocation();
    const [sidebarContentItems, setSidebarContentItems] = useState([]);
    const [sidebarTitle, setSidebarTitle] = useState("Navigation");

    useEffect(() => {
        // Find the top-level route whose children should populate this sub-navigation list
        const currentTopLevelRoute = findCurrentTopLevelRoutes(routesConfig, location.pathname);

        if (currentTopLevelRoute && currentTopLevelRoute.children) {
            // Add the parent route itself as the first item in the sidebar content
            const parentItem = {
                label: `Overview`, // You can customize this label
                path: `#`, //currentTopLevelRoute.path
                icon: currentTopLevelRoute.icon // Use parent's icon if available
            };
            setSidebarContentItems([parentItem, ...currentTopLevelRoute.children]);
            setSidebarTitle(currentTopLevelRoute.label);
        } else {
            setSidebarContentItems([]);
            setSidebarTitle("Navigation");
        }
    }, [location.pathname]);

    // If no relevant sub-navigation items, display a placeholder inside the Paper
    if (sidebarContentItems.length === 0 || !location.pathname.startsWith('/')) {
        return (
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    py: 3,
                    height: '700px', // Set a fixed height for the placeholder
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '0px',
                    overflowY: 'auto', // Ensure scrolling if content exceeds fixed height
                    position: 'sticky', // Added sticky position
                    top: 0, // Stick to the top of the viewport
                    zIndex: 1000, // Ensure it stays above other content
                }}
            >
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    No specific sub-navigation available for this section.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper
            elevation={0} // Removed shadow as requested
            sx={{
                width: '100%',
                height: '700px', // Set a fixed height for the main sidebar content
                backgroundColor: '#198754',
                color: 'white',
                p: 0, // Reset Paper's default padding to 0
                pt: 2, // Added top padding to the Paper container
                pb: 2, // Added bottom padding to the Paper container
                overflowY: 'auto', // Allow scrolling if content is long
                borderRadius: '0px', // Ensure the main Paper is not rounded
                position: 'sticky', // Added sticky position
                top: 0, // Stick to the top of the viewport
                zIndex: 1000, // Ensure it stays above other content
            }}
        >
            <Box sx={{ px: 2, pb: 1 }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                    {sidebarTitle}
                </Typography>
                <Divider sx={{ mt: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </Box>
            <List sx={{ padding: 0 }}>
                {sidebarContentItems.map((item, index) => (
                    <SubNavigationListItem key={index} item={item} level={0} />
                ))}
               
            </List>
            
             {location.pathname === '/gallery/photo-gallery' && <Events/>}
        </Paper>
    );
};

export default SubNavigationList;
