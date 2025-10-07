import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
  TextField,
  Box,
} from "@mui/material";
import newsData from "../../Data/newsData.json"; // import your JSON file
import CommonLayout from '../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout
import quickLinks from '../../Data/QuickLinks2.json'; // Import routesConfig
/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */

const customReleaseOrderCircularsSidebarItems =quickLinks.map(obj => {
  return {
    ...obj,
    path: obj.href,
    // Remove oldKey
    ...(delete obj.href && {})
  };
});



/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const portalBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'ATARI News' } // Current page, no path for last item
];

export default function NewsTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
const newsPdfbaseUrl = 'https://ik.imagekit.io/ataripune/assets/document/pdf/News Folder/'
const newsDataSorted=newsData.slice().sort((a, b) => {
    // Convert 'dd.mm.yyyy' to 'yyyy-mm-dd' so Date object can parse it correctly
    const [dayA, monthA, yearA] = a.date.split('.');
    const [dayB, monthB, yearB] = b.date.split('.');

    const dateA = new Date(`${yearA}-${monthA}-${dayA}`);
    const dateB = new Date(`${yearB}-${monthB}-${dayB}`);

    return dateB - dateA; // descending
  });
  // 🔎 Filter news by title or date
  const filteredData = newsDataSorted.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.date.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
     <CommonLayout
            pageTitle="ATARI News" // REQUIRED page title for the Portal page
            breadcrumbItems={portalBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customReleaseOrderCircularsSidebarItems} // Pass custom sidebar items
            sidebarTitle="Quick Links" // Custom sidebar title, consistent with Important Links
        >
    <Paper sx={{ width: "100%", overflow: "hidden", p: 2 }}>
      {/* 🔍 Search bar */}
      <Box sx={{ mb: 2 }}>
        <TextField
          label="Search by Title or Date"
          variant="outlined"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Box>

      <TableContainer>
        <Table>
          <TableHead sx={{ backgroundColor: "green" }}>
            <TableRow>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Title
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Date
              </TableCell>
              
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((news, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                  }}
                >
                  <TableCell sx={{ width:'65%'}}>{news.title}</TableCell>
                  <TableCell>{news.date}</TableCell>
                  
                  
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "green", borderColor: "green", mr: 1 }}
                      href={newsPdfbaseUrl+news.viewLink}
                      target="_blank"
                    >
                      VIEW
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "green" }}
                      href={newsPdfbaseUrl+news.viewLink}
                      target="_blank"
                    >
                      DOWNLOAD
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
      />
    </Paper>
    </CommonLayout>
  );
}
