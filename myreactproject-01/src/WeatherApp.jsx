import { useState, useEffect } from 'react';
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feel_Like: 24.84,
        temp: 25.05,
        tempMin: 25.03,
        tempMax: 25.03,
        pressure: 1000,
        humidity: 50,
        weather: "haze",
    });

    const [theme, setTheme] = useState('light');

    // Create a theme instance based on current weather
    const appTheme = createTheme({
        palette: {
            mode: theme,
            primary: {
                main: theme === 'dark' ? '#90caf9' : '#1976d2',
            },
            background: {
                default: theme === 'dark' ? '#222233' : '#f0f8ff',
            },
        },
        typography: {
            fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
            h1: {
                fontWeight: 700,
            },
        },
        components: {
            MuiContainer: {
                styleOverrides: {
                    root: {
                        minHeight: '100vh',
                        paddingTop: '2rem',
                        paddingBottom: '2rem',
                        transition: 'all 0.5s ease',
                    },
                },
            },
        },
    });

    // Update theme based on time of day or weather conditions
    useEffect(() => {
        const currentHour = new Date().getHours();
        // Night time or stormy weather
        if (currentHour < 6 || currentHour > 18 || 
            weatherInfo.weather.includes('rain') || 
            weatherInfo.weather.includes('storm')) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }, [weatherInfo.weather]);

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }

    return (
        <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Box 
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        padding: { xs: 2, md: 4 },
                        borderRadius: '20px',
                        background: theme === 'dark' 
                            ? 'linear-gradient(145deg, #1e1e2f, #2d2d44)' 
                            : 'linear-gradient(145deg, #e6f2ff, #ffffff)',
                        boxShadow: theme === 'dark'
                            ? '0 10px 30px rgba(0, 0, 0, 0.3)'
                            : '0 10px 30px rgba(0, 0, 0, 0.1)',
                        transition: 'all 0.5s ease',
                    }}
                >
                    <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: 2, 
                        mb: 3,
                        animation: 'fadeIn 1s ease-in'
                    }}>
                        <WbSunnyIcon sx={{ 
                            fontSize: 40, 
                            color: theme === 'dark' ? '#ffd54f' : '#ff9800',
                            animation: 'rotate 10s linear infinite'
                        }} />
                        <Typography variant="h3" component="h1" sx={{ 
                            fontWeight: 700,
                            background: theme === 'dark' 
                                ? 'linear-gradient(45deg, #90caf9, #64b5f6)' 
                                : 'linear-gradient(45deg, #1976d2, #42a5f5)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}>
                            Weather App
                        </Typography>
                    </Box>
                    
                    <SearchBox updateInfo={updateInfo}/>
                    <InfoBox info={weatherInfo}/>
                </Box>
            </Container>

            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                
                body {
                    margin: 0;
                    padding: 0;
                    transition: all 0.5s ease;
                    background: ${theme === 'dark' ? '#151522' : '#e9f5ff'};
                }
            `}</style>
        </ThemeProvider>
    )
}