import React, { useRef, useEffect, useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  IconButton,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const cards = [
  { url: "https://www.india.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/India.gov.png" },
  { url: "https://icar.gov.in", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/Icar.png" },
  { url: "https://farmer.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/Farmer%20portal.png" },
  { url: "https://kvk.icar.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/KVK.png" },
  { url: "https://mkisan.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/mkisan.png" },
  { url: "https://agmarknet.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/agmarket.png" },
  { url: "https://digitalindia.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/digiindia.png" },
  { url: "https://dpd.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/dpd.png" },
  { url: "https://gem.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/gem.png" },
  { url: "https://www.nfsm.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/nfsm.png" },
  { url: "https://seednet.gov.in/", image: "https://ik.imagekit.io/ataripune/assets/images/Important%20Links/seed.png" },
];

const CARD_WIDTH = 300 + 24; // card width + margin (adjust if needed)

const ImpLinks = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const extendedCards = [...cards, ...cards, ...cards]; // prepend + original + append
  const startIndex = cards.length; // middle section start

  // Position scroll to middle on mount
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = startIndex * CARD_WIDTH;
    }
  }, []);

  // Handle seamless looping
  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    if (scrollLeft <= 0) {
      // Jump instantly to middle section end
      scrollRef.current.scrollLeft = cards.length * CARD_WIDTH;
    } else if (scrollLeft + clientWidth >= scrollWidth) {
      // Jump instantly to middle section start
      scrollRef.current.scrollLeft = cards.length * CARD_WIDTH;
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && !isHovered) {
        scrollRef.current.scrollLeft += 2;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isHovered]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -CARD_WIDTH : CARD_WIDTH,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{ position: "relative", bgcolor: "#f5f5f5", py: 3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Prev Button */}
      <IconButton
        onClick={() => scroll("left")}
        sx={{
          position: "absolute",
          top: "50%",
          left: 10,
          transform: "translateY(-50%)",
          bgcolor: "green",
          boxShadow: 2,
          "&:hover": { bgcolor: "#21884aff" },
          zIndex: 1,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>

      {/* Scrollable Container */}
      <Box
        ref={scrollRef}
        onScroll={handleScroll}
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollBehavior: "smooth",
          px: 6,
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {extendedCards.map((card, index) => (
          <a
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                minWidth: 300,
                mx: 1.5,
                flex: "0 0 auto",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardMedia component="img" height="100" image={card.image} />
            </Card>
          </a>
        ))}
      </Box>

      {/* Next Button */}
      <IconButton
        onClick={() => scroll("right")}
        sx={{
          position: "absolute",
          top: "50%",
          right: 10,
          transform: "translateY(-50%)",
          bgcolor: "green",
          boxShadow: 2,
          "&:hover": { bgcolor: "#21884aff" },
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
};

export default ImpLinks;
