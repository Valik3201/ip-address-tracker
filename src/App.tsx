import React, { useState, useEffect } from "react";
import IPAddressInfo from "./components/IPAddressInfo";
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

  return (
    <div className="font-rubik max-h-svh">
      <div className="w-full h-[300px] md:h-[280px] bg-mobile bg-cover bg-center bg-blue md:bg-desktop"></div>

      <IPAddressInfo {...locationData} />
      {locationData.location && (
        <MapComponent position={locationData.position} />
      )}
    </div>
  );
};

export default App;
