import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.unsplash.com/photo-1673191898498-9bac443b2407?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1581129724980-2ab2153c3d8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEhPVCUyMFdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1611956089827-f211b3308544?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q09MRCUyMHdlYXRlaGdyfGVufDB8fDB8fHww";
    const RAINY_URL = "https://images.unsplash.com/photo-1572455857811-045fb4255b5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";

    // Function to determine background color based on temperature
    const getTemperatureColor = (temp) => {
        const tempNum = parseFloat(temp);
        if (tempNum > 35) return "#ff5722"; // Very hot
        if (tempNum > 30) return "#ff9800"; // Hot
        if (tempNum > 20) return "#ffc107"; // Warm
        if (tempNum > 10) return "#8bc34a"; // Mild
        if (tempNum > 0) return "#03a9f4";  // Cool
        return "#2196f3"; // Cold
    };

    // Get the appropriate image URL based on weather conditions
    const getWeatherImage = () => {
        if (info.weather.includes("rain") || info.humidity > 80) {
            return RAINY_URL;
        } else if (info.weather.includes("cloud")) {
            return INIT_URL;
        } else if (parseFloat(info.temp) > 30) {
            return HOT_URL;
        } else {
            return COLD_URL;
        }
    };

    return (
        <div className="InfoBox">
            <div className="card-container">
                <Card sx={{ width: 345 }}>
                    <CardMedia
                        sx={{ height: 180 }}
                        image={getWeatherImage()}
                        title={info.weather}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div" 
                            sx={{ 
                                fontWeight: 'bold',
                                color: getTemperatureColor(info.temp),
                                transition: 'color 0.5s ease'
                            }}>
                            {info.city}
                        </Typography>
                        <Typography variant="h5" sx={{ mb: 2, fontWeight: 500 }}>
                            {info.temp}°C
                        </Typography>
                        <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                            {info.weather.charAt(0).toUpperCase() + info.weather.slice(1)}
                        </Typography>
                        
                        <div className="weather-details">
                            <div className="weather-detail-item">
                                <Typography variant="body2">Feels Like</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>{info.feel_Like}°C</Typography>
                            </div>
                            
                            <div className="weather-detail-item">
                                <Typography variant="body2">Humidity</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>{info.humidity}%</Typography>
                            </div>
                            
                            <div className="weather-detail-item">
                                <Typography variant="body2">Min</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>{info.tempMin}°C</Typography>
                            </div>
                            
                            <div className="weather-detail-item">
                                <Typography variant="body2">Max</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 500 }}>{info.tempMax}°C</Typography>
                            </div>
                            
                            <div className="weather-description">
                                <Typography variant="body2">
                                    The weather in {info.city} can be described as {info.weather} 
                                    and feels like {info.feel_Like}°C with a pressure of {info.pressure} hPa.
                                </Typography>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}