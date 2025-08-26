import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from "@mui/material";
import Commonpage from '../../../../Layout/Commonpage';



/**
/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
// const SpecialProgrammes = () => {
   
    
          export default function SankalpSeSidhhi() {
  const rows = [
    {
      state: "Maharashtra",
      kvks: 36,
      unionMin: 7,
      mps: 19,
      stateMin: 5,
      mlas: 18,
      chairman: 26,
      distCollector: 11,
      bankOfficials: 77,
      farmers: 21004,
      govtOfficials: 1834,
      total: 23020,
      relayedDD: 22,
      relayedOther: 46
    },
    {
      state: "Gujarat",
      kvks: 27,
      unionMin: 4,
      mps: 20,
      stateMin: 7,
      mlas: 19,
      chairman: 18,
      distCollector: 11,
      bankOfficials: 35,
      farmers: 15779,
      govtOfficials: 1194,
      total: 16367,
      relayedDD: 17,
      relayedOther: 56
    },
    {
      state: "Goa",
      kvks: 2,
      unionMin: 1,
      mps: 2,
      stateMin: 1,
      mlas: 0,
      chairman: 0,
      distCollector: 0,
      bankOfficials: 5,
      farmers: 464,
      govtOfficials: 49,
      total: 518,
      relayedDD: 2,
      relayedOther: 6
    },
    {
      state: "Total",
      kvks: 65,
      unionMin: 12,
      mps: 41,
      stateMin: 13,
      mlas: 37,
      chairman: 44,
      distCollector: 22,
      bankOfficials: 117,
      farmers: 37247,
      govtOfficials: 3077,
      total: 39905,
      relayedDD: 41,
      relayedOther: 108
    }
  ];

  return (
   
    <Commonpage>
    <Box sx={{ p: { xs: 2, md: 4 } }}>
      <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
        C. Sankalp Se Siddhi Program
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph>
        Sankalp Se Siddhi Program was organised by 65 KVKs across the zone involving 36 KVKs from Maharashtra, 27 from Gujarat and 2 KVKs from Goa during 18th August to 19th September, 2017. It was well planned to create more awareness about latest farm technologies and knowledge among farmers about national and state developmental schemes. Effort was taken to invite Ministers, Member of Parliaments, MLAs, Zila Parishad members, district level officials and large number of farmers.
      </Typography>

      <Typography variant="body1" textAlign="justify" paragraph>
        In this program, a message of Hon'ble Prime Minister followed by the pledge, a talk of the expert, address of the chief guest and screening of a related film were included. In series of programs, 12 Union Ministers, 41 MPs, 13 State Ministers, 37 MLAs, 37242 farmers, etc. participated and advocated different stakeholders about different developmental schemes and technologies for enhancing farmers' income.
      </Typography>

      <Typography variant="body1" fontWeight="bold" gutterBottom>
        State-wise details of participants under Sankalp Se Siddhi program in Zone VIII.
      </Typography>

      <TableContainer component={Paper} sx={{ overflowX: "auto", mb: 3 }}>
        <Table stickyHeader sx={{ border: "1px solid #ccc" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#d0e6a5" }}>
              {[
                "State",
                "KVCs",
                "No. of Union Ministers",
                "MPs attended",
                "State Govt. Ministers",
                "MLAs",
                "Chairman Zila Panchayat",
                "Distt. Collector / DM",
                "Bank Officials",
                "Farmers",
                "Govt. Officials, PRI members",
                "Total",
                "Relayed by DD",
                "Relayed by other channels"
              ].map((header, i) => (
                <TableCell
                  key={i}
                  sx={{
                    border: "1px solid #ccc",
                    fontWeight: "bold"
                  }}
                >
                  {header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  backgroundColor: row.state === "Total" ? "#f1f1f1" : "inherit",
                  fontWeight: row.state === "Total" ? "bold" : "normal"
                }}
              >
                {Object.values(row).map((value, idx) => (
                  <TableCell key={idx} sx={{ border: "1px solid #ccc" }}>
                    {value}
                  </TableCell>
                ))}
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
  {["https://ik.imagekit.io/ataripune/assets/images/Sankalp%20Se%20Siddhi/sss3.png?updatedAt=1755143756193", "https://ik.imagekit.io/ataripune/assets/images/Sankalp%20Se%20Siddhi/sss2.png?updatedAt=1755143756162", "https://ik.imagekit.io/ataripune/assets/images/Sankalp%20Se%20Siddhi/sss1.png?updatedAt=1755143756132", "https://ik.imagekit.io/ataripune/assets/images/Sankalp%20Se%20Siddhi/sss4.png?updatedAt=1755143756305"].map((img, i) => (
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
    </Box>
    </Commonpage>
  );
}
