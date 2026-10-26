import React, { useEffect } from "react";
import { useParams } from "react-router";

const RestaurantMenu = (props) => {
  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    try {
      const apiUrl =
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.66770&lng=77.43370&restaurantId=" +
        resId;

      const response = await fetch(apiUrl);
      console.log(response);

      if (!response.ok) {
        console.log("Fetched Failed:", response.status);
        return;
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log("Error:", error.message);
    }
  };

  return (
    <section className="main">
      <div className="container">
        <div className="res-menu">
          <h2 className="menu-name">XYZ Restaurant</h2>
          <p className="menu">hfiwefjsdfjshfj</p>
        </div>
      </div>
    </section>
  );
};
export default RestaurantMenu;
