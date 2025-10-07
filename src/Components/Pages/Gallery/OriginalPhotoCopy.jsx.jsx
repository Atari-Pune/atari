import React, { useState } from "react";
import {
    Box,
    ImageList,
    ImageListItem,
    Typography,
    Pagination,
    useMediaQuery,
    useTheme,
    Dialog,
    IconButton,
} from "@mui/material";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack"; // NEW

import Commonpage from '../../../Layout/Commonpage';

// Sample images (replace with your own URLs)
const itemData = [
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DSC_3212.JPG?updatedAt=1759120467330'
    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Slider%20images/DSC_1982.JPG?updatedAt=1758166185330'
    },
    
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DSC_1813.JPG?updatedAt=1754048857335',

    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DSC_1828.JPG?updatedAt=1754048900158'
    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Dr.%20Pramod%20Sawant%20and%20Mr.%20Ravi%20Naik%20at%20Raia%20village-photoaidcom-2x-ai-zoom.jpg?updatedAt=1759140743732',

    },
   
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DSC_8287.JPG?updatedAt=1754048784456',
    }, 
    
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Surat%205.jpg?updatedAt=1759140743242',

    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Pune-II,5.jpg?updatedAt=1759140741857',
    }, {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Mr.%20Subhash%20Shirodkar%20at%20Shiroda%20village-photoaidcom-2x-ai-zoom.jpg?updatedAt=1759140740853',

    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DSC_6606.JPG?updatedAt=1758615740361',

    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DSC_6527.JPG?updatedAt=1758615738988',
    }, {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/International%20Conference%20at%20Navsari%20Agricultural%20University%20(NAU)%202023.jpeg?updatedAt=1758615733917',

    },
    {
        img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/International%20Conference%20at%20Navsari%20Agriculture%20University%20(2023).jpeg?updatedAt=1758615733955',

    },
{ img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/6th%20Zonal%20workshop-3.jpeg?updatedAt=1758615732916' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/DDG%20sir%20Interaction%20with%20KVK%20(2).JPG?updatedAt=1753356725292' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Building%20Inauguration%20of%20KVK-Rajkot-II.JPG?updatedAt=1753356725340' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Millinaire%20farmer%20programme%20by%20Krishi%20Jagaran%20at%20Delhi%20December%202023.jpeg?updatedAt=1758615733380' },

  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Union%20Minister%20of%20Agriculture%20&%20Farmers%20Welfare%20Inaugurates%20Administrative%20Building%20of%20ICAR-ATARI,%20Pune%20on%2019th%20January%202023.JPG?updatedAt=1753181625045' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/DSC_8099.JPG?updatedAt=1753761650500' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Republic%20Day%202024.jpeg?updatedAt=1753181622335' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/DSC_8097.JPG?updatedAt=1753761612259' }, //title: 'ICAR Logo', category: 'Logos'
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Annual%20Action%20Plan%20Workshop%20of%20KVKs%20in%20Maharashtra%20inaugurated%20on%2022%20February%202023.jpg?updatedAt=1753181622375' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Review%20Workshop%20of%20KVKs%20of%20ATARI%20Zone%20VIII%204%20May%202023,%20ICAR-ATARI,%20Pune..png?updatedAt=1753181622481' },


  // { url: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Kisan%20Samman%20Divas.JPG?updatedAt=1753357122161' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Navsari%20Agricultural%20University.png?updatedAt=1753356829117' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Valedictory%20speech%20by%20Honble%20Cheif%20guest%20Dr%20U%20S%20Gautam..JPG?updatedAt=1753356727475' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Valedictory%20speech%20by%20Honble%20Cheif%20guest%20Dr%20U%20S%20Gautam.jpg?updatedAt=1753356725573' }, //title: 'ICAR Logo', category: 'Logos'
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Narayangaon%20kisan%20mela%202024.jpeg?updatedAt=1753356630795' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/seventh%20Annual%20Zonal%20Workshop%20At%20JAU%20Junagadh.jpeg?updatedAt=1753356627413' },
  { img: 'https://ik.imagekit.io/ataripune/assets/images/Photo%20Galley/Women%20SHG%20mela%20at%20Osmanabad%20VNMKV%20Parbhani%203%20january%202024.jpeg?updatedAt=1753356627396' },







    
];
//const ITEMS_PER_PAGE = 12; // Number of images per page


const PhotoCopy = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("sm"));
  const isSm = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  let ITEMS_PER_PAGE = 4;
  if (isXs) ITEMS_PER_PAGE = 4;
  if (isSm) ITEMS_PER_PAGE = 6;
  if (isMdUp) ITEMS_PER_PAGE = 9;

  const [page, setPage] = useState(1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [zoom, setZoom] = useState(1);

  const totalPages = Math.ceil(itemData.length / ITEMS_PER_PAGE);
  const paginatedData = itemData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  const handlePageChange = (_, value) => setPage(value);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setZoom(1);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + itemData.length) % itemData.length);
    setZoom(1);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % itemData.length);
    setZoom(1);
  };

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.5));

    return (
        <Commonpage>
            <Box sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", mb: 3 }}
      >
        Photo Gallery
      </Typography>

      <ImageList
        cols={isXs ? 1 : isSm ? 2 : 3}
        gap={16}
        sx={{ justifyContent: "center" }}
      >
        {paginatedData.map((item, index) => {
          const globalIndex = (page - 1) * ITEMS_PER_PAGE + index;
          return (
            <ImageListItem
              key={globalIndex}
              onClick={() => openLightbox(globalIndex)}
              sx={{
                cursor: "pointer",
                width: { xs: 140, sm: 200, md: 250 },
                height: { xs: 140, sm: 200, md: 250 },
                borderRadius: "12px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.15)",
                margin: "auto",
                overflow: "hidden",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ mt: 1, fontWeight: 500 }}
              >
                {item.title}
              </Typography>
            </ImageListItem>
          );
        })}
      </ImageList>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
        />
      </Box>

      {/* MUI Dialog as Lightbox */}
      <Dialog
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        maxWidth="lg"
        PaperProps={{
          sx: {
            backgroundColor: "rgba(0,0,0,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          },
        }}
      >
        {/* NEW: Back Arrow to close */}
        <IconButton
          onClick={() => setLightboxOpen(false)}
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            color: "#fff",
          }}
        >
          <ArrowBackIcon fontSize="large" />
        </IconButton>

        {/* Previous Slide Arrow */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: "absolute",
            left: 48, // shifted to avoid overlap with back arrow
            color: "#fff",
          }}
        >
          <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>

        {/* Image */}
        <Box
          component="img"
          src={itemData[currentIndex].img}
          alt={itemData[currentIndex].title}
          sx={{
            maxHeight: "80vh",
            maxWidth: "90vw",
            transform: `scale(${zoom})`,
            transition: "transform 0.3s",
          }}
        />

        {/* Next Slide Arrow */}
        <IconButton
          onClick={handleNext}
          sx={{
            position: "absolute",
            right: 8,
            color: "#fff",
          }}
        >
          <ArrowForwardIosIcon fontSize="large" />
        </IconButton>

        {/* Controls (Zoom) */}
        <Box
          sx={{
            position: "absolute",
            bottom: 16,
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleZoomOut} sx={{ color: "#fff" }}>
            <ZoomOutIcon />
          </IconButton>
          <IconButton onClick={handleZoomIn} sx={{ color: "#fff" }}>
            <ZoomInIcon />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
 

        </Commonpage>
    );
};

export default PhotoCopy;
