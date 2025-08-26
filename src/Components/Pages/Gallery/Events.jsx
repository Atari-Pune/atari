import React, { useState ,useEffect} from "react";
import { Box, List, Typography, Divider, SvgIcon, Paper } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */

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
          
        </Box>
    );
};

const items = [
  { id: 1, label: "VIP", path: "/gallery/photo-gallery?event=nature" },
  { id: 2, label: "Events", path:  "/gallery/photo-gallery?event=architecture" },
  { id: 3, label: "Other", path: "/gallery/photo-gallery?event=interior"}
];
const Events = () => {
  const [activeTab, setActiveTab] = useState("nature");
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
   <Paper
               elevation={0} // Removed shadow as requested
               sx={{
                   width: '100%',
                   backgroundColor: '#198754',
                   color: 'white',
                  //  p: 0, // Reset Paper's default padding to 0
                  // Added top padding to the Paper container
                    // Added bottom padding to the Paper container
                   overflowY: 'hidden', // Allow scrolling if content is long
                   borderRadius: '0px', // Ensure the main Paper is not rounded
                   position: 'sticky', // Added sticky position
                   top: 0, // Stick to the top of the viewport
                   zIndex: 1000, // Ensure it stays above other content
               }}
           >
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
         <List sx={{ padding: 0 }}>
                       {items.map((item, index) => (
                           <SubNavigationListItem key={index} item={item} level={0} />
                       ))}
                      
                   </List>
        
      </Box>
    </Paper>
  );
}

export default Events;
