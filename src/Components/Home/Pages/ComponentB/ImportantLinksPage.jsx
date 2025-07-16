import React from 'react';
import { Link as MuiLink } from '@mui/material';
// Adjust paths as per your project structure
import CommonLayout from '../../../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout
import TableLayout from "../../../../Layout/TableLayout";

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 */
const customReleaseOrderCircularsSidebarItems = [
  { label: 'Portal', path: '/portal' },
  { label: 'Important Links', path: '/important-links' },
  { label: 'Release / Order / Circulars', path: '/release-order-circulars' },
  { label: 'Programmes', path: '/programmes' },
  { label: 'Publication', path: '/publications/research-papers-books' },
  { label: 'Vigilance Officer', path: '/vigilance-officer' },
  { label: 'Proceedings', path: '/reports/proceedings' },
  // Add more items as needed for this specific sidebar
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const releaseOrderCircularsBreadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Quick Links', path: '/' }, // Example: assuming a parent route
  { label: 'Important Links' } // Current page, no path for last item
];

/**
 * Component for the Release / Order / Circulars page, now with tabs.
 */
const ImportantLinksPage = () => {

  const importantLinksData =
    [
      {
        "id": "1",
        "link": "https://www.india.gov.in/",
        "image": "https://placehold.co/50x50/ADD8E6/000000?text=Gov",
        "alt": "India Government Portal"
      },
      {
        "id": "2",
        "link": "https://icar.gov.in",
        "image": "https://placehold.co/50x50/90EE90/000000?text=ICAR",
        "alt": "ICAR Portal"
      },
      {
        "id": "3",
        "link": "https://farmer.gov.in/",
        "image": "https://placehold.co/50x50/FFB6C1/000000?text=Farmer",
        "alt": "Farmer Portal"
      },
      {
        "id": "4",
        "link": "https://kvk.icar.gov.in/",
        "image": "https://placehold.co/50x50/DDA0DD/000000?text=KVK",
        "alt": "KVK ICAR Portal"
      },
      {
        "id": "5",
        "link": "https://mkisan.gov.in/",
        "image": "https://placehold.co/50x50/B0E0E6/000000?text=mKisan",
        "alt": "mKisan Portal"
      },
      {
        "id": "6",
        "link": "https://agmarknet.gov.in/",
        "image": "https://placehold.co/50x50/FFDAB9/000000?text=Agmark",
        "alt": "Agmarknet Portal"
      },
      {
        "id": "7",
        "link": "https://digitalindia.gov.in/",
        "image": "https://placehold.co/50x50/C0C0C0/000000?text=Digital",
        "alt": "Digital India Portal"
      },
      {
        "id": "8",
        "link": "https://dpd.gov.in/",
        "image": "https://placehold.co/50x50/87CEEB/000000?text=DPD",
        "alt": "DPD Portal"
      },
      {
        "id": "9",
        "link": "https://gem.gov.in/",
        "image": "https://placehold.co/50x50/F08080/000000?text=GeM",
        "alt": "GeM Portal"
      },
      {
        "id": "10",
        "link": "https://www.nfsm.gov.in/",
        "image": "https://placehold.co/50x50/DA70D6/000000?text=NFSM",
        "alt": "NFSM Portal"
      },
      {
        "id": "11",
        "link": "https://seednet.gov.in/",
        "image": "https://placehold.co/50x50/D2B48C/000000?text=Seednet",
        "alt": "Seednet Portal"
      }
    ]
  // Define columns for the Important Links table
  const importantLinksColumns = [
    {
      id: 'srNo',
      label: 'Sr No',
      align: 'center',
      type: 'custom',
      render: (value, row, index) => index + 1 // Render serial number
    },
    {
      id: 'image',
      label: 'Image',
      align: 'center',
      type: 'custom',
      render: (value, row) => (
        <img src={row.image} alt={row.alt} style={{ width: '50px', height: '50px', borderRadius: '5px' }} />
      )
    },
    {
      id: 'link',
      label: 'Link',
      align: 'left',
      type: 'custom',
      render: (value, row) => (
        <MuiLink
          href={row.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: 'none', color: '#007bff', '&:hover': { textDecoration: 'underline' } }}
        >
          {row.link}
        </MuiLink>
      )
    }
  ];

  return (
    <CommonLayout
      pageTitle="Important Links" // REQUIRED page title
      breadcrumbItems={releaseOrderCircularsBreadcrumbs} // REQUIRED breadcrumbs
      sidebarNavItems={customReleaseOrderCircularsSidebarItems} // Pass custom sidebar items
      sidebarTitle="Quick Links" // Custom sidebar title
    >
      <TableLayout data={importantLinksData} columns={importantLinksColumns} />
    </CommonLayout>
  );
}

export default ImportantLinksPage;

