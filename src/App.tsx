import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";

const App: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);
  const [position, setPosition] = useState<[number, number]>([0, 0]);
  const [location, setLocation] = useState<string>("");
  const [postalCode, setPostalCode] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("");
  const [isp, setIsp] = useState<string>("");

  useEffect(() => {
    fetchIpAddress();
  }, []);

  const fetchIpAddress = async () => {
    try {
      const { data } = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(data.ip);
      fetchLocation(data.ip);
    } catch (error) {
      console.error("Error fetching IP address:", error);
    }
  };

  const fetchLocation = async (ip: string) => {
    try {
      const API_KEY = import.meta.env.VITE_IP_API_KEY;

      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
      );

      const { lat, lng, city, region, country, postalCode, timezone } =
        response.data.location;
      setPosition([lat, lng]);
      setLocation(`${city}, ${region}, ${country}`);
      setPostalCode(postalCode);
      setTimezone(timezone);

      const isp = response.data.isp;
      setIsp(isp);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <div>
      <header>
        <h1>IP Address Tracker</h1>
        <ul>
          <li>
            <p>IP address</p>
            <p>{ipAddress}</p>
          </li>
          <li>
            <p>Location</p>
            <p>{location}</p>
            {postalCode && <p>{postalCode}</p>}
          </li>
          <li>
            <p>Timezone</p>
            <p>UTC {timezone}</p>
          </li>
          <li>
            <p>ISP</p>
            <p>{isp}</p>
          </li>
        </ul>
      </header>

      {location && (
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          style={{ height: "50vh", width: "100vw" }}
        >
          <TileLayer
            attribution="Google Maps"
            url="https://www.google.com/maps/vt?lyrs=m@189&x={x}&y={y}&z={z}"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default App;
