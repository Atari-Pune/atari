import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Mock JSON data for slider images.
// IMPORTANT: Ensure 'dimensions' are accurately provided as "WIDTHxHEIGHT" strings.
// Get the base URL from environment variables
// Add a fallback in case the env variable is not set
const WEBSITE_BASE_URL = process.env.REACT_APP_WEBSITE_URL;
const imageData = [
    {
        id: 5,
        // Construct the src path using the base URL and the relative path to the image
        src: `${WEBSITE_BASE_URL}/images/NICRA Workshop at Goa.jpeg`,
        alt: "ICAR-ATARI Institute Building",
        title: "ICAR-ATARI Institute Building",
        fileType: "jpeg", // Corrected fileType to match actual extension
        dimensions: "1200x400",
        description: ""
    },
    {
        id: 2,
        src: `${WEBSITE_BASE_URL}/images/DSC_8096.JPG`,
        alt: "NICRA Workshop at Goa", // Alt text for image 5 is more appropriate here
        title: "NICRA Workshop at Goa", // Title for image 5 is more appropriate here
        fileType: "jpg", // Corrected fileType
        dimensions: "1200x400",
        description: ""
    },
    {
        id: 3,
        src: `${WEBSITE_BASE_URL}/images/DSC_9794.JPG`,
        alt: "Agricultural Field Research",
        title: "Agricultural Field Research", // Added title for consistency
        fileType: "jpg", // Corrected fileType
        dimensions: "1200x400",
        description: ""
    },
    {
        id: 1,
        src: `${WEBSITE_BASE_URL}/images/6th%20Zonal%20workshop-1.JPG`,
        alt: "6th Zonal Workshop Image",
        title: "6th Zonal Workshop: Advancing Agricultural Research",
        fileType: "jpg",
        dimensions: "1200x400",
        description: ""
    },
    {
        id: 4,
        src: `${WEBSITE_BASE_URL}/images/DSC_9940.JPG`,
        alt: "Farmer with Harvest",
        title: "Farmer with Harvest", // Added title for consistency
        fileType: "jpg", // Corrected fileType
        dimensions: "1200x400",
        description: ""
    },
];


/**
 * A responsive image slider component for displaying a series of images.
 * - Adapts its height dynamically to the aspect ratio of the current image.
 * - Images always cover the full width and height of the slider (`objectFit: 'cover'`).
 * - Includes responsive text overlays, navigation controls, and auto-play.
 */
