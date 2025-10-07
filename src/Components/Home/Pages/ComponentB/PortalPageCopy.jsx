import React from 'react';
import {
  Box,
  useMediaQuery,
  useTheme, Tab, Tabs
} from '@mui/material';
import { useState } from 'react';
import TagLayout from '../../../../Layout/TagLayout'




// Adjust paths as per your project structure
import Commonpage from '../../../../Layout/Commonpage';

import quickLinks from '../../../../Data/QuickLinks2.json'; // Import routesConfig
/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */

const customPortalSidebarItems = quickLinks.map(obj => {
  return {
    ...obj,
    path: obj.href,
    // Remove oldKey
    ...(delete obj.href && {})
  };
});
const portalBreadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Quick Links', path: '/important-links' }, // Adjust path if 'Quick Links' has its own landing page
  { label: 'Portal' } // Current page, no path for last item
];

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */


/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */




const kvkData = [

  {
    university: 'MPKV Rahuri',
    color: '#D1C4E9',
    kvks: [
      { name: 'Dhule', url: 'https://kvkdhule.org/' },
      { name: 'Jalgaon-II', url: 'https://www.kvkjalgaon.org/' },
      { name: 'Satara-II', url: 'https://kvksatara2.org/' },//updated
      { name: 'Solapur-II', url: 'http://www.mpkvkvkmohol.in' },


    ],
  },

  {
    university: 'MAFSU',
    color: '#FFE0B2',
    kvks: [
      { name: 'Nagpur-II', url: 'https://kvknagpur.org.in/' },
      { name: 'Sangli-II', url: 'http://www.kvksangli.in/' },
      { name: 'Thane', url: 'https://kvkratnagiri.in' },
    ],
  },
  {
    university: 'BSKKV Dapoli',
    color: '#FFE0B2',
    kvks: [
      { name: 'Raigad', url: 'https://www.kvkraigad.org' },
      { name: 'Ratnagiri', url: 'https://www.kvkratnagiri.org/' },
    ],
  },

  {
    university: 'ICAR KVK',
    color: '#FFE0B2',
    kvks: [
      { name: 'Nagpur-I', url: 'https://kvknagpur.org.in ' },
    ],
  },
  {
    university: 'PDKV Akola',
    color: '#FFECB3',
    kvks: [
      { name: 'Bhandara', url: 'https://kvksakoli.pdkv.ac.in/' },//updated
      { name: 'Buldhana-II', url: 'https://kvkbuldhana2.in' },
      { name: 'Chandrapur', url: 'http://kvksindewahi.pdkv.ac.in/' },
      { name: 'Gadchiroli', url: 'https://kvkgadchiroli.in' },
      { name: 'Gondia', url: 'kvkhiwra.pdkv.ac.in/' },//updated
      { name: 'Wardha', url: 'https://kvkselsura.pdkv.ac.in/' },
      { name: 'Yavatmal-I', url: 'http://kvkyavatmal.pdkv.ac.in/' },//updated
    ],
  },

  {
    university: 'VNMKV Parbhani',
    color: '#B2DFDB',
    kvks: [
      { name: 'Aurangabad-I', url: 'www.kvkaurangabad1.org' },//updated
      { name: 'Beed-II', url: 'https://kvkbeed2.in' },
      { name: 'Jalna-II', url: 'https://kvkjalna2.in' },
      { name: 'Osmanabad', url: 'https://kvkosmanabad.in' },
    ],
  },
  {
    university: 'YCMOU KVK',
    color: '#FFE0B2',
    kvks: [
      { name: 'Nashik-I', url: 'https://kvknashik.org/' },//updated
    ],
  },

  {
    university: 'NGOs ',
    color: '#fadeb0ff',
    kvks: [
      { name: 'Ahmednagar-I', url: 'https://kvkpravara.com/' },
      { name: 'Ahmednagar-II', url: 'https://kvkdahigaon.org/' },
      { name: 'Akola', url: 'https://www.kvkakola.org/' },
      { name: 'Amravati-I', url: 'http://www.kvkghatkhed.org/' },
      { name: 'Amravati-II', url: 'https://amravati2.kvk8.in/' },
      { name: 'Aurangabad-II', url: 'https://aurangabad2.kvk8.in/' },
      { name: 'Buldhana-I', url: 'https://kvkbuldana.com' },
      { name: 'Beed-I', url: 'https://drikvkbeed.org/' },
      { name: 'Hingoli', url: 'https://kvkhingoli.org/' },
      { name: 'Jalgaon-I', url: 'http://www.kvkpal.in/' },
      { name: 'Jalna-I', url: 'http://kvkjalna.org.in/' },
      { name: 'Kolhapur-I', url: 'https://www.kvkkolhapur.com/' },
      { name: 'Kolhapur-II', url: 'https://kvkkolhapur2.com/' },
      { name: 'Latur', url: 'https://kvklatur.in/' },
      { name: 'Nashik-II', url: 'https://www.kvkmalegaon.org/' },
      { name: 'Nanded-I', url: 'https://www.nanded1.kvk8.in' },
      { name: 'Nanded-II', url: 'http://www.nandurbar.kvk8.in' },
      { name: 'Nandurbar', url: 'https://kvkraigad.in' },
      { name: 'Palghar', url: 'https://www.kvkthane.co.in/' },
      { name: 'Parbhani', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0368' },
      { name: 'Pune-I', url: 'https://www.kvkbaramati.com/' },
      { name: 'Pune-II', url: 'https://www.kvknarayangaon.org/' },
      { name: 'Sangli-I', url: 'https://kvkratnagiri.in' },
      { name: 'Satara-I', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0375' },
      { name: 'Sindhudurg', url: 'https://kvksindhudurg.com/' },
      { name: '	Solapur-I', url: 'https://www.kvksolapur.org/' },
      { name: 'Washim', url: 'https://www.kvkwashim.com/' },
      { name: 'Yavatmal-II', url: 'http://www.kvksangvi.co.in/' },
      //  { name: '', url: 'https://kvkraigad.in' }		

    ],
  },
];

const gujaratKvksData = [
  {
    university: 'NAU Navsari',
    color: '#D1C4E9',
    kvks: [
      { name: 'Surat', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0459' },
      { name: 'Navsari', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0435' },
      { name: 'Tapi	', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0443' },
      { name: 'Narmada', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0436' },
      { name: 'Dang', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0454' },
    ],
  },

  {
    university: 'AAU Anand',

    color: '#FFE0B2',
    kvks: [
      { name: 'Anand', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0453' },
      { name: 'Dahod ', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0457' },
      { name: 'Ahmedabad', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0442' },
    ],
  },
  {
    university: 'JAU Junagadh',
    color: '#FFE0B2',
    kvks: [
      { name: 'Amreli', url: 'https://kvkamreli.business.site/' },
      { name: 'Jamnagar', url: 'http://www.jau.in/index.php/extension-40/krishi-vigyan-kendras-kvks/jamnagar-top' },
      { name: 'Morbi', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=K0646' },
      { name: 'Porbandar', url: 'http://www.jau.in/index.php/extension-40/krishi-vigyan-kendras-kvks/khapat-porbandar' },
      { name: 'Rajkot-I', url: 'http://www.jau.in/index.php/extension-40/krishi-vigyan-kendras-kvks/targhadia-rajkot' },
      { name: 'Rajkot-II', url: 'http://www.jau.in/index.php/extension-40/krishi-vigyan-kendras-kvks/pipaliya' },

      { name: 'Suredranagar', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0437' },
      // { name: '', url: 'https://kvkratnagiri.in' },
    ],
  },

  {
    university: 'SDAU SK Nagar',
    color: '#FFE0B2',
    kvks: [
      { name: 'Banaskantha-I', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0456' },
      { name: 'Banaskantha-II', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0461' },
      { name: 'Sabarkantha', url: 'https://www.sdau.edu.in/detail/508286/krishi-vigyan-kendra-khedbrahma-sabarkantha' },
    ],
  },
  {
    university: 'ICAR KVKs',
    color: '#FFECB3',
    kvks: [
      { name: 'Kutch-II', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0458' },
      { name: 'Panchmahal', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0439' },


    ],
  },

  {
    university: 'NGO ',
    color: '#fadeb0ff',
    kvks: [


      { name: 'Mehsana', url: 'https://kvkmehsana.org/' },

      { name: 'Bharuch	', url: 'https://kvkbharuch.weebly.com/' },
      { name: 'Junagadh', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0434' },
      { name: 'Patan', url: 'http://kvkpatan.in/' },
      { name: 'Kutch-I', url: 'https://rardskvkmundra.org/' },
      { name: 'Vadodara', url: 'http://kvkvadodara.org/' },
      { name: 'Bhavnagar', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0433' }
      //  { name: '', url: 'https://kvkraigad.in' }		

    ],
  },
];
const GoakvkData = [
  {
    university: 'ICAR',
    color: '#FFE0B2',
    kvks: [
      { name: 'North Goa', url: 'https://kvk2.in/goa/index.php' },
    ],
  },
  {
    university: 'State Government',
    color: '#FFECB3',
    kvks: [
      { name: 'South Goa', url: 'https://kvk.icar.gov.in/selected_kvk.aspx?id=k0564' },

    ],
  },

];
const states = [
  { id: 'Maharashtra', label: 'Maharashtra' },
  { id: 'Gujarat', label: 'Gujarat' },
  { id: 'Goa', label: 'Goa' },
];

const stateKvksData = { "Maharashtra": kvkData, "Gujarat": gujaratKvksData, "Goa": GoakvkData }
/**
 * Component for the Portal page.
 */
const PortalPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [selectedTab, setSelectedTab] = useState('Maharashtra');

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };
  const filteredData = kvkData
    .map((group) => {
      const filteredKvks = group.kvks.filter((kvk) =>
        kvk.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (
        group.university.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return group;
      }

      return filteredKvks.length
        ? { ...group, kvks: filteredKvks }
        : null;
    })
    .filter(Boolean);

  return (
    <Commonpage>
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
          {states.map((section) => (
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
      {states.map((state) => (
        <Box
          key={state.id}
          role="tabpanel"
          hidden={selectedTab !== state.id}
          id={`simple-tabpanel-${state.id}`}
          aria-labelledby={`simple-tab-${state.id}`}
          sx={{ p: 0, pt: 2 }} // Consistent padding
        >
          {selectedTab === state.id && (
            <TagLayout selectedState={state.id} data={stateKvksData[state.id]} />
          )}
        </Box>
      ))}

    </Commonpage>
  );
};

export default PortalPage;