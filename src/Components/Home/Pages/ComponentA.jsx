import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const ComponentA = () => {
  const greenTextColor = '#198754';
  const warningTextColor = '#ffc107';

  return (
    <Container maxWidth="xl" sx={{ px: { xs: 1, sm: 1, md: 2 } }}>
      <Box sx={{ mb: 3 }}>
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontSize: { xs: '0.8rem', sm: '1.2rem', md: '1.7rem' },
            fontWeight: 'bold',
            color: greenTextColor,
            textAlign: { xs: 'center', sm: 'left' },
            lineHeight: 1.3,
          }}
        >
          ICAR-Agricultural Technology Application Research Institute, Pune:{' '}
          <Box component="span" sx={{ color: warningTextColor }}>
            An Overview
          </Box>
        </Typography>
      </Box>

      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: '0.95rem', sm: '1rem', md: '1.05rem' },
          lineHeight: 1.75,
          color: '#343a40',
          textAlign: 'justify',
        }}
      >
        The Indian Council of Agricultural Research has established 11 Agricultural Technology Application Research
        Institutes (ATARIs) across the country for monitoring, reviewing and coordinating the KVK system.
        Agricultural Extension Division, one of the eight divisions of ICAR, New Delhi has established a strong
        network of Krishi Vigyan Kendras (731 KVKs) all over the country. The division is headed by Deputy Director
        General (Agricultural Extension) and supported by two Assistant Directors Generals, four Principal/Senior
        Scientists, two Directors and one Under Secretary to monitor and review the progress of KVKs through ATARIs.
        <br />
        <br />
        Earlier, there were eight ATARIs (Ludhiana, Kolkata, Barapani, Kanpur, Hyderabad, Jodhpur, Jabalpur, and
        Bengaluru). Considering the increasing number of KVKs and the need for intricate monitoring and coordination,
        three additional ATARIs (Pune, Guwahati, and Patna) were established in 2015 and began functioning in 2017.
        Historically, ATARI originated as Zonal Coordination Units in 1979 at 8 locations. These were upgraded to
        Zonal Project Directorates (ZPDs) in 2009 and further restructured into Agricultural Technology Application
        Research Institutes (ATARIs) in 2015.
      </Typography>
    </Container>
  );
};

export default ComponentA;
