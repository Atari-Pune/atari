

// Adjust paths as per your project structure
import CommonLayout from '../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  ThemeProvider,
  createTheme,
  Link,
  Grid,
   List,
  ListItemButton,
  ListItemText,
  Divider,

} from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */
const customPortalSidebarItems = [
    { label: 'Home', path: '/' },
    { label: 'RTI Policy', path: 'https://ik.imagekit.io/ataripune/assets/RTI/Guide-RTI-2013.pdf?updatedAt=1753684432900/rti' },
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const portalBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'RTI', path:'https://ik.imagekit.io/ataripune/assets/RTI/Guide-RTI-2013.pdfupdatedAt=1753684432900' } // Current page, no path for last item
];

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e7d32', // Green
    },
    secondary: {
      main: '#81c784',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});

const rtiLinks = [
  { label: 'Amendment RTI 2011', url: 'https://ik.imagekit.io/ataripune/assets/RTI/ammendment-rti-2011.pdf?updatedAt=1753697533530' },
  { label: 'Guide RTI 2009', url:'https://ik.imagekit.io/ataripune/assets/RTI/guide-RTI-2009.pdf?updatedAt=1753697600260' },
  { label: 'Guide-RTI-2013', url: 'https://ik.imagekit.io/ataripune/assets/RTI/Guide-RTI-2013.pdf?updatedAt=1753697600078' },
  { label: 'Implementation section4 RTI Act', url: 'https://ik.imagekit.io/ataripune/assets/RTI/implementation-sec4-rti-act.pdf?updatedAt=1753697599940' },
  { label: 'Compilation RTI Act 2005', url: 'https://ik.imagekit.io/ataripune/assets/RTI/compilation-RTI-Act-2005.pdf?updatedAt=1753697600607' },
  { label: 'Office Order', url: 'https://ik.imagekit.io/ataripune/assets/RTI/CPIO-PK.pdf?updatedAt=1753697785956' },
];

const InfoCard = ({ title, name, designation, email, phone }) => (
  <Card sx={{ p: 2 }}>
    <CardContent>
      <Grid container alignItems="center" spacing={2}>
       
        <Grid item xs>
          <Typography variant="h6" color="primary">
            {title}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {name}
          </Typography>
          {designation && <Typography variant="body2">{designation}</Typography>}
          {email && (
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              Email:{' '}
              <Link href={`mailto:${email}`} color="secondary">
                {email}
              </Link>
            </Typography>
          )}
          {phone && (
            <Typography variant="body2" sx={{ mt: 0.5 }}>
              Phone: {phone}
            </Typography>
          )}
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
/**
 * Component for the Portal page.
 */
const RTI = () => {
    return (
        <CommonLayout
            pageTitle="RTI" // REQUIRED page title for the Portal page
            breadcrumbItems={portalBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customPortalSidebarItems} // Pass custom sidebar items
            sidebarTitle="RTI" // Custom sidebar title, consistent with Important Links
        >
            <ThemeProvider theme={theme}>
      <Box sx={{ px: { xs: 2, md: 6 }, py: 4, maxWidth: '1000px', margin: '0 auto' }}>
        <Box display="flex" alignItems="center" mb={3}>
          <InfoIcon color="primary" sx={{ mr: 1, fontSize: 32 }} />
          <Typography variant="h4" color="primary">
            Right to Information
          </Typography>
        </Box>

        <Grid container spacing={3} mb={4}>
          <Grid item xs={12} md={4}>
            <InfoCard
              title="Appellate Authority"
              name="Dr. Subrata Kumar Roy"
              designation="Director, ICAR-ATARI, Pune"
              email="atari.pune@icar.gov.in"
              phone="+91-20-25535665"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard
              title="Transparency Officer"
              name="Dr. Subrata Kumar Roy"
              designation="Director, ICAR-ATARI, Pune"
              email="atari.pune@icar.gov.in"
              phone="+91-20-25535665"
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoCard
              title="Central Public Information Officer"
              name="Smt. Priyanka Kumari"
              designation="AAO"
              email="priyanka.kumari@icar.gov.in"
              phone="+91-20-25535660"
            />
          </Grid>
        </Grid>

        <Typography variant="h6" color="primary" gutterBottom>
          Please click for detailed Information:
        </Typography>

        <List>
          {rtiLinks.map((item, index) => (
            <React.Fragment key={index}>
              <ListItemButton component="a" href={item.url}  target="_blank"
        rel="noopener noreferrer">
                <ListItemText
                  primaryTypographyProps={{ color: 'primary', fontWeight: 500 }}
                  primary={`${index + 1}. ${item.label}`}
                />
              </ListItemButton>
              {index < rtiLinks.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </List>
      </Box>
    </ThemeProvider>
        </CommonLayout>
    );
}

export default RTI;
