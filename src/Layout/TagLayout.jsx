import React from 'react';
import  { useState } from 'react';
import {
  Box,
 Grid,
  Card,
  CardContent,
  Chip,
  TextField,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material';

/**
 * A reusable dynamic table component.
 * It takes data and column definitions to render a structured table.
 *
 * @param {object} props - The component props.
 * @param {Array<object>} props.data - An array of objects, where each object represents a row of data.
 * @param {Array<object>} [props.columns] - An optional array of column definition objects.
 * If not provided, a default set of columns will be inferred based on common report data keys.
 * Each column object should have:
 * - id (string): A unique identifier for the column, matching a key in the data objects.
 * - label (string): The header text for the column.
 * - align (string, optional): 'left', 'center', or 'right' for text alignment. Defaults to 'left'.
 * - type (string, optional): 'text', 'fileActions', 'custom'. Defaults to 'text'.
 * - fileKey (string, optional): Required if type is 'fileActions'. The key in the data object that holds the file name (e.g., 'fileName').
 * - pathKey (string, optional): Optional. If type is 'fileActions', this is the key in the data object
 * that holds the sub-path/directory for the file (e.g., 'filepath'). If not provided, 'pdf/' is used.
 * - render (function, optional): Required if type is 'custom'. A function (value, row) => ReactNode to render custom cell content.
 */
const TagLayout = ({ data,selectedState }) => {
  const [searchTerm, setSearchTerm] = useState('');
   const theme = useTheme();
   
   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const filteredData = data
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
     <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>

      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        align="center"
        fontWeight="bold"
        color="green"
        gutterBottom
      >
        {selectedState} KVKs Links
      </Typography>

      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <TextField
          label="Search by KVK or university"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: '100%', maxWidth: 500 }}
          size="small"
        />
      </Box>

      <Grid container spacing={3}>
        {filteredData.map((group, idx) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={idx}>
            <Card
              sx={{
                // backgroundColor: group.color,
                borderRadius: 3,
                boxShadow: 4,
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.02)' },
              }}
            >
              <CardContent>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  gutterBottom
                //   color="primary"
                  sx={{ fontSize: { xs: '1rem', sm: '1.1rem' } }}
                >
                  {group.university}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {group.kvks.map((kvk, i) => (
                    <Chip
                      key={i}
                    
                      label={kvk.name}
                      clickable
                      component="a"
                      href={kvk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        backgroundColor: '#198754',
                        color: '#fff',
                        fontWeight: 'bold',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                          backgroundColor: '#0e562bff',
                          boxShadow: '0px 3px 6px rgba(0,0,0,0.2)',
                        },
                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                      }}
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {filteredData.length === 0 && (
        <Typography align="center" sx={{ mt: 4 }} color="text.secondary">
          No KVK found for "{searchTerm}"
        </Typography>
      )}
    </Box>
  );
};

export default TagLayout;
