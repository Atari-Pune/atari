import React from 'react';
import { Box, Typography,List, ListItem, ListItemText,Container,ListItemIcon } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */
const ATICsPage = () => {
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        {/* Removed the hardcoded Typography for "How to Reach Us" as Commonpage handles the title */}
        <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
          <Container maxWidth="md" sx={{ backgroundColor: '', padding: 4, borderRadius: 2, boxShadow: 2 }}>
      
      <Typography variant="h4" align="center" gutterBottom sx={{ color: 'green', fontWeight: 'bold' }}>
        Agricultural Technology Information Centre (ATIC)
      </Typography>

      <Typography variant="body1" align="justify" sx={{ marginTop: 2 }}>
  To bridge the gap of information, Agricultural Technology Information Centers (ATIC) have been established in the country at SAUs and ICAR institutes. It acts as a 'single window'delivery system for the technology, services and products of the Institute or University for the benefit of the farming community. ATIC provides farm advisory services and facilitate information-based decision making among farmers
</Typography>

      <Typography variant="h6"  align="left" gutterBottom sx={{ marginTop: 2,color: 'green', fontWeight: 'bold' }}>
        Mandate of ATIC
      </Typography>

      <List dense={false} sx={{ mt: 1, width: '100%', p: 2 }}>
            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
          <ListItemText
            primary="To provide a single window delivery system for the products and services to the farmers and other interested
            groups as a process of innovativeness in technology dissemination."
          />
        </ListItem>
        <List dense={false} sx={{ mt: 1, width: '100%', p: 2 }}>
            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
              
          <ListItemText
            primary="To facilitate direct access of the farmers to the institutional resources available in terms of technology advice,
            technology products etc. for reducing technology dissemination losses."
          />
        </ListItem>
      </List>
        <List dense={false} sx={{ mt: 1, width: '100%', p: 2 }}>
            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
              <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                <CheckCircleOutlineIcon color="primary" fontSize="small" />
              </ListItemIcon>
          <ListItemText
            primary="To provide mechanism for feedback from the users to the Institute scientist."
          />
        </ListItem>
      </List>
      </List>

      <Box mt={2}>
        <Typography variant="body1"  paragraph align="justify" sx={{ textIndent: '2em' }}>
          In Zone VIII, there are 8 ATIC centres at State Agricultural Universities in Maharashtra and Gujarat states.
          Three ATIC centres are working at ICAR institutes for benefitting the farming community.
        </Typography>
      </Box>
    </Container>
  
        </Box>
      </Box>
    </Commonpage>
  );
}


export default ATICsPage