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
        {text: 'Annual Zonal Workshop Schedule', link:'https://ik.imagekit.io/ataripune/assets/news-updates/news/16.07.2025%20AZW%202025%20ATARI%20Pune%20-Programme%20Schedule.pdf?updatedAt=1753097044072'},

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
        { text: 'Agriculture-Drone Project', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/Agriculture-Drone-Project.pdf?updatedAt=1753952313164` },
        { text: 'ARYA', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/ARYA.%20(2).pdf?updatedAt=1753952312945` },
        { text: 'ASCI', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/ASCI.pdf?updatedAt=1753952312962` },
        { text: 'CFLD on Oilseeds', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/CFLD-Oilseed.pdf?updatedAt=1753952313464` },
        { text: 'CFLD on Pulses', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/CFLD-Pulses.pdf?updatedAt=1753952313169` },
        { text: 'DFI', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/DFI.pdf?updatedAt=1753952313541` },
        { text: 'Dr. Panjabrao Deshmukh Natural Farming Mission (MS)', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/Dr.%20Panjabrao%20Deshmukh%20Natural%20Farming%20Mission.pdf?updatedAt=1753952313301` },
        // { text: 'Dr. Panjabrao Deshmukh Natural Farming Mission', link: `${BASE_PROGRAMMES_URL}pdf/Dr. Panjabrao Deshmukh Natural Farming Mission.pdf` },
        { text: 'FFP', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/FFP.pdf?updatedAt=1753952313547` },
        { text: 'FPO', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/FPO.pdf?updatedAt=1753952313394` },
        { text: 'GKMS', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/GKMS.pdf?updatedAt=1753952316890` },
        { text: 'Natural Farming', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/Natural-Farming.pdf?updatedAt=1753952317757` },
        { text: 'NICRA', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/NICRA.pdf?updatedAt=1753952317814` },
        { text: 'Special Project on Cotton', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/SpecialProjectonCotton.pdf?updatedAt=1753952318427` },
        { text: 'TSP', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/TSP.pdf?updatedAt=1753952318496` },
        // { text: 'Success Stories', link: `https://ik.imagekit.io/ataripune/assets/On%20Going%20Programs/Success-Stories.pdf?updatedAt=1753952686698` },
        
    ];

    const telephoneDirectory = [
        { text: 'Director ICAR - ATARI Pune', link: 'https://ik.imagekit.io/ataripune/assets/Contact%20Details/Telephone%20Directory/Contact%20Details%20of%20Director%20ATARI%20Pune.pdf?updatedAt=1753942994710' },
        { text: 'Vice Chancellors of Agricultural Universities (SAU/CAU etc.)', link: 'https://ik.imagekit.io/ataripune/assets/Contact%20Details/Telephone%20Directory/Updated%20VC%20contact%20details-03.07.2025.pdf?updatedAt=1753942995690' },
        // { text: 'Directors of ICAR Institutes Having KVK', link: '#' },
        { text: 'Director of Extension Education', link: 'https://ik.imagekit.io/ataripune/assets/Contact%20Details/Telephone%20Directory/Updated%20ICAR%20DEE%20contact%20details%20updated%2003.07.2025.pdf?updatedAt=1753942996559' },
        { text: 'Chairman of NGOS', link: 'https://ik.imagekit.io/ataripune/assets/Contact%20Details/Telephone%20Directory/Contact%20Details%20of%20Chairpersons_Secretaries_Presidents%20of%20NGO-KVKs%2019.6.24.pdf?updatedAt=1753942997428' },
        { text: 'KVK Staff Details', link: 'https://ik.imagekit.io/ataripune/assets/Contact%20Details/Contact%20details%20of%20KVK.pdf?updatedAt=1753682184098' },
        // { text: 'Telephone Directory of KVKs and Others', link: '#' },
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
