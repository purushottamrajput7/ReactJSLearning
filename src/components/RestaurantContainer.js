import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerCard from "./ShimmerCard";
const RestaurantContainer = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [allListOfRestaurant, setAllListOfRestaurant] = useState([]);
  const shimmerCount = 8;
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchRestaurantdata();
  }, []);

  const fetchRestaurantdata = async () => {
    try {
      const data = fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const fetchedData = await (await data).json();
      const filteredData =
        fetchedData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setListOfRestaurant(filteredData);
      setAllListOfRestaurant(filteredData);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="restaurent-wrapper">
      <div className="container">
        <div className="search">
          <input
            className="search-input"
            type="text"
            id="search"
            placeholder={"Search any restaurant"}
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              const changedRestaurant = allListOfRestaurant.filter((item) => {
                if (
                  item?.info?.name
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase())
                ) {
                  return item;
                }
              });
              if (searchText) {
                setTimeout(function () {
                  setListOfRestaurant(changedRestaurant);
                }, 300);
              } else {
                setTimeout(function () {
                  setListOfRestaurant(allListOfRestaurant);
                }, 300);
              }
            }}
          />
          <button
            className="btn search-btn"
            onClick={() => {
              const searchecdList = allListOfRestaurant.filter((item) => {
                if (
                  item?.info?.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase())
                ) {
                  return item;
                }
              });
              if (searchText) {
                setListOfRestaurant(searchecdList);
              } else {
                setListOfRestaurant(allListOfRestaurant);
              }
            }}
          >
            Search
          </button>
        </div>
        <h2 className="res-heading">Restaurant Lists</h2>
        <div className="res-filter">
          <ul className="filter-lists">
            <li
              className="filter-item top-rated-btn"
              onClick={() => {
                setListOfRestaurant(allListOfRestaurant);
              }}
            >
              All Restaurants
            </li>
            <li
              className="filter-item top-rated-btn"
              onClick={function () {
                const topRatedList = allListOfRestaurant.filter((item) => {
                  if (item.info.avgRating >= 4.5) {
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
                const leastRatedList = allListOfRestaurant.filter((item) => {
                  if (item.info.avgRating < 4.5) {
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
          {allListOfRestaurant.length === 0
            ? Array.from({ length: shimmerCount }).map((_, index) => (
                <ShimmerCard key={index} />
              ))
            : listOfRestaurant.map((resItem) => {
                return (
                  <RestaurantCard resData={resItem} key={resItem.info.id} />
                );
              })}
        </div>
      </div>
    </div>
  );
};
export default RestaurantContainer;
