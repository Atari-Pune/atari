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
  Button,
  Link,
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
const TableLayout = ({ data, columns }) => {
  // Access the environment variable for the base URL for file downloads/views.
  const baseUrl = 'https://ik.imagekit.io/ataripune/assets/document/'//process.env.RESOURCE_ATARI_WEBSITE_URL //||process.env.WEBSITE_URL || process.env.REACT_APP_WEBSITE_URL || 'http://localhost:3000/'; // Fallback for development

  // Define default columns if no 'columns' prop is provided
  const defaultColumns = [
    {
      id: 'fileName',
      label: 'Name',
      align: 'left',
      type: 'custom',
      render: (value, row) => {
        // Use the 'fileName' from the row to derive a display name
        // Remove .pdf extension and any year patterns from the display name
        const displayName = row.fileName.replace(/\.pdf$/, '').replace(/(\d{2}-\d{2}|\d{4})/, '').trim();
        return displayName || 'Report';
      }
    },
    { id: 'year', label: 'Year', align: 'center', type: 'text' },
    // { id: 'filetype', label: 'File Type', align: 'left', type: 'text' }, // Changed from file_type to filetype
    // { id: 'filesize', label: 'File Size', align: 'right', type: 'text' },
    {
      id: 'actions',
      label: 'Actions',
      align: 'center',
      type: 'fileActions',
      fileKey: 'fileName',
      pathKey: 'filepath' // Corrected: Changed from 'section' to 'filepath' to match your JSON structure
    },
  ];

  // Use provided columns if available, otherwise use default columns
  const effectiveColumns = columns && columns.length > 0 ? columns : defaultColumns;

  return (
    <TableContainer component={Paper} elevation={0} sx={{ borderRadius: 2, mt: 2 }}>
      <Table aria-label="dynamic data table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#198754' }}>
            {effectiveColumns.map((column) => (
              <TableCell
                key={column.id}
                align={column.align || 'left'}
                sx={{ color: '#ffffff', fontWeight: 'bold' }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' }, '&:last-child td, &:last-child th': { border: 0 } }}
              >
                {effectiveColumns.map((column, colIndex) => {
                  // Determine the file base path: use pathKey if provided, else default to 'pdf/'
                  const fileBasePath = column.pathKey && row[column.pathKey]
                    ? `${row[column.pathKey].endsWith('/') ? row[column.pathKey] : row[column.pathKey] + '/'}`
                    : 'pdf/';

                  const fullFileUrl = column.fileKey
                    ? `${baseUrl}${fileBasePath}${(row[column.fileKey])}`
                    : '#'; // Fallback if fileKey is missing for fileActions type

                  return (
                    <TableCell
                      key={`${rowIndex}-${column.id}`}
                      align={column.align || 'left'}
                      sx={{ color: '#333333' }}
                    >
                      {column.type === 'fileActions' ? (
                        <Box sx={{ display: 'flex', gap: 1, justifyContent: column.align || 'center' }}>
                          <Link
                            href={fullFileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ textDecoration: 'none' }}
                          >
                            <Button variant="outlined" size="small" sx={{ color: '#198754', borderColor: '#198754', '&:hover': { borderColor: '#146c43', backgroundColor: 'rgba(25, 135, 84, 0.04)' } }}>
                              View 
                            </Button>
                          </Link>
                          <Link
                            href={fullFileUrl}
                            download={row[column.fileKey]}
                            sx={{ textDecoration: 'none' }}
                          >
                            <Button variant="contained" size="small" sx={{ backgroundColor: '#198754', '&:hover': { backgroundColor: '#146c43' } }}>
                              Download
                            </Button>
                          </Link>
                        </Box>
                      ) : column.type === 'custom' && column.render ? (
                        column.render(row[column.id], row)
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={effectiveColumns.length} align="center" sx={{ color: '#333333', py: 3 }}>
                No data found.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableLayout;
