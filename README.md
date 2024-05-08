# IP Address Tracker

IP Address Tracker is a web application built to track IP addresses and provide key information and location details using the IP Geolocation API by IPify.

![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Leaflet Badge](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=fff&style=flat)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![.ENV Badge](https://img.shields.io/badge/.ENV-ECD53F?logo=dotenv&logoColor=000&style=flat)

[![screenshot](https://github.com/Valik3201/ip-address-tracker/blob/main/asssets/screenshot.png)](https://github.com/Valik3201/ip-address-tracker/blob/main/asssets/screenshot.png)

## Features

- View the optimal layout for each page depending on their device's screen size.
- See hover states for all interactive elements on the page.
- See their own IP address on the map on the initial page load.
- Search for any IP addresses or domains and see the key information and location.

> [!WARNING]  
> Please note that the IP Geolocation API by IPify provides only 1000 free requests. Once this limit is exceeded, the page will stop working.

## Technologies Used

- React
- TypeScript
- LeafletJS
- Tailwind CSS

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/valik3201/ip-address-tracker.git
   ```

2. Install dependencies:

   ```bash
   cd ip-address-tracker
   npm i
   ```

3. Set up environment variables:

   Create a `.env` file in the root directory and add your IP Geolocation API key:

   ```
   VITE_IP_API_KEY=your-api-key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

## Usage

1. Access the application in your browser at `http://localhost:3000`.
2. The map will display your current IP address location.
3. Enter an IP address or domain name in the search bar and press Enter to see information and location details.

## Useful Resources

- [IP Geolocation API by IPify](https://geo.ipify.org/)
- [LeafletJS Documentation](https://leafletjs.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Free Google Maps in React](https://medium.com/@mayardeeb/free-google-maps-in-react-a425ee269359)

## Author

[![Frontend Mentor Badge](https://img.shields.io/badge/Frontend%20Mentor-3F54A3?logo=frontendmentor&logoColor=fff&style=flat)](https://www.frontendmentor.io/profile/Valik3201)
[![Gmail Badge](https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat)](mailto:valik3201@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat)](https://www.linkedin.com/in/valentynchernetskyi/)

## Acknowledgements

This project was created as a challenge on [Frontend Mentor](https://www.frontendmentor.io), a platform that provides challenges for developers to practice their skills and improve their frontend development abilities. Many thanks to **Frontend Mentor** for providing the inspiration and opportunity to work on this project.

Feel free to explore the code and provide feedback! 🚀
