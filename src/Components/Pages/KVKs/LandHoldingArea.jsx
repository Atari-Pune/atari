import React from 'react';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import Commonpage from '../../../Layout/Commonpage'; // Updated import path for Commonpage layouts
/**
 * Data for KVKs Landholding Area.
 * Each object contains the State, KVK name, and Area in hectares.
 */
const landHoldingData = [
  { state: 'Maharashtra', kvk: 'Ahmednagar-I', area: 24 },
  { state: 'Maharashtra', kvk: 'Ahmednagar-II', area: 20.69 },
  { state: 'Maharashtra', kvk: 'Akola', area: 22.64 },
  { state: 'Maharashtra', kvk: 'Amaravati-I', area: 23.6 },
  { state: 'Maharashtra', kvk: 'Amravati II', area: 20 },
  { state: 'Maharashtra', kvk: 'Aurangabad-I', area: 20 },
  { state: 'Maharashtra', kvk: 'Aurangabad-II', area: 21.19 },
  { state: 'Maharashtra', kvk: 'Beed-I', area: 20.4 },
  { state: 'Maharashtra', kvk: 'Beed II', area: 22 },
  { state: 'Maharashtra', kvk: 'Bhandara', area: 17.3 },
  { state: 'Maharashtra', kvk: 'Buldhana-I', area: 20.59 },
  { state: 'Maharashtra', kvk: 'Buldhana-II', area: 27.84 },
  { state: 'Maharashtra', kvk: 'Chandrapur', area: 26.51 },
  { state: 'Maharashtra', kvk: 'Dhule', area: 20 },
  { state: 'Maharashtra', kvk: 'Gadchiroli', area: 20 },
  { state: 'Maharashtra', kvk: 'Gondia', area: 20 },
  { state: 'Maharashtra', kvk: 'Hingoli', area: 24 },
  { state: 'Maharashtra', kvk: 'Jalgaon-I', area: 20.75 },
  { state: 'Maharashtra', kvk: 'Jalgaon-II', area: 20.22 },
  { state: 'Maharashtra', kvk: 'Jalna-I', area: 20 },
  { state: 'Maharashtra', kvk: 'Jalna-II', area: 20.14 },
  { state: 'Maharashtra', kvk: 'Kolhapur-I', area: 22.45 },
  { state: 'Maharashtra', kvk: 'Kolhapur-II', area: 26 },
  { state: 'Maharashtra', kvk: 'Latur', area: 20 },
  { state: 'Maharashtra', kvk: 'Nagpur-I', area: 25 },
  { state: 'Maharashtra', kvk: 'Nagpur-II', area: 25.77 },
  { state: 'Maharashtra', kvk: 'Nanded-I', area: 20 },
  { state: 'Maharashtra', kvk: 'Nanded-II', area: 21.2 },
  { state: 'Maharashtra', kvk: 'Nandurbar', area: 20.4 },
  { state: 'Maharashtra', kvk: 'Nashik-I', area: 25 },
  { state: 'Maharashtra', kvk: 'Nashik-II', area: 20.21 },
  { state: 'Maharashtra', kvk: 'Osmanabad', area: 20 },
  { state: 'Maharashtra', kvk: 'Palghar', area: 20 },
  { state: 'Maharashtra', kvk: 'Parbhani', area: 20 },
  { state: 'Maharashtra', kvk: 'Pune-I', area: 21.56 },
  { state: 'Maharashtra', kvk: 'Pune-II', area: 20.27 },
  { state: 'Maharashtra', kvk: 'Raigad', area: 21.73 },
  { state: 'Maharashtra', kvk: 'Ratnagiri', area: 20.06 },
  { state: 'Maharashtra', kvk: 'Sangli I', area: 20.658 },
  { state: 'Maharashtra', kvk: 'Sangli II', area: 20 },
  { state: 'Maharashtra', kvk: 'Satara-I', area: 20 },
  { state: 'Maharashtra', kvk: 'Satara-II', area: 20 },
  { state: 'Maharashtra', kvk: 'Sindhudurg', area: 23.71 },
  { state: 'Maharashtra', kvk: 'Solapur-I', area: 21.72 },
  { state: 'Maharashtra', kvk: 'Solapur II', area: 21 },
  { state: 'Maharashtra', kvk: 'Thane', area: 20 },
  { state: 'Maharashtra', kvk: 'Wardha', area: 24.02 },
  { state: 'Maharashtra', kvk: 'Washim', area: 21.5 },
  { state: 'Maharashtra', kvk: 'Yavatmal-I', area: 11.47 },
  { state: 'Maharashtra', kvk: 'Yavatmal-II', area: 20.83 },
  { state: 'Gujarat', kvk: 'Ahmedabad', area: 20 },
  { state: 'Gujarat', kvk: 'Amreli', area: 20 },
  { state: 'Gujarat', kvk: 'Anand', area: 17.85 },
  { state: 'Gujarat', kvk: 'Banaskantha-I', area: 22.89 },
  { state: 'Gujarat', kvk: 'Banaskantha-II', area: 20 },
  { state: 'Gujarat', kvk: 'Bharuch', area: 31.9 },
  { state: 'Gujarat', kvk: 'Bhavnagar', area: 11.93 },
  { state: 'Gujarat', kvk: 'Dahod', area: 21.1 },
  { state: 'Gujarat', kvk: 'Dang', area: 6 },
  { state: 'Gujarat', kvk: 'Gandhinagar', area: 20 },
  { state: 'Gujarat', kvk: 'Jamnagar', area: 20.84 },
  { state: 'Gujarat', kvk: 'Junagadh', area: 20.27 },
  { state: 'Gujarat', kvk: 'Kheda', area: 21.45 },
  { state: 'Gujarat', kvk: 'Kutch-I', area: 20 },
  { state: 'Gujarat', kvk: 'Kutch-II', area: 20.55 },
  { state: 'Gujarat', kvk: 'Mehsana', area: 20.12 },
  { state: 'Gujarat', kvk: 'Morbi', area: 26.21 },
  { state: 'Gujarat', kvk: 'Narmada', area: 21.6 },
  { state: 'Gujarat', kvk: 'Panchmahal', area: 20 },
  { state: 'Gujarat', kvk: 'Navsari', area: 20.59 },
  { state: 'Gujarat', kvk: 'Patan', area: 20 },
  { state: 'Gujarat', kvk: 'Porbandar', area: 20.59 },
  { state: 'Gujarat', kvk: 'Rajkot-I', area: 20 },
  { state: 'Gujarat', kvk: 'Rajkot-II', area: 20 },
  { state: 'Gujarat', kvk: 'Sabarkantha', area: 14.24 },
  { state: 'Gujarat', kvk: 'Surat', area: 14.28 },
  { state: 'Gujarat', kvk: 'Surendranagar', area: 26.35 },
  { state: 'Gujarat', kvk: 'Tapi', area: 8.32 },
  { state: 'Gujarat', kvk: 'Vadodara', area: 20 },
  { state: 'Gujarat', kvk: 'Valsad', area: 20 },
  { state: 'Goa', kvk: 'North Goa', area: 20 },
  { state: 'Goa', kvk: 'South Goa', area: 27.26 },
];

/**
 * Component to display a table of KVKs Landholding Area.
 */
const LandHoldingAreaTable = () => {
  return (
    <Commonpage>
      <Box>
        <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, mt: 2 }}>
          <Table aria-label="land holding area table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#198754' }}>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>Sr. No</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>State</TableCell>
                <TableCell sx={{ color: '#ffffff', fontWeight: 'bold' }}>KVK</TableCell>
                <TableCell align="right" sx={{ color: '#ffffff', fontWeight: 'bold' }}>Area (ha)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {landHoldingData.map((data, index) => (
                <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' }, '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component="th" scope="row" sx={{ color: '#333333' }}>
                    {index + 1}
                  </TableCell>
                  <TableCell sx={{ color: '#333333' }}>{data.state}</TableCell>
                  <TableCell sx={{ color: '#333333' }}>{data.kvk}</TableCell>
                  <TableCell align="right" sx={{ color: '#333333' }}>{data.area}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Commonpage>
  );
};

export default LandHoldingAreaTable;
