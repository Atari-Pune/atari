import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Mock JSON data for slider images. In a real application, this would be fetched.
const imageData = [
    {
        id: 1,
        src: "https://placehold.co/1200x400/198754/ffffff?text=Landscape+1",
        alt: "Beautiful Landscape",
        title: "Serene Green Hills",
        fileType: "png",
        dimensions: "1200x400",
        description: "A peaceful view of rolling green hills under a clear sky."
    },
    {
        id: 2,
        src: "https://placehold.co/1200x400/0d6efd/ffffff?text=Cityscape+2",
        alt: "Urban Cityscape",
        title: "Vibrant City at Dusk",
        fileType: "png",
        dimensions: "1200x400",
        description: "The bustling city lights come alive as the sun sets."
    },
    {
        id: 3,
        src: "https://placehold.co/1200x400/6f42c1/ffffff?text=Nature+3",
        alt: "Nature Scene",
        title: "Tranquil Forest Stream",
        fileType: "png",
        dimensions: "1200x400",
        description: "A calm stream flowing through a dense, green forest."
    },
    {
        id: 4,
        src: "https://placehold.co/1200x400/dc3545/ffffff?text=Mountains+4",
        alt: "Mountain View",
        title: "Majestic Mountain Peaks",
        fileType: "png",
        dimensions: "1200x400",
        description: "Snow-capped mountains piercing through the clouds."
    }
];

/**
 * A dynamic image slider component using Material-UI and Bootstrap principles.
 * Fetches image data from a JSON structure and displays it with navigation controls.
 */
const ImageSlider = () => {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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

    // Optional: Auto-play functionality
    useEffect(() => {
        // Check if there's more than one image to slide
        if (imageData.length > 1) {
            const interval = setInterval(goToNextSlide, 5000); // Change slide every 5 seconds
            return () => clearInterval(interval); // Clear interval on component unmount
        }
    }, [currentSlideIndex, imageData.length]); // Re-run if currentSlideIndex or image data changes

    return (
        <Box
            // Removed className="container-fluid" to eliminate Bootstrap's default horizontal padding
            sx={{
                position: 'relative',
                width: '100%', // Ensure it takes full width of its parent
                margin: '0 auto', // Center it if its parent is wider than 100%
                overflow: 'hidden', // Crucial for hiding overflowing slides
                borderRadius: '8px', // Rounded corners for the slider container
                backgroundColor: '#f8f9fa', // Light background
                px: 0, // Explicitly set horizontal padding to 0
                py: { xs: 1, m: 2 }, // Keep vertical padding as previously defined
                // Fixed height for the slider viewport to ensure consistent sizing
                height: { xs: '250px', sm: '300px', md: '400px', lg: '500px' },
                display: 'flex', // Use flex to center content vertically if needed
                alignItems: 'center', // Center content vertically
            }}
        >
            <Box
                className="d-flex" // Bootstrap flexbox
                sx={{
                    transition: 'transform 0.5s ease-in-out',
                    // The transform now correctly moves by the width of one slide (100% of its parent's width)
                    transform: `translateX(-${currentSlideIndex * 100}%)`,
                    width: `${imageData.length * 100}%`, // Ensure all slides fit in one row
                    height: '100%', // Take full height of the parent slider box
                }}
            >
                {imageData.map((image, index) => (
                    <Box
                        key={image.id}
                        className="d-flex flex-column align-items-center justify-content-center text-white" // Bootstrap classes for centering and text color
                        sx={{
                            flex: '0 0 100%', // Each slide takes exactly 100% of the flex container's width, and does not shrink or grow
                            height: '100%', // Each slide box takes full height
                            position: 'relative',
                            textAlign: 'center',
                            backgroundColor: '#198754', // Bootstrap success color
                            borderRadius: '8px', // Rounded corners for individual slides
                            overflow: 'hidden',
                            p: 3, // Padding inside each slide
                        }}
                    >
                        <Box
                            component="img"
                            src={image.src}
                            alt={image.alt}
                            className="img-fluid rounded" // Bootstrap for responsive image and rounded corners
                            sx={{
                                maxWidth: '100%',
                                height: '100%', // Image takes full height of its container
                                objectFit: 'cover', // Ensures image covers the area without distortion, cropping if necessary
                                display: 'block', // Ensure image takes its own line
                                mb: 2, // Margin bottom for spacing
                            }}
                            // Fallback for image loading errors
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop
                                e.target.src = `https://placehold.co/${image.dimensions.split('x')[0]}x${image.dimensions.split('x')[1]}/6c757d/ffffff?text=Image+Load+Error`; // Bootstrap secondary color fallback
                            }}
                        />
                        <Typography variant="h5" component="h3" sx={{ fontWeight: 'bold', mb: 1, position: 'absolute', bottom: '60px', width: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                            {image.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 1, position: 'absolute', bottom: '30px', width: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                            {image.description}
                        </Typography>
                        <Typography variant="caption" sx={{ opacity: 0.8, position: 'absolute', bottom: '10px', width: '90%', left: '50%', transform: 'translateX(-50%)' }}>
                            {`Type: ${image.fileType} | Dimensions: ${image.dimensions}`}
                        </Typography>
                    </Box>
                ))}
            </Box>

            {/* Navigation Arrows */}
            {imageData.length > 1 && ( // Only show arrows if there's more than one image
                <>
                    <IconButton
                        onClick={goToPreviousSlide}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: { xs: 5, md: 10 },
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                            zIndex: 1,
                            borderRadius: '50%', // Circular button
                            p: { xs: 1, md: 1.5 },
                        }}
                    >
                        <ArrowBackIosNewIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                        onClick={goToNextSlide}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            right: { xs: 5, md: 10 },
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            },
                            zIndex: 1,
                            borderRadius: '50%', // Circular button
                            p: { xs: 1, md: 1.5 },
                        }}
                    >
                        <ArrowForwardIosIcon fontSize="small" />
                    </IconButton>
                </>
            )}

            {/* Navigation Dots */}
            {imageData.length > 1 && ( // Only show dots if there's more than one image
                <Box
                    className="d-flex justify-content-center" // Bootstrap flexbox for centering
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 5, md: 10 },
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                    }}
                >
                    {imageData.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => goToSlide(index)}
                            sx={{
                                width: { xs: 8, md: 12 },
                                height: { xs: 8, md: 12 },
                                borderRadius: '50%',
                                backgroundColor: index === currentSlideIndex ? 'white' : 'rgba(255, 255, 255, 0.5)',
                                margin: { xs: '0 4px', md: '0 6px' },
                                cursor: 'pointer',
                                transition: 'background-color 0.3s',
                                '&:hover': {
                                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                                },
                            }}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default ImageSlider;
