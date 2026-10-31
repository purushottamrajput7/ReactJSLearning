import React from "react";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = (props) => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);

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
