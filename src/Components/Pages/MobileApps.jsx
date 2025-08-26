import React from 'react';
import {Box, Typography,Cards } from '@mui/material';
// Adjust paths as per your project structure
import CommonLayout from '../../Layout/Fixpage/CommonLayout'; // Your new CommonLayout

/**
 * Define the custom sidebar navigation items for this specific page.
 * These will be passed directly to SidebarLayout.
 * We'll use the same items as ImportantLinksPage for consistency
 * since both seem to fall under "Quick Links".
 */
const customPortalSidebarItems = [
    { label: 'Home', path: '/' },
    { label: 'Mobile Apps', path: '/mobile-apps' },
];

/**
 * Define custom breadcrumb items for this specific page.
 * The last item should typically not have a 'path' property if it's the current page.
 */
const portalBreadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Mobile Apps' } // Current page, no path for last item
];


const cards = [
  {
    image: 'https://ik.imagekit.io/ataripune/assets/Mobile%20Apps/Screenshot%202025-07-31%20155547.png?updatedAt=1753959529618',
    title: 'Meghdoot ',
    // description: 'Official app for weather-based agri advisories.',
    url: 'https://play.google.com/store/apps/details?id=com.aas.meghdoot',
    buttonLabel: 'Open in Play Store'
  },
  {
    image: 'https://ik.imagekit.io/ataripune/assets/Mobile%20Apps/KVK%20Solapur%20mapp.png?updatedAt=1753961936195',
    title: 'KVK Solapur-I',
    // description: 'Solutions for crop production, animal husbandry, and more.',
    url: 'https://play.google.com/store/apps/details?id=com.solapur.kvk&hl=en', // Replace with actual URL if available
    buttonLabel: 'Open in Play Store'
  },
  {
    image: 'https://ik.imagekit.io/ataripune/assets/Mobile%20Apps/Krushik%20Pune-I.png?updatedAt=1753961930337', // Replace with your third image
    title: 'KVK Pune-I',
    // description: 'Krushik .',
    url: 'https://play.google.com/store/apps/details?id=com.rtc.krushik&hl=en_IN', // Replace with actual URL
    buttonLabel: 'Open in Play Store'
  }
];






/**
 * Component for the Portal page.
 */
const MobileApps = () => {
    return (
        <CommonLayout
            pageTitle="Mobile Apps" // REQUIRED page title for the Portal page
            breadcrumbItems={portalBreadcrumbs} // REQUIRED breadcrumbs for the Portal page
            sidebarNavItems={customPortalSidebarItems} // Pass custom sidebar items
            sidebarTitle="Mobile Apps" // Custom sidebar title, consistent with Important Links
        >
            <Box sx={{ mb: 2 }}>
                <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
                    <Typography variant="body1" color="text.secondary">
                    <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      margin: '40px 0'
    }}
  >
    {cards.map((card, idx) => (
      <a
        key={idx}
        href={card.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          width: '300px'
        }}
      >
        <div
          style={{
            border: '1px solid #ccc',
            borderRadius: '12px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            padding: '20px',
            background: '#fff',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            transition: 'box-shadow 0.3s',
            height: '100%'
          }}
        >
          <img
            src={card.image}
            alt={card.title}
            style={{
              width: '100%',
              height: '350px',
              objectFit: 'cover',
              borderRadius: '8px'
            }}
          />
          <h3 style={{ color: '#388e3c', margin: '14px 0 7px 0', textAlign: 'center' }}>
            {card.title}
          </h3>
          <p style={{ color: '#333', fontSize: '15px', textAlign: 'center', minHeight: '40px' }}>
            {card.description}
          </p>
          <button
            style={{
              marginTop: '15px',
              padding: '8px 20px',
              border: 'none',
              background: '#388e3c',
              color: '#fff',
              borderRadius: '4px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            {card.buttonLabel}
          </button>
        </div>
      </a>
    ))}
  </div>

            
                        
                        
                      
                    </Typography>
                </Box>
            </Box>
        </CommonLayout>
    );
}

export default MobileApps;
