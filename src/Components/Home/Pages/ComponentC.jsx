import React, { useState, useEffect, useCallback } from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    useTheme,
    MobileStepper,
    ListItemIcon,
    IconButton,
} from '@mui/material';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// Dummy image data
const images = [
    { label: 'Random Image 1', imgPath: 'https://picsum.photos/id/237/800/450' },
    { label: 'Random Image 2', imgPath: 'https://picsum.photos/id/238/800/450' },
    { label: 'Random Image 3', imgPath: 'https://picsum.photos/id/239/800/450' },
    { label: 'Random Image 4', imgPath: 'https://picsum.photos/id/240/800/450' },
];

const ComponentC = () => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = useCallback(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
    }, [maxSteps]);

    const handleBack = useCallback(() => {
        setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
    }, [maxSteps]);

    // Auto-play functionality
    useEffect(() => {
        if (maxSteps > 1) {
            const timer = setInterval(() => {
                handleNext();
            }, 5000);
            return () => {
                clearInterval(timer);
            };
        }
    }, [activeStep, maxSteps, handleNext]);

    const greenTextColor = theme.palette.success.main;

    return (
        <Box
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
            }}
        >
            {/* Bootstrap Grid Container */}
            <div className="row g-3"> {/* g-3 for gutter spacing of 3 */}

                {/* Carousel Section - Bootstrap Column */}
                <div className="col-12 col-md-6">
                    <Box
                        sx={{
                            position: 'relative',
                            overflow: 'hidden',
                            height: { xs: '200px', sm: '280px', md: '350px' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Box
                            component="img"
                            sx={{
                                height: '100%',
                                width: '100%',
                                objectFit: 'cover',
                                transition: 'opacity 0.5s ease-in-out',
                                opacity: 1,
                            }}
                            src={images[activeStep].imgPath}
                            alt={images[activeStep].label}
                        />

                        {maxSteps > 1 && (
                            <>
                                <IconButton
                                    onClick={handleBack}
                                    disabled={activeStep === 0 && maxSteps > 0}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: theme.spacing(1),
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                                        zIndex: 1,
                                    }}
                                >
                                    <KeyboardArrowLeft />
                                </IconButton>
                                <IconButton
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1 && maxSteps > 0}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        right: theme.spacing(1),
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                        color: 'white',
                                        '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
                                        zIndex: 1,
                                    }}
                                >
                                    <KeyboardArrowRight />
                                </IconButton>
                            </>
                        )}

                        {maxSteps > 1 && (
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                nextButton={<Box />}
                                backButton={<Box />}
                                sx={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    borderRadius: `0 0 ${theme.shape.borderRadius}px ${theme.shape.borderRadius}px`,
                                    '& .MuiMobileStepper-dotActive': { backgroundColor: theme.palette.primary.main },
                                }}
                            />
                        )}
                    </Box>
                </div> {/* End col-12 col-md-6 */}

                {/* Mandate Section - Bootstrap Column */}
                <div className="col-12 col-md-6">
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        px: { xs: 0, sm: 2, md: 2 }, // Keep MUI padding for internal Box content
                        maxWidth: 'none', // Allow it to fill the column
                        mx: 'auto', // Still useful for centering inner content if maxWidth was set
                        height: '100%',
                    }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: greenTextColor,
                                mb: 1.5,
                            }}
                        >
                            Mandate of ATARI
                        </Typography>
                        <List dense={false} sx={{ mt: 1, width: '100%' }}>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Coordination and monitoring of technology application and frontline extension education programs."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Strengthening agricultural extension research and knowledge management."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Box>
                </div> {/* End col-12 col-md-6 */}

                {/* Major Activities Section - New Bootstrap Row */}
                <div className="col-12 mt-4"> {/* Bootstrap mt-4 for top margin */}
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        mx: 'auto',
                        // mt: { xs: 2, md: 4 } // Replaced by Bootstrap mt-4 above
                    }}>
                        <Typography
                            variant="h5"
                            component="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: greenTextColor,
                            }}
                        >
                            Major Activities of ATARI
                        </Typography>
                        <List dense={false} sx={{ mt: 1, width: '100%' }}>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Planning, monitoring and reviewing of KVK activities in the zone; to identify, prioritize and implement various activities related to technology integration and dissemination."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="small" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Coordinating with SAUs, ICAR institutes/organizations, line departments and voluntary organizations in the zone for implementation of KVK mandated activities."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                            <ListItem disablePadding sx={{ alignItems: 'flex-start', justifyContent: 'center' }}>
                                <ListItemIcon sx={{ minWidth: '30px', mt: 0.5 }}>
                                    <CheckCircleOutlineIcon color="primary" fontSize="primary" /> {/* Using primary for default color */}
                                </ListItemIcon>
                                <ListItemText
                                    primary="Facilitating financial and infrastructural support to KVKs for effective functioning."
                                    primaryTypographyProps={{
                                        variant: 'body1',
                                        sx: { lineHeight: 1.6, fontSize: { xs: '0.9rem', sm: '1rem' }, textAlign: 'left' },
                                    }}
                                />
                            </ListItem>
                        </List>
                    </Box>
                </div> {/* End col-12 */}

            </div> {/* End row */}
        </Box>
    );
};

export default ComponentC;