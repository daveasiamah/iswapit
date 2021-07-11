import { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      // const {
      //   coords: { longitude, latitude },
      // } = await Location.getLastKnownPositionAsync();
      const { coords } = await Location.getCurrentPositionAsync();
      // setLocation({ longitude, latitude });
      const { longitude, latitude } = coords;
      console.log(coords.longitude, coords.latitude);
      setLocation({ longitude, latitude });
    } catch (error) {
      console.log("Error getting user's location", error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};
export default useLocation;
