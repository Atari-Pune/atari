import React from 'react';
import {
    Box,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useTheme,
    Link,
    keyframes,
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PhoneIcon from '@mui/icons-material/Phone';

// Keyframes for marquee scroll (News section)
const scrollUp = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-50%);
  }
`;

const ComponentD = () => {

    // Get the base URL from environment variables
    const BASE_PROGRAMMES_URL = process.env.REACT_APP_WEBSITE_URL;
    // Add a fallback in case the env variable is not set

    const theme = useTheme();

    const newsUpdates = [
        { text: 'Project Completion-cum-Convergence Workshop on Integrated Farming System under ATARI Kolkata organized', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/07/News-Item-on-IFS-for-ATARI-Website.pdf' },
        { text: 'Annual Zonal Workshop 2023 of KVKs under ICAR-ATARI Kolkata organized at Kalimpong', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/06/News-Item-on-AZW-2023.pdf' },
        { text: 'ICAR-ATARI Kolkata organized NICRA Field visit at Paiyong Busty, Kalimpong, W.B.', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/06/News-item-on-NICRA-ZMC-visit.pdf' },
        { text: 'Hon’ble Secretary DARE and DG, ICAR inaugurated Natural Farming Demonstration Unit at Kalyan KVK', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/05/News-item_ATARI-Kolkata.pdf' },
        { text: '‘World Intellectual Property Day 2023’ celebrated at ICAR-ATARI Kolkata', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/05/News-item-World-Intellectual-Property-Day-2023.pdf' },
        { text: 'Visit of Agriculture Commissioner, Govt. of India to ICAR-ATARI Kolkata', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/06/Visit-of-Agri.-Commissioner-GoI-to-ATARI-Kol-17.04.2023.pdf' },
        { text: 'High level FPOs-FPCs-Farmers’ Meet Chaired by the Hon’ble Secretary, DARE & DG, ICAR', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/04/News-Item-FPOs-FPCs-Farmers-Meet_KVK-Jalpaiguri_-ATARI-Kolkata-web.pdf' },
        { text: 'Hon’ble Secretary, DARE and DG, ICAR visited an entrepreneurial mushroom unit of a young engineer guided by Coochbehar KVK', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/04/News-item_Young-entrepren_ATARI-Web.pdf' },
        { text: 'Secretary, DARE & DG, ICAR visited KVK Coochbehar on the occasion of celebration of Golden Jubilee Year of KVKs and International Year of Millet 2023', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/04/News-item_Millet_ATARI-web.pdf' },
        { text: 'Review Workshop-cum-Monitoring Field Visit of Farmer FIRST Programme (FFP) organized', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/03/FFP-Review-Workshop_22.03.2023.pdf' },
        { text: 'Golden Jubilee Celebration of KVKs', link: 'https://www.atarikolkata.org/wp-content/uploads/2023/03/Golden-Jubilee-Celebration-of-KVKs.pdf' },
        { text: 'Zonal Review Workshop of FFP under ATARI Kolkata organized', link: 'https://www.atarikolkata.org/wp-content/uploads/2022/04/News-item_-Zonal-Review-Workshop-of-FFP_-ATARI-Kolkata.pdf' },
        { text: 'Online Review Workshop of Farmer FIRST Programme (FFP) under ATARI Kolkata Organized', link: 'https://www.atarikolkata.org/wp-content/uploads/2022/01/Review-Workshop-of-FFP-under-ATARI-Kolkata-Organized.pdf' },
        { text: 'Suspension of allotment for accommodation in the Guest House of ICAR-ATARI Kolkata', link: 'https://www.atarikolkata.org/wp-content/uploads/2022/01/Guest-House.pdf' },
        { text: 'Webinar on ‘Annual Review Workshop’ of GKMS KVKs of Zone-V was organized by ICAR-ATARI Kolkata', link: 'https://www.atarikolkata.org/wp-content/uploads/2021/08/GKMS-Annual-Review-Workshop-2021-of-ATARI-Kolkata.pdf' },
        { text: 'Webinar on ‘Concluding Zonal Workshop’ of NICRA KVKs of Zone-V was organized by ICAR-ATARI Kolkata', link: 'https://www.atarikolkata.org/wp-content/uploads/2021/06/NICRA-TDC-Concluding-Workshop_ATARI-Kolkata.pdf' },
        { text: 'Webinar on ‘Review Workshop For Finalizing Action Plan For The Year 2021-22 For KVKs Of West Bengal and A&N Islands’ organized by ICAR-ATARI Kolkata', link: 'https://www.atarikolkata.org/wp-content/uploads/2021/06/News-item_ICAR-ATARI-Kolkata.pdf' },
        { text: 'Vigilance Awareness Week celebrated at ATARI Kolkata', link: 'http://www.atarikolkat`a.org/wp-content/uploads/2020/11/News-item-on-Vigilence-Awareness-Week-celebration-_27.10.2020_ATARI-Kolkata.docx' },
        { text: 'Webinar on ‘New Farm Act 2020’ conducted at ATARI Kolkata', link: 'http://www.atarikolkata.org/wp-content/uploads/2020/11/News-item-on-New-Farm-Act-2020-from-ATARI-Kolkata.docx' },
        { text: 'Compassionate appointment of dependent of deceased Group-B and C employees worked at ICAR-ATARI Kolkata', link: 'http://www.atarikolkata.org/wp-content/uploads/2020/07/Compassionate-appointment.pdf' },
        { text: 'Annual Zonal Workshop 2020 of KVKs under ICAR-ATARI Kolkata organized through video conferencing', link: 'http://www.atarikolkata.org/wp-content/uploads/2020/07/News-item-on-Annual-Zonal-Workshop-2020_ATARI-Kolkata.docx' },
        { text: 'Review Meeting of Farmer FIRST Programme Organized', link: 'http://www.atarikolkata.org/wp-content/uploads/2020/01/News-item_-Review-Meeting-of-FFP_-ATARI-Kolkata.docx' },
    ];


    const onGoingProgrammes = [
        { text: 'Agriculture-Drone Project', link: `${BASE_PROGRAMMES_URL}pdf/Agriculture-Drone-Project.pdf` },
        { text: 'ARYA', link: `${BASE_PROGRAMMES_URL}pdf/ARYA.pdf` },
        { text: 'ASCI', link: `${BASE_PROGRAMMES_URL}pdf/ASCI.pdf` },
        { text: 'CFLD on Oilseeds', link: `${BASE_PROGRAMMES_URL}pdf/CFLD-Oilseed.pdf` },
        { text: 'CFLD on Pulses', link: `${BASE_PROGRAMMES_URL}pdf/CFLD-Pulses.pdf` },
        { text: 'DFI', link: `${BASE_PROGRAMMES_URL}pdf/DFI.pdf` },
        { text: 'Dr. Panjabrao Deshmukh Natural Farming Mission (MS)', link: `${BASE_PROGRAMMES_URL}pdf/Dr. Panjabrao Deshmukh Natural Farming Mission. (MS).pdf` },
        { text: 'Dr. Panjabrao Deshmukh Natural Farming Mission', link: `${BASE_PROGRAMMES_URL}pdf/Dr. Panjabrao Deshmukh Natural Farming Mission.pdf` },
        { text: 'FFP', link: `${BASE_PROGRAMMES_URL}pdf/FFP.pdf` },
        { text: 'FPO', link: `${BASE_PROGRAMMES_URL}pdf/FPO.pdf` },
        { text: 'GKMS', link: `${BASE_PROGRAMMES_URL}pdf/GKMS.pdf` },
        { text: 'Natural Farming', link: `${BASE_PROGRAMMES_URL}pdf/Natural-Farming.pdf` },
        { text: 'NICRA', link: `${BASE_PROGRAMMES_URL}pdf/NICRA.pdf` },
        { text: 'Special Project on Cotton', link: `${BASE_PROGRAMMES_URL}pdf/SpecialProjectonCotton.pdf` },
        { text: 'Success Stories', link: `${BASE_PROGRAMMES_URL}pdf/Success-Stories.pdf` },
        { text: 'TSP', link: `${BASE_PROGRAMMES_URL}pdf/TSP.pdf` },
    ];

    const telephoneDirectory = [
        { text: 'Director ICAR - ATARI Kanpur', link: '#' },
        { text: 'Vice Chancellors of Agricultural Universities (SAU/CAU etc.)', link: '#' },
        { text: 'Directors of ICAR Institutes Having KVK', link: '#' },
        { text: 'Director of Extension Education', link: '#' },
        { text: 'Chairman of NGOS', link: '#' },
        { text: 'KVK Staff Details', link: '#' },
        { text: 'Telephone Directory of KVKs and Others', link: '#' },
    ];


    const duplicatedNews = [...newsUpdates, ...newsUpdates]; // Seamless scroll

    return (
        <Box sx={{ borderRadius: 2, bgcolor: 'background.paper' }}>
            {/* News and Updates */}
            <Typography variant="h6" fontWeight="bold" color="primary">
                News and Updates
            </Typography>
            <Box
                sx={{
                    height: 150, // 3 items * ~48px each
                    overflow: 'hidden',
                    position: 'relative',
                    border: `1px solid ${theme.palette.divider}`,
                    borderRadius: 1,
                    backgroundColor: theme.palette.background.default,
                }}
            >
                <List
                    dense
                    sx={{
                        animation: `${scrollUp} ${duplicatedNews.length * 2}s linear infinite`,
                        '&:hover': { animationPlayState: 'paused' },
                        m: 0,
                        p: 0,
                    }}
                >
                    {duplicatedNews.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                <ArrowRightIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover" color="text.primary">
                                        <Typography variant="body2">{item.text}</Typography>
                                    </Link>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* On Going Programmes */}
            <Typography variant="h6" fontWeight="bold" color="primary"  mt={2} mb={1}>
                On Going Programmes
            </Typography>
            <Box sx={{ maxHeight: 150, overflowY: 'auto', border: `1px solid ${theme.palette.divider}`, borderRadius: 1, p: 1 }}>
                <List dense>
                    {onGoingProgrammes.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                <ArrowRightIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Link href={item.link} target="_blank" rel="noopener noreferrer" underline="hover" color="text.primary">
                                        <Typography variant="body2">{item.text}</Typography>
                                    </Link>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>

            {/* Telephone Directory */}
            <Typography variant="h6" fontWeight="bold" color="primary" mt={2} mb={1}>
                Telephone Directory
            </Typography>
            <Box sx={{ maxHeight: 150, overflowY: 'auto', border: `1px solid ${theme.palette.divider}`, borderRadius: 1, p: 1 }}>
                <List dense>
                    {telephoneDirectory.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ py: 0.5 }}>
                            <ListItemIcon sx={{ minWidth: 24 }}>
                                <PhoneIcon fontSize="small" />
                            </ListItemIcon>
                            <ListItemText
                                primary={
                                    <Link href={item.link} underline="hover" color="text.primary">
                                        <Typography variant="body2">{item.text}</Typography>
                                    </Link>
                                }
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
};

export default ComponentD;
