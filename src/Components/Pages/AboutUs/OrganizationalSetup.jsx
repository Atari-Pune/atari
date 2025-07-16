import * as React from 'react';
import OrgChart from "./OrgChart"; // Assuming OrgChart is a component specific to this page
import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout

/**
 * The Organizational Setup page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for the organizational chart.
 */
export default function OrganizationalSetup() {
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // The page title ("Organizational Setup") and breadcrumbs will be dynamically
    // determined by Commonpage based on the current route.
    <Commonpage>
      {/* The content specific to the Organizational Setup page */}
      <OrgChart />
    </Commonpage>
  );
}
