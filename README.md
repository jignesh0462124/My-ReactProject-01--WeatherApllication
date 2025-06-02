# React Weather App

A modern and responsive weather application built with React, Material-UI, and OpenWeatherMap API. Get real-time weather information for any city with a beautiful user interface that adapts to weather conditions.

## Features

- Real-time weather data fetching
- Dynamic theme switching based on time of day and weather conditions
- Responsive design that works on all devices
- Beautiful UI with Material Design components
- Animated components and transitions
- Error handling with user-friendly messages
- Display of comprehensive weather data including:
  - Current temperature
  - Feels like temperature
  - Minimum and maximum temperature
  - Humidity
  - Pressure
  - Weather description

## Technologies Used

- React
- Material-UI (MUI)
- Vite
- OpenWeatherMap API
- CSS3 with custom animations
- ESLint for code quality

## Getting Started

1. Clone the repository:
```bash
git clone [your-repo-url]
cd myreactproject-01
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your OpenWeatherMap API key:
```
VITE_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

## Building for Production

To create a production build:

```bash
npm run build
```

## Environment Variables

The following environment variables are required:

- `VITE_API_KEY`: Your OpenWeatherMap API key

## Project Structure

```
myreactproject-01/
├── src/
│   ├── components/
│   │   ├── InfoBox.jsx
│   │   ├── SearchBox.jsx
│   │   └── WeatherApp.jsx
│   ├── assets/
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── vite.config.js
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments

- OpenWeatherMap API for weather data
- Material-UI team for the amazing component library
- Unsplash for weather images
