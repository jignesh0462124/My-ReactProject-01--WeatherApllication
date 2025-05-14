import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CircularProgress from '@mui/material/CircularProgress';
import './SearchBox.css';

export default function SearchBox({updateInfo}) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    let [loading, setLoading] = useState(false);
    
    const API_URL ="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "75698ee23b5f70927c24e88689ab636e";

    let getWeatherInfo = async () => {
        try{ 
            setLoading(true);
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            
            if(jsonResponse.cod === "404" || !jsonResponse.main) {
                setError(true);
                setLoading(false);
                return null;
            }
            
            let result = {
                city: city,
                temp: (jsonResponse.main.temp - 273.15).toFixed(2), // Convert from Kelvin to Celsius
                tempMin: (jsonResponse.main.temp_min - 273.15).toFixed(2),
                tempMax: (jsonResponse.main.temp_max - 273.15).toFixed(2),
                pressure: jsonResponse.main.pressure,
                humidity: jsonResponse.main.humidity,
                feel_Like: (jsonResponse.main.feels_like - 273.15).toFixed(2),
                weather: jsonResponse.weather[0].description,
            }
            console.log(result);
            setLoading(false);
            return result; 
        } catch(error){
            setError(true);
            setLoading(false);
            console.log(error);
            return null;
        }
    };

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };
    
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        setError(false);
        let newInfo = await getWeatherInfo();
        if(newInfo) {
            updateInfo(newInfo);
            setError(false);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit} className="search-form">
                <TextField 
                    id="city" 
                    label="Enter City Name" 
                    variant="outlined" 
                    required 
                    value={city} 
                    onChange={handleChange}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LocationOnIcon color="primary" />
                            </InputAdornment>
                        ),
                    }}
                    placeholder="e.g. London, New York, Tokyo"
                />
                <br />
                <Button 
                    variant="contained" 
                    type="submit" 
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SearchIcon />}
                >
                    {loading ? "Searching..." : "Get Weather"}
                </Button>
                {error && 
                    <div className="error-message">
                        City not found! Please check the spelling and try again.
                    </div>
                }
            </form>
        </div>
    )
}   
