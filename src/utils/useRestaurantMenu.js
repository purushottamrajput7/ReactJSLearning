import { useEffect, useState } from "react";
import { MENU_API } from "../../constants/localization";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetMenuData();
  }, []);
  const fetMenuData = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      console.log(response);

      if (!response.ok) {
        console.log("Fetch Failed: ", response.status);
        return;
      }
      const jsonData = await response.json();
      console.log(jsonData);

      setResInfo(jsonData.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return resInfo;
};
export default useRestaurantMenu;
