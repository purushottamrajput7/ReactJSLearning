import React from "react";
import { STARICON } from "../../constants/localization";
import { Link } from "react-router";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    props?.resData?.info;
  const IMGDOMAIN =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="res-card">
      <Link to={"/restaurant/" + props?.resData?.info?.id}>
        <div className="res-img-wrap">
          <div className="res-image">
            <img src={`${IMGDOMAIN}${cloudinaryImageId}`} alt="restaurant" />
          </div>
        </div>
        <div className="res-content">
          <h3>{name}</h3>
          <div className="star">
            {STARICON}
            <span className="rating">{avgRating} • </span>
            <span className="time">{sla?.slaString}</span>
          </div>
          <div className="cusins">{cuisines.join(", ")}</div>
          <address>{areaName}</address>
        </div>
      </Link>
    </div>
  );
};
export default RestaurantCard;
