import axios from "axios";
import { LocationData } from "./types";

export const fetchLocation = async (ip: string): Promise<LocationData> => {
  try {
    const API_KEY = import.meta.env.VITE_IP_API_KEY;

    const response = await axios.get(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ip}`
    );

    const { lat, lng, city, region, country, postalCode, timezone } =
      response.data.location;
    const position: [number, number] = [lat, lng];
    const location = `${city}, ${region}, ${country}`;
    const isp = response.data.isp;

    return { ipAddress: ip, position, location, postalCode, timezone, isp };
  } catch (error) {
    console.error("Error fetching location:", error);
    throw error;
  }
};
