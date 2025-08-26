import React from "react";
import {
  Container,Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Grid,
} from "@mui/material";
import Commonpage from '../../../../Layout/Commonpage';

const data = [
  {
    activity: "Digitization of office records/ e-office",
    specific: 7,
    others: 16,
    total: 23,
  },
  { activity: "Basic maintenance", specific: 12, others: 21, total: 33 },
  { activity: "Sanitation and SWM", specific: 27, others: 69, total: 96 },
  {
    activity: "Cleaning and beautification of surrounding areas",
    specific: 58,
    others: 149,
    total: 207,
  },
  {
    activity:
      "Vermicomposting/ Composting of biodegradable waste management & other activities on generate of wealth for waste",
    specific: 6,
    others: 13,
    total: 19,
  },
  {
    activity: "Used water for agriculture/ horticulture application",
    specific: 0,
    others: 11,
    total: 11,
  },
  {
    activity: "Swachhata awareness at local level",
    specific: 17,
    others: 45,
    total: 62,
  },
  { activity: "Swachhata pledge", specific: 21, others: 53, total: 74 },
  { activity: "Display and Banner", specific: 19, others: 47, total: 66 },
  { activity: "Foster healthy competition", specific: 6, others: 14, total: 20 },
  {
    activity: "Involvement of print and electronic media",
    specific: 7,
    others: 13,
    total: 20,
  },
  {
    activity:
      "Involving and with the help of the farmers, farm women and village youth in their adopted villages",
    specific: 21,
    others: 53,
    total: 74,
  },
  {
    activity: "No. of staff members involved in the activities",
    specific: 721,
    others: 721,
    total: 721,
  },
  {
    activity: "No. of VIP/VVIPs involved in the activities",
    specific: 23,
    others: 15,
    total: 38,
  },
];

export default function SwachhataProgram() {
  return (
    <Commonpage>
    <Container maxWidth="lg" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
      {/* Heading */}
      <Typography variant="h5" gutterBottom fontWeight="bold" color="primary">
        B. Swachhata Hi Sewa Program
      </Typography>

      {/* Description */}
      <Typography variant="body1" paragraph align="justify">
        Effort for making Clean India was the second dream of Bapuji. To achieve
        it, oath was taken by different KVKs and ATARI officials for making
        surroundings clean and changing their attitude and behaviour. The
        participants were motivated to change their mind-set and also change the
        age-old habits. It is the responsibility of everyone to make the success
        of cleanliness drive. By 2019, whole India is to be transformed into
        Clean India. In all, 74 KVKs of the zone including 42 KVKs from
        Maharashtra, 30 Gujarat and 2 KVKs of Goa organized the Swachhata hi
        Sewa Program during 15th September to 2nd October, 2017. On this
        occasion, several activities were organised for having sense of
        cleanliness drive.
      </Typography>

      <Typography variant="body1" paragraph>
        The activity-wise details of programme given in table.
      </Typography>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead style={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell><b>Activities Undertaken</b></TableCell>
              <TableCell align="center">
                <b>Only Specific days (17, 24, 25 Sept & 1-2 Oct)</b>
              </TableCell>
              <TableCell align="center">
                <b>Other days (15 Sept - 2 Oct)</b>
              </TableCell>
              <TableCell align="center">
                <b>Total (15 Sept - 2 Oct)</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.activity}</TableCell>
                <TableCell align="center">{row.specific}</TableCell>
                <TableCell align="center">{row.others}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

     {/* Images Section */}
      <Box
  sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
    gap: 2,
    mt: 3
  }}
>
  {["https://ik.imagekit.io/ataripune/assets/images/Swachata%20Hi%20Seva%20/s2.png?updatedAt=1755689182852", "https://ik.imagekit.io/ataripune/assets/images/Swachata%20Hi%20Seva%20/s1.png?updatedAt=1755689181392"].map((img, i) => (
    <Box
      key={i}
      sx={{
        border: "2px solid #ddd",
        borderRadius: "8px",
        overflow: "hidden",
        aspectRatio: "1 / 0", // Square frame
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fafafa"
      }}
    >
      <img
        src={img}
        alt={`Collage Image ${i + 1}`}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }}
      />
    </Box>
  ))}
</Box>
    </Container>
    </Commonpage>
  );
}