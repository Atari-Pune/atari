// src/Routes/AppRoutes.jsx
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLoader from './PageLoader'; // Assuming PageLoader is alongside AppRoutes.jsx
import routesConfig from '../Data/nav.json'; // Import your centralized routes configuration
import localfiles from "../Data/localfiles.json" // Import your centralized routes configuration

// --- Dynamic Component Mapping ---
// This object maps the 'component' string from routes.json to the actual lazy-loaded component.
// IMPORTANT: Verify these paths match your exact file structure.
const componentMap = {
    Home: lazy(() => import('../Components/Home/index')),
    // About Us Pages
    AboutUs: lazy(() => import('../Components/Pages/AboutUs/AboutUsPage')), // Changed from AboutUsPage to AboutUs to match JSON
    OrganizationalSetup: lazy(() => import('../Components/Pages/AboutUs/OrganizationalSetup')),
    AgroclimaticZones: lazy(() => import('../Components/Pages/AboutUs/AgroclimaticZones')),
    HowToReachUs: lazy(() => import('../Components/Pages/AboutUs/HowToReachUs')),

    // Staff Pages
    Staff: lazy(() => import('../Components/Pages/Staff/StaffPage')), // Changed from StaffPage to Staff to match JSON
    Director: lazy(() => import('../Components/Pages/Staff/DirectorStaff')), // Changed from DirectorStaff to Director
    PrincipalScientist: lazy(() => import('../Components/Pages/Staff/ScientistStaff/PrincipalScientist')),
    SeniorScientist: lazy(() => import('../Components/Pages/Staff/ScientistStaff/SeniorScientist')),
    BasicScientist: lazy(() => import('../Components/Pages/Staff/ScientistStaff/ScientistBasic')), // Changed from ScientistBasic to BasicScientist
    AfAndAo: lazy(() => import('../Components/Pages/Staff/AdministrativeStaff/AFAOScience')), // Changed from AFAOScience to AfAndAo
    Aao: lazy(() => import('../Components/Pages/Staff/AdministrativeStaff/AAOAdmin')), // Changed from AAOAdmin to Aao
    Assistant: lazy(() => import('../Components/Pages/Staff/AdministrativeStaff/AssistantAdmin')), // Changed from AssistantAdmin to Assistant
    Srf: lazy(() => import('../Components/Pages/Staff/ContractualStaff/SRFContractual')), // Changed from SRFContractual to Srf
    Yps: lazy(() => import('../Components/Pages/Staff/ContractualStaff/YPsContractual')), // Changed from YPsContractual to Yps

    // KVKs Pages
    Kvks: lazy(() => import('../Components/Pages/KVKs/KVKsPage')), // Changed from KVKsPage to Kvks
    AboutKvks: lazy(() => import('../Components/Pages/KVKs/AboutKVKs')), // Changed from AboutKVKs to AboutKvks
    MaharashtraKvk: lazy(() => import('../Components/Pages/KVKs/SeniorScientistHeadKVKs/MaharashtraKVK')), // Changed from MaharashtraKVK to MaharashtraKvk
    GujaratKvk: lazy(() => import('../Components/Pages/KVKs/SeniorScientistHeadKVKs/GujaratKVK')), // Changed from GujaratKVK to GujaratKvk
    GoaKvk: lazy(() => import('../Components/Pages/KVKs/SeniorScientistHeadKVKs/GoaKVK')), // Changed from GoaKVK to GoaKvk
    Atics: lazy(() => import('../Components/Pages/KVKs/ATICsPage')), // Changed from ATICsPage to Atics
    SacMeeting2019: lazy(() => import('../Components/Pages/KVKs/SACMeeting/SAC2019_20')), // Changed from SAC2019_20 to SacMeeting2019
    SacMeeting2020: lazy(() => import('../Components/Pages/KVKs/SACMeeting/SAC2020_21')), // Changed from SAC2020_21 to SacMeeting2020
    SacMeeting2021: lazy(() => import('../Components/Pages/KVKs/SACMeeting/SAC2021_22')), // Changed from SAC2021_22 to SacMeeting2021
    ReportingFormat: lazy(() => import('../Components/Pages/KVKs/ReportingFormat')),
    AtariMaharashtraKvk: lazy(() => import('../Components/Pages/KVKs/KVKsOfATARI/KVKsMaharashtra')), // Changed from KVKsMaharashtra to AtariMaharashtraKvk
    AtariGujaratKvk: lazy(() => import('../Components/Pages/KVKs/KVKsOfATARI/KVKsGujarat')), // Changed from KVKsGujarat to AtariGujaratKvk
    AtariGoaKvk: lazy(() => import('../Components/Pages/KVKs/KVKsOfATARI/KVKsGoa')), // Changed from KVKsGoa to AtariGoaKvk
    LandHoldingArea: lazy(() => import('../Components/Pages/KVKs/LandHoldingArea')),

    // Projects Pages
    Projects: lazy(() => import('../Components/Pages/Projects/ProjectsPage')), // Changed from ProjectsPage to Projects
    InternallyFunded: lazy(() => import('../Components/Pages/Projects/InternallyFunded')),
    ExternallyFunded: lazy(() => import('../Components/Pages/Projects/ExternallyFunded')),
    SpecialProgrammes: lazy(() => import('../Components/Pages/Projects/SpecialProgrammes')),

    // Other Top-Level Pages
    Rti: lazy(() => import('../Components/Pages/RTI')), // Changed from RTI to Rti
    PhotoGallery: lazy(() => import('../Components/Pages/Gallery/PhotoGallery')),
    Publications: lazy(() => import('../Components/Pages/Publications/PublicationsPage')), // Changed from PublicationsPage to Publications
    ResearchPapersBooks: lazy(() => import('../Components/Pages/Publications/ResearchPapersBooks')),
    TechnicalBulletins: lazy(() => import('../Components/Pages/Publications/TechnicalBulletins')),
    AtariNewsLetters: lazy(() => import('../Components/Pages/Publications/ATARINewsLetters')), // Changed from ATARINewsLetters to AtariNewsLetters
    Reports: lazy(() => import('../Components/Pages/Reports/ReportsPage')), // Changed from ReportsPage to Reports
    Mpr: lazy(() => import('../Components/Pages/Reports/MPRReports')), // Changed from MPRReports to Mpr
    Qpr: lazy(() => import('../Components/Pages/Reports/QPRReports')), // Changed from QPRReports to Qpr
    Apr: lazy(() => import('../Components/Pages/Reports/APRReports')), // Changed from APRReports to Apr
    Proceedings: lazy(() => import('../Components/Pages/Reports/ProceedingsReports')), // Changed from ProceedingsReports to Proceedings
    MobileApps: lazy(() => import('../Components/Pages/MobileApps')),
    AtariKvksInIcarNews: lazy(() => import('../Components/Pages/ATARIKVKsInICARNews')), // Changed from ATARIKVKsInICARNews to AtariKvksInIcarNews
    OnlinePayment: lazy(() => import('../Components/Pages/OnlinePayment')),

    // Not Found Page
    NotFound: lazy(() => import('../Components/Pages/NotFound')),

    // New Pages for Quick Links
    PortalPage: lazy(() => import('../Components/Home/Pages/ComponentB/PortalPage')),
    ImportantLinksPage: lazy(() => import('../Components/Home/Pages/ComponentB/ImportantLinksPage')),
    ReleaseOrderCircularsPage: lazy(() => import('../Components/Home/Pages/ComponentB/ReleaseOrderCircularsPage')),
    ProgrammesPage: lazy(() => import('../Components/Home/Pages/ComponentB/ProgrammesPage')),
    VigilanceOfficerPage: lazy(() => import('../Components/Home/Pages/ComponentB/VigilanceOfficerPage')),
    PrivacyPolicy: lazy(() => import('../Components/Footer/PrivacyPolicy')),
    LinkingPolicy: lazy(() => import('../Components/Footer/LinkingPolicy')),
    DisclaimerPolicy: lazy(() => import('../Components/Footer/DisclaimerPolicy')),
    ContactUs: lazy(() => import('../Components/Footer/ContactUs')),
    Feedback: lazy(() => import('../Components/Footer/Feedback'))

};

// Recursive function to render routes from the JSON configuration
const renderRoutes = (routes) => {
    return routes.map((route, index) => {
        // Get the component from the map using the component name from JSON
        const Component = componentMap[route.component];

        // If the route has children, it might be a parent route or a nested group
        if (route.children) {
            return (
                <React.Fragment key={index}>
                    {/* Render the parent route if it has a valid path (not just '#') and a component */}
                    {route.path && route.path !== '#' && Component && (
                        <Route path={route.path} element={<Component />} />
                    )}
                    {/* Recursively render children routes */}
                    {renderRoutes(route.children)}
                </React.Fragment>
            );
        }

        // Render simple routes (leaf nodes in the navigation tree)
        return Component && route.path && route.path !== '#' ? (
            <Route key={index} path={route.path} element={<Component />} />
        ) : null;
    });
};

const AppRoutes = () => {
    return (
        <Suspense fallback={<PageLoader />}>
            <Routes >
                {/* Dynamically render all routes from the JSON configuration */}
                {renderRoutes(routesConfig)}
                {renderRoutes(localfiles)}

                {/* Catch-all route for 404 - Ensure NotFound component is defined in componentMap */}
                <Route path="*" element={<componentMap.NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;