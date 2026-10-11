import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { RestaurantLists } from "../../constants/localization";
const RestaurantContainer = () => {
  const restaurentData = RestaurantLists;
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurentData);

  return (
    <div className="restaurent-wrapper">
      <div className="container">
        <h2 className="res-heading">Restaurant Lists</h2>
        <div className="res-filter">
          <ul className="filter-lists">
            <li
              className="filter-item top-rated-btn"
              onClick={() => {
                setListOfRestaurant(restaurentData);
              }}
            >
              All Restaurants
            </li>
            <li
              className="filter-item top-rated-btn"
              onClick={function () {
                const topRatedList = restaurentData.filter((item) => {
                  if (item.info.avgRating > 4.5) {
                    return item;
                  }
                });
                setListOfRestaurant(topRatedList);
              }}
            >
              Top Rated Restaurants
            </li>
            <li
              className="filter-item top-rated-btn"
              onClick={function () {
                const leastRatedList = restaurentData.filter((item) => {
                  if (item.info.avgRating < 4) {
                    return item;
                  }
                });
                setListOfRestaurant(leastRatedList);
              }}
            >
              Least Rated Restaurants
            </li>
          </ul>
        </div>
        <div className="res-lists">
          {listOfRestaurant.map((resItem) => {
            return <RestaurantCard resData={resItem} key={resItem.info.id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantContainer;
