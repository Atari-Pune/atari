import React, { useState } from 'react';
import Commonpage from '../../../Layout/Commonpage';
import TableLayout from '../../../Layout/TableLayout';
import { Box, Tab, Tabs } from '@mui/material'; // Import Tabs from @mui/material

import allReportsData from '../../../Data/table.json';

/**
 * Component for the Research Papers, Reviews, Books, and Presentations page.
 * It uses a tabbed interface to display data filtered by section.
 */
const JourneyBooks = () => {

  const [selectedTab, setSelectedTab] = useState('ATARIJourney'); // Default to 'Review Papers' tab
  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
    
  };
  
  
  // Define the sections and their corresponding tab labels
  const sections = [
       
        { id: 'ATARIJourney', label: '5 Years Journey Of ATARI' },
         { id: 'KVKJourney', label: 'Journey Of KVKs' }
    // { id: 'Research Papers', label: 'Research Papers' },
     //{ id: 'Books', label: 'Books' },
  ];
  
  

  return (
    <Commonpage>
      <Box>
        {/* Replaced TabContext and TabList with Tabs from @mui/material */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={selectedTab}
            onChange={handleChange}
            aria-label="publication sections tabs"
            // Removed 'centered' prop to align tabs to the left
            variant="scrollable" // Make tabs scrollable if they overflow
            scrollButtons="auto" // Show scroll buttons automatically
            textColor="primary" // Use primary color for text
            indicatorColor="primary" // Use primary color for indicator
            sx={{
              '& .MuiTabs-indicator': {
                backgroundColor: '#198754', // Green indicator
              },
              // Added flexGrow: 1 to the Box containing Tabs to allow it to take available space,
              // and removed centered property from Tabs to align left.
              justifyContent: 'flex-start', // Align tabs to the start (left)
            }}
          >
            {sections.map((section) => (
              <Tab
                key={section.id}
                label={section.label}
                value={section.id}
                sx={{
                  textTransform: 'none', // Prevent uppercase
                  fontWeight: 'bold',
                  color: '#198754', // Green color for inactive tabs
                  '&.Mui-selected': {
                    color: '#198754', // Green color for active tab
                    backgroundColor: 'rgba(25, 135, 84, 0.08)', // Light green background for active tab
                  },
                  '&.Mui-focusVisible': {
                    backgroundColor: 'rgba(25, 135, 84, 0.15)', // Focus style
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Manually render TabPanel content based on selectedTab */}
        {sections.map((section) => (
          <Box
            key={section.id}
            role="tabpanel"
            hidden={selectedTab !== section.id}
            id={`simple-tabpanel-${section.id}`}
            aria-labelledby={`simple-tab-${section.id}`}
            sx={{ p: 0, pt: 2 }} // Consistent padding
          >
            {selectedTab === section.id && (
              <TableLayout 
  data={allReportsData
    .filter(report => report.section === section.id) // filtering
    .sort((a, b) => new Date(b.year) - new Date(a.year)) // sorting by year (descending)
  } 
/>
              // <TableLayout data={allReportsData.filter(report => report.section === section.id).sort((a, b) => new Date(b.year) - new Date(a.year)} />
            )}
          </Box>
        ))}
      </Box>
    </Commonpage>
  );
}

export default JourneyBooks;
