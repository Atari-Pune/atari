import React from 'react';
//import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import TableLayout from '../../../Layout/TableLayout'; // Import the TableLayout component
import { Box } from '@mui/material'; // Import Box and Typography for the section title
// Import your combined reports data from reports.json
import allReportsData from '../../../Data/table.json';
import CommonLayout from '../../../Layout/Fixpage/CommonLayout';

import quickLinks from '../../../Data/QuickLinks2.json'; // Import routesConfig
/**
 * Component for the APR Reports page, utilizing the Commonpage layout.
 * This component now uses the TableLayout to display its data,
 * filtered from the combined JSON source.
 */

const customProceedingsReportsSidebarItems = quickLinks.map(obj => {
  return {
    ...obj,
    path: obj.href,
    // Remove oldKey
    ...(delete obj.href && {})
  };
});
const proceedingsreportsBreadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Quick Links', path: '/important-links' }, // Adjust path if 'Quick Links' has its own landing page
  { label: 'Portal' } // Current page, no path for last item
];







const ProceedingsReports = () => {
  const reportsData = allReportsData.filter(report => report.section === 'Proceedings')
    .filter(report => report.section === 'Proceedings')
    .sort((a, b) => b.year - a.year); 
  // Filter the data to show only "Proceedings" for this page
  
  return (
    <CommonLayout
    pageTitle="Proceedings Page" // REQUIRED page title for the Portal page
            breadcrumbItems={proceedingsreportsBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customProceedingsReportsSidebarItems} // Pass custom sidebar items
            sidebarTitle="Quick Links" // Custom sidebar title, consistent with Important Links
    
    
    
    >
      <Box>
        <TableLayout data={reportsData} />
      </Box>
    </CommonLayout>
  );
}

export default ProceedingsReports;
