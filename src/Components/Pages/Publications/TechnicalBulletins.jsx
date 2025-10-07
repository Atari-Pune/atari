import React from 'react';
import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import TableLayout from '../../../Layout/TableLayout'; // Import the TableLayout component
import { Box } from '@mui/material'; // Import Box and Typography for the section title
// Import your combined reports data from reports.json
import allReportsData from '../../../Data/table.json';

/**
 * Component for the APR Reports page, utilizing the Commonpage layout.
 * This component now uses the TableLayout to display its data,
 * filtered from the combined JSON source.
 */
const TechnicalBulletins = () => {
  // Filter the data to show only "Technical Bulletins" for this page
  const reportsData = allReportsData.filter(report => report.section === 'Technical Bulletins')
  .filter(report => report.section === 'Technical Bulletins')
    .sort((a, b) => b.year - a.year); 
  // Filter the data to show only "Proceedings" for this page
  return (
    <Commonpage>
      <Box>
        <TableLayout data={reportsData} />
      </Box>
    </Commonpage>
  );
}

export default TechnicalBulletins;
