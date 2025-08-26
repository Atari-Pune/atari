import * as React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box // Added Box for direct content sections
} from '@mui/material';

import Commonpage from '../../../Layout/Commonpage'; // Updated import path for Commonpage layouts
import ComponentC from '../../Home/Pages/ComponentC';
const AboutKVKs = () => {
  // The tableData remains specific to this page's content
  const tableData = [
    { organization: 'SAU/CAU', kvks: 509 },
    { organization: 'ICAR Institutes', kvks: 66 },
    { organization: 'NGOs', kvks: 101 },
    { organization: 'State Governments', kvks: 38 },
    { organization: 'Public Sector Undertakings', kvks: 2 },
    { organization: 'Central Universities', kvks: 3 },
    { organization: 'Deemed Universities', kvks: 7 },
    { organization: 'Other Educational Institutions', kvks: 5 },
    { organization: 'Total', kvks: 731, isTotal: true },
  ];

  return (
    // Wrap the page-specific content with the Commonpage layout component
    // The page title ("About Krishi Vigyan Kendras") will be dynamically determined by Commonpage
    // based on the route, so it's no longer explicitly passed here.
    <Commonpage>
      {/* Content Sections */}
      <Typography variant="body1" paragraph sx={{ color: '#333333', lineHeight: 1.7 }}>
        Krishi Vigyan Kendra is a frontline extension model at the district level, aimed at bridging the gap between agricultural research and its practical application.
      </Typography>

      {/* Vision Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold' }}>
          Vision
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333333', lineHeight: 1.7 }}>
          Science and technology-led growth leading to enhanced productivity, profitability, and sustainability of agriculture.
        </Typography>
      </Box>

      {/* Mission Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold' }}>
          Mission
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333333', lineHeight: 1.7 }}>
          Farmer-centric growth in agriculture and allied sectors through the application of appropriate technologies in specific agro-ecosystem perspectives.
        </Typography>
      </Box>

      {/* Mandate Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold' }}>
          Mandate
        </Typography>
        <Typography variant="body1" paragraph sx={{ color: '#333333', lineHeight: 1.7 }}>
          Technology Assessment and Demonstration for its Application and Capacity Development.
        </Typography>
      </Box>
      <ComponentC></ComponentC>

      {/* Activities of KVK Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold' }}>
          Activities of KVK
        </Typography>
        <List sx={{ listStyleType: 'disc', pl: 4 }}>
          {[
            'On-farm testing to assess the location specificity of agricultural technologies under various farming systems.',
            'Organize Frontline Demonstrations to establish the production potential of technologies on the farmers\' fields.',
            'Capacity development of farmers and extension personnel to update their knowledge and skills on modern agricultural technologies.',
            'To work as a knowledge and resource center of agricultural technologies for supporting initiatives of public, private, and voluntary sectors in improving the agricultural economy of the district.',
            'Provide farm advisories using ICT and other media means on varied subjects of farmers.',
          ].map((item, i) => (
            <ListItem key={i} sx={{ display: 'list-item', py: 0.5 }}>
              <ListItemText primary={item} sx={{ color: '#333333' }} />
            </ListItem>
          ))}
        </List>
      </Box>

      {/* KVK Table Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: '#198754', fontWeight: 'bold' }}>
          Host Institution-wise Distribution of KVKs
        </Typography>
        <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ backgroundColor: '#198754', color: '#ffffff', fontWeight: 'bold', borderBottom: 'none' }}>
                  Organizations
                </TableCell>
                <TableCell align="right" sx={{ backgroundColor: '#198754', color: '#ffffff', fontWeight: 'bold', borderBottom: 'none' }}>
                  KVKs
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row, index) => (
                <TableRow key={row.organization} sx={{ backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#ffffff' }}>
                  <TableCell sx={{ color: row.isTotal ? '#198754' : '#333333', fontWeight: row.isTotal ? 'bold' : 'normal' }}>
                    {row.organization}
                  </TableCell>
                  <TableCell align="right" sx={{ color: row.isTotal ? '#198754' : '#333333', fontWeight: row.isTotal ? 'bold' : 'normal' }}>
                    {row.kvks}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Commonpage>
  );
};

export default AboutKVKs;
