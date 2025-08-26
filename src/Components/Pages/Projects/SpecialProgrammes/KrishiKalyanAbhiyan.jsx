import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Link,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Commonpage from '../../../../Layout/Commonpage';

export default function KrishiKalyanAbhiyan() {
  return (
    <Commonpage>
    <div style={{ margin: "2rem" }}>
      <Typography
        variant="h5"
        gutterBottom
        style={{ color: "olive", fontWeight: "bold" }}
      >
        A. Krishi Kalyan Abhiyan
      </Typography>

      {/* Maharashtra */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ color: "navy", fontWeight: "bold" }}>
            State: Maharashtra
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemIcon>
                <PictureAsPdfIcon color="error" />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://ik.imagekit.io/ataripune/assets/document/pdf/Krishi%20Kalyan%20Abhiyan%20/KKA_1.pdf?updatedAt=1755690284149" target="_blank" underline="hover">
                  KVK Osmanabad
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PictureAsPdfIcon color="error" />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://ik.imagekit.io/ataripune/assets/document/pdf/Krishi%20Kalyan%20Abhiyan%20/KKA_2.pdf?updatedAt=1755690283765" target="_blank" underline="hover">
                  KVK Washim
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PictureAsPdfIcon color="error" />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://ik.imagekit.io/ataripune/assets/document/pdf/Krishi%20Kalyan%20Abhiyan%20/KKA_3.pdf?updatedAt=1755690284008" target="_blank" underline="hover">
                  KVK Nandurbar
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemIcon>
                <PictureAsPdfIcon color="error" />
              </ListItemIcon>
              <ListItemText>
                <Link href="https://ik.imagekit.io/ataripune/assets/document/pdf/Krishi%20Kalyan%20Abhiyan%20/KKA_4.pdf?updatedAt=1755690284061" target="_blank" underline="hover">
                  KVK Gadchiroli
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>

      {/* Gujarat */}
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography style={{ color: "navy", fontWeight: "bold" }}>
            State: Gujarat
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <ListItemText>
                <Link href="https://ik.imagekit.io/ataripune/assets/document/pdf/Krishi%20Kalyan%20Abhiyan%20/KKA_5.pdf?updatedAt=1755690284087" target="_blank" underline="hover">
                  KVK Narmada
                </Link>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Link href="https://ik.imagekit.io/ataripune/assets/document/pdf/Krishi%20Kalyan%20Abhiyan%20/KKA_6.pdf?updatedAt=1755690283955" target="_blank" underline="hover">
                  KVK Dahod
                </Link>
              </ListItemText>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
    </Commonpage>
  );
}