const ImageSlider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const [aspectRatioPadding, setAspectRatioPadding] = useState(null); // State for dynamic padding-bottom

    // Handles moving to the next slide
    const goToNextSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === imageData.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Handles moving to the previous slide
    const goToPreviousSlide = () => {
        setCurrentSlideIndex((prevIndex) =>
            prevIndex === 0 ? imageData.length - 1 : prevIndex - 1
        );
    };

    // Handles direct navigation to a specific slide via dots
    const goToSlide = (index) => {
        setCurrentSlideIndex(index);
    };

    // Calculate aspect ratio padding for the current image dynamically
    useEffect(() => {
        if (imageData.length > 0) {
            const currentImage = imageData[currentSlideIndex];
            if (currentImage && currentImage.dimensions) {
                const [width, height] = currentImage.dimensions.split('x').map(Number);
                if (width > 0 && height > 0) { // Ensure dimensions are valid numbers and not zero
                    // Calculate (height / width) * 100 for padding-bottom
                    setAspectRatioPadding(((height / width) * 100).toFixed(2));
                } else {
                    // Fallback if dimensions are invalid or missing
                    console.warn(`Invalid dimensions for image ID ${currentImage.id}: ${currentImage.dimensions}. Defaulting to 16:9 aspect ratio.`);
                    setAspectRatioPadding(56.25); // Default to 16:9 aspect ratio
                }
            } else {
                console.warn(`No dimensions provided for image ID ${currentImage.id}. Defaulting to 16:9 aspect ratio.`);
                setAspectRatioPadding(56.25); // Default to 16:9 if no dimensions or image data
            }
        } else {
            setAspectRatioPadding(56.25); // Default to 16:9 if no images at all
        }
        // eslint-disable-next-line
    }, [currentSlideIndex, imageData]); // Recalculate if slide changes or image data changes

    // Auto-play functionality
    useEffect(() => {
        if (imageData.length > 1) {
            const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval); // Clear interval on component unmount
        }
        // eslint-disable-next-line
    }, [currentSlideIndex, imageData.length]); // Re-run if currentSlideIndex or image data changes

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%', // Takes full width of its parent container
                margin: '0 auto', // Center the slider horizontally
                overflow: 'hidden', // Hides overflowing content (e.g., other slides)
                borderRadius: '8px', // Rounded corners for the slider viewport
                backgroundColor: '#f8f9fa', // Light background visible if images aren't loaded or padding is off
                
                // --- Dynamic Height using Aspect Ratio Trick ---
                // Set height to 0 and use padding-bottom as a percentage of the width.
                // This makes the Box's height dynamic, matching the aspect ratio of the current image.
                paddingBottom: aspectRatioPadding ? `${aspectRatioPadding}%` : '56.25%',
                height: 0,
                boxSizing: 'content-box', // Ensures padding is *added* to the content area, crucial for this trick
            }}
        >
            {/* Inner Box to hold all slides in a row */}
            <Box
                sx={{
                    position: 'absolute', // Position absolute to fill the aspect-ratio-driven parent
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex', // Use flexbox to arrange slides horizontally
                    transition: 'transform 0.5s ease-in-out', // Smooth slide transition
                    transform: `translateX(-${currentSlideIndex * 100}%)`, // Moves the slide container
                }}
            >
                {imageData.map((image, index) => (
                    <Box
                        key={image.id}
                        sx={{
                            flex: '0 0 100%', // Each slide takes exactly 100% of the visible width
                            height: '100%', // Each slide box takes the full height of the slider
                            position: 'relative', // For absolute positioning of the image and text overlay
                            overflow: 'hidden', // Crucial for objectFit: 'cover' to crop images cleanly
                            display: 'flex', // Flexbox to center image vertically/horizontally
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#198754', // Fallback background for slide
                        }}
                    >
                        {/* The Image Element */}
                        <Box
                            component="img"
                            src={image.src}
                            alt={image.alt}
                            sx={{
                                width: '100%', // Image takes full width of its parent slide box
                                height: '100%', // Image takes full height of its parent slide box
                                objectFit: 'cover', // Scales and crops the image to fill the entire area, maintaining aspect ratio
                                display: 'block', // Ensures no extra space below the image
                                borderRadius: '8px', // Apply border radius directly to the image itself
                            }}
                            // Fallback for image loading errors
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop on error
                                const [w, h] = image.dimensions ? image.dimensions.split('x').map(Number) : [1200, 400];
                                e.target.src = `https://placehold.co/${w}x${h}/6c757d/ffffff?text=Image+Load+Error`; // Placeholder with original dimensions
                                console.error(`Failed to load image: ${image.src}`);
                            }}
                        />

                        {/* Text Overlay for Title, Description, and Metadata */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0, // Position at the very bottom
                                left: 0,
                                right: 0,
                                // Gradient background for better readability over varied image content
                                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.0) 100%)',
                                p: { xs: 1, sm: 2, md: 3 }, // Responsive padding inside the overlay
                                color: 'white',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'flex-start', // Align text to the left
                                justifyContent: 'flex-end', // Push content to the bottom
                                textAlign: 'left', // Ensure text itself is left-aligned
                                zIndex: 1, // Ensure text is above the image
                                // Responsive fixed height for the overlay to prevent overlap and ensure space for dots
                                height: { xs: '80px', sm: '100px', md: '120px' },
                                overflow: 'hidden', // Hide any text that overflows the overlay box
                            }}
                        >
                            <Typography
                                variant="h6"
                                component="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    fontSize: { xs: '0.9rem', sm: '1.1rem', md: '1.25rem' },
                                    lineHeight: 1.2,
                                    mb: 0.5,
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)', // Text shadow for better contrast
                                    // Truncate title to 1 line if it overflows
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {image.title || 'Untitled Image'} {/* Fallback title */}
                            </Typography>
                            {image.description && ( // Only render description if it exists
                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontSize: { xs: '0.75rem', sm: '0.875rem' },
                                        lineHeight: 1.3,
                                        opacity: 0.9,
                                        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                                        // Truncate description to 2 lines if it overflows
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {image.description}
                                </Typography>
                            )}
                            <Typography
                                variant="caption"
                                sx={{
                                    fontSize: { xs: '0.65rem', sm: '0.75rem' },
                                    opacity: 0.7,
                                    mt: 0.5, // Margin top to separate from description
                                    textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                                    // Truncate caption to 1 line if it overflows
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {`Type: ${image.fileType} | Dimensions: ${image.dimensions}`}
                            </Typography>
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Navigation Arrows (visible only if more than one image) */}
            {imageData.length > 1 && (
                <>
                    <IconButton
                        onClick={goToPreviousSlide}
                        aria-label="Previous slide"
                        sx={{
                            position: 'absolute',
                            top: '50%', // Center vertically
                            left: { xs: 5, md: 10 }, // Spacing from left edge
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
                            color: 'white',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                            zIndex: 2, // Ensure arrows are above text overlay and image
                            borderRadius: '50%', // Circular button shape
                            p: { xs: 1, md: 1.5 }, // Padding for button size
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={goToNextSlide}
                        aria-label="Next slide"
                        sx={{
                            position: 'absolute',
                            top: '50%', // Center vertically
                            right: { xs: 5, md: 10 }, // Spacing from right edge
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                            zIndex: 2,
                            borderRadius: '50%',
                            p: { xs: 1, md: 1.5 },
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </>
            )}

            {/* Navigation Dots (visible only if more than one image) */}
            {imageData.length > 1 && (
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 5, md: 10 }, // Position above the text overlay or near its bottom
                        left: '50%', // Center horizontally
                        transform: 'translateX(-50%)',
                        zIndex: 3, // Ensure dots are on top of everything
                        display: 'flex', // Arrange dots in a row
                        justifyContent: 'center',
                    }}
                >
                    {imageData.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => goToSlide(index)}
                            sx={{
                                width: { xs: 8, md: 12 }, // Responsive dot size
                                height: { xs: 8, md: 12 },
                                borderRadius: '50%', // Circular shape
                                backgroundColor: index === currentSlideIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                margin: { xs: '0 4px', md: '0 6px' }, // Spacing between dots
                                cursor: 'pointer',
                                transition: 'background-color 0.3s', // Smooth color change on hover/active
                                '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.8)' },
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default ImageSlider;