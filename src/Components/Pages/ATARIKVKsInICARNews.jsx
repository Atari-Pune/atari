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
  Card,
  CardContent,
  Typography,
  Grid,
  useMediaQuery,
} from "@mui/material";

const newsData = Array.from({ length: 100 }, (_, i) => ({
  title: `News Item ${i + 1}`,
  date: "Aug 2025",
  category: "General",
  size: `${(Math.random() * 5 + 1).toFixed(1)} MB`,
  link: "https://ik.imagekit.io/ataripune/assets/news-updates/news/16.07.2025%20AZW%202025%20ATARI%20Pune%20-Programme%20Schedule.pdf?updatedAt=1753097044072",
}));

export default function NewsTableResponsive() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedData = newsData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper sx={{ width: "100%", overflow: "hidden", p: 2 }}>
      {isMobile ? (
        // ---- MOBILE: Card view ----
        <Grid container spacing={2}>
          {paginatedData.map((news, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {news.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Date: {news.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Category: {news.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Size: {news.size}
                  </Typography>
                  <div style={{ marginTop: 8 }}>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "green", borderColor: "green", mr: 1 }}
                      href={news.link}
                    >
                      VIEW
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "green" }}
                      href={news.link}
                    >
                      DOWNLOAD
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // ---- DESKTOP: Table view with sticky header ----
        <TableContainer sx={{ maxHeight: 500 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ backgroundColor: "green" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  News Title
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Date
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Category
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  File Size
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.map((news, index) => (
                <TableRow
                  key={index}
                  sx={{
                    backgroundColor: index % 2 === 0 ? "white" : "#f9f9f9",
                  }}
                >
                  <TableCell>{news.title}</TableCell>
                  <TableCell>{news.date}</TableCell>
                  <TableCell>{news.category}</TableCell>
                  <TableCell>{news.size}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ color: "green", borderColor: "green", mr: 1 }}
                      href={news.link}
                    >
                      VIEW
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ backgroundColor: "green" }}
                      href={news.link}
                    >
                      DOWNLOAD
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Pagination */}
      <TablePagination
        component="div"
        count={newsData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 20, 50]}
      />
    </Paper>
  );
}
