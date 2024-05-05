import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import IPAddressInfo from "./components/IPAddressInfo";
import IPSearch from "./components/IPSearch";
import MapComponent from "./components/MapComponent";
import { LocationData, fetchLocation, fetchIpAddress } from "./services";
import "leaflet/dist/leaflet.css";

const App: React.FC = () => {
  const [locationData, setLocationData] = useState<LocationData>({
    ipAddress: null,
    position: [0, 0],
    location: "",
    postalCode: "",
    timezone: "",
    isp: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ip = await fetchIpAddress();
        const locationData = await fetchLocation(ip);
        setLocationData(locationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleSearch = async (query: string) => {
    try {
      const locationData = await fetchLocation(query);
      setLocationData(locationData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="font-rubik max-h-svh">
      <div className="w-full h-[300px] md:h-[280px] bg-mobile bg-cover bg-center bg-blue md:bg-desktop"></div>

      <div className="absolute z-10 top-10 left-1/2 transform -translate-x-1/2">
        <Header />
        <IPSearch onSearch={handleSearch} />
        <IPAddressInfo {...locationData} />
      </div>
      {locationData.location && (
        <MapComponent position={locationData.position} />
      )}
    </div>
  );
};

export default App;
