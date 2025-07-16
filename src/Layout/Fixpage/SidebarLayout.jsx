// src/Components/Home/Sidebar/sidebar.jsx (renamed from SubNavigationList for clarity based on previous context)
import React, { useState, useEffect } from 'react';
import { Box, List, Typography, Divider, SvgIcon, Paper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate, useLocation } from 'react-router-dom';
// routesConfig is NO LONGER imported or used for content determination here.

/**
 * Renders a single item in the sub-navigation list, with accordion functionality for nested items.
 *
 * @param {object} props - The component props.
 * @param {object} props.item - The menu item data (label, path, children, icon).
 * @param {number} [props.level=0] - The nesting level of the item (for indentation).
 */
const SubNavigationListItem = ({ item, level = 0 }) => {
    const navigate = useNavigate();
    const location = useLocation(); // Still needed for isActive check

    const [isOpen, setIsOpen] = useState(false);

    // Determine if this item or any of its children/grandchildren are active.
    // This still relies on location.pathname to highlight the active link.
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

    const itemStyles = {
        color: isActive ? 'lightgreen' : 'white',
        backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
        textTransform: 'none',
        fontSize: '0.9rem',
        borderRadius: '0px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        padding: `8px ${16 + level * 16}px`,
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
 * It now relies entirely on the `navItems` prop for its content.
 *
 * @param {object} props - The component props.
 * @param {Array<object>} props.navItems - An array of navigation items to display. This is now REQUIRED.
 * @param {string} [props.title] - An optional custom title for the sidebar.
 */
const SubNavigationList = ({ navItems = [], title = "Navigation" }) => {
    // No useLocation or routesConfig dependency for content determination
    // All content comes from props.

    // If no navigation items are provided, display a placeholder.
    if (navItems.length === 0) {
        return (
            <Paper
                elevation={0}
                sx={{
                    p: 2,
                    py: 3,
                    height: '700px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#e0e0e0',
                    borderRadius: '0px',
                    overflowY: 'auto',
                    position: 'sticky',
                    top: 0,
                    zIndex: 1000,
                }}
            >
                <Typography variant="body2" color="text.secondary" textAlign="center">
                    No specific sub-navigation available.
                </Typography>
            </Paper>
        );
    }

    return (
        <Paper
            elevation={0}
            sx={{
                width: '100%',
                height: '700px',
                backgroundColor: '#198754',
                color: 'white',
                p: 0,
                pt: 2,
                pb: 2,
                overflowY: 'auto',
                borderRadius: '0px',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
            }}
        >
            <Box sx={{ px: 2, pb: 1 }}>
                <Typography variant="h6" sx={{ color: 'white' }}>
                    {title}
                </Typography>
                <Divider sx={{ mt: 1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </Box>
            <List sx={{ padding: 0 }}>
                {navItems.map((item, index) => (
                    <SubNavigationListItem key={index} item={item} level={0} />
                ))}
            </List>
        </Paper>
    );
};

export default SubNavigationList;