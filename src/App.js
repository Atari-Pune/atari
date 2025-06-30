// src/App.jsx
import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Header from './Components/Header/TitleNavbar';
import NavigationBar from './Components/Header/NavigationBar';
import AppRoutes from './Routes/AppRoutes';
import Footer from "./Components/Footer/Footer"

const theme = createTheme({
    palette: {
        success: { main: '#2E7D32', contrastText: '#ffffff' },
        default: { main: '#ffffff', contrastText: '#000000' }
    },
    typography: { fontFamily: 'Roboto, Arial, sans-serif' },
    breakpoints: { values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 } }
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <NavigationBar />
            <AppRoutes />
            <Footer />
        </ThemeProvider>
    );
}
