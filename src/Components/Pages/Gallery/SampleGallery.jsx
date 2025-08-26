import React, { useState ,useEffect} from "react";
import { Box, Typography } from '@mui/material'; // Keeping Box and Typography for content within Commonpage
import Commonpage from '../../../Layout/Commonpage'; // Import the reusable Commonpage layout
import './ImageGallery.css'; // Assume this contains your styles
import { useLocation } from 'react-router-dom';
/**
 * Component for the "How to Reach Us" page, utilizing the Commonpage layout.
 * This component focuses on rendering the specific content for directions.
 */

const tabs = [
  {
    label: "VIP",
    id: "nature",
    images: [
      {
        src: "https://images.unsplash.com/photo-1426604966848-d7adac402bff",
        alt: "Mountain lake",
        title: "Mountain Lake",
        desc: "Pristine waters reflecting nature's beauty",
      },
      {
        src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
        alt: "Forest",
        title: "Mystic Forest",
        desc: "Sunlight piercing through the trees",
      },
      {
        src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
        alt: "Mountains",
        title: "Mountain Range",
        desc: "Majestic peaks touching the clouds",
      },
    ],
  },
  {
    label: "Events",
    id: "architecture",
    images: [
      {
        src: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2",
        alt: "Modern Building",
        title: "Modern Architecture",
        desc: "Contemporary design meets functionality",
      },
      {
        src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a",
        alt: "City Architecture",
        title: "Urban Landscape",
        desc: "City skyline at twilight",
      },
      {
        src: "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8",
        alt: "Historic Building",
        title: "Historic Architecture",
        desc: "Classical design elements",
      },
    ],
  },
  {
    label: "Other",
    id: "interior",
    images: [
      {
        src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
        alt: "Modern Interior",
        title: "Modern Living",
        desc: "Contemporary interior design",
      },
      {
        src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace",
        alt: "Minimalist Room",
        title: "Minimalist Design",
        desc: "Clean lines and simple elegance",
      },
      {
        src: "https://images.unsplash.com/photo-1616137466211-f939a420be84",
        alt: "Cozy Space",
        title: "Cozy Corner",
        desc: "Warm and inviting interior",
      },
    ],
  },
];
const PhotoGallery = () => {
  
const [activeTab, setActiveTab] = useState("interior");
const location = useLocation();
 useEffect(() => {
    const params = new URLSearchParams(location.search);
    if(params.get('event')){
    setActiveTab(params.get('event'));
    }
  }, [location.search]);
  return (
    // Wrap the page-specific content with the Commonpage layout component.
    // Commonpage will handle the header (dynamic title and breadcrumbs) and sidebar.
    <Commonpage>
      {/* The content specific to the "How to Reach Us" page */}
      <Box sx={{ mb: 2 }}>
        <Box sx={{ mt: 3, p: 2, border: '1px dashed #ccc', textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f0f0' }}>
        
<div className="container py-5">
    
    

      {/* Tabs Content */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className={`tab-content${activeTab === tab.id ? " active" : ""}`}
        >
          <div className="grid-container">
            {tab.images.map((img, idx) => (
              <div className="grid-item" key={idx}>
                <img src={img.src} alt={img.alt} />
                <div className="image-overlay">
                  <h5>{img.title}</h5>
                  <Typography  className="mb-0">{img.desc}</Typography >
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    

    
    
         
        </Box>
      </Box>
    </Commonpage>
  );
}



export default PhotoGallery

