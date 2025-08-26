import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const cards = [
  { title: "Card 1", description: "This is the first card", url: "https://example.com/1" },
  { title: "Card 2", description: "This is the second card", url: "https://example.com/2" },
  { title: "Card 3", description: "This is the third card", url: "https://example.com/3" },
  { title: "Card 4", description: "This is the fourth card", url: "https://example.com/4" },
  { title: "Card 5", description: "This is the fifth card", url: "https://example.com/5" },
  { title: "Card 6", description: "This is the sixth card", url: "https://example.com/6" },
];

const ImpLinks = () => {
  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        bgcolor: "#f5f5f5",
        py: 3,
      }}
    >
      <Box
        sx={{
          display: "inline-flex",
          animation: "scroll 25s linear infinite",
          "&:hover": { animationPlayState: "paused" }, // pause on hover
        }}
      >
        {/* Repeat cards twice for smooth infinite scroll */}
        {[...cards, ...cards].map((card, index) => (
          <a
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <Card
              sx={{
                minWidth: 220,
                mx: 1.5,
                flex: "0 0 auto",
                borderRadius: 3,
                boxShadow: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "scale(1.05)" },
              }}
            >
              <CardContent>
                <Typography variant="h6" gutterBottom color="primary">
                  {card.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </a>
        ))}
      </Box>

      {/* Keyframes for marquee */}
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default ImpLinks;
