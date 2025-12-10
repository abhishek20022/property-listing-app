import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ property }) => {
  return (
    <div className="card">
      <img src={property.image} alt={property.title} className="card-img" />
      <div className="card-body">
        <h3 className="card-title">{property.title}</h3>
        <p className="card-location">{property.location} • {property.type}</p>
        <p className="card-price">Rs. {property.price.toLocaleString()}</p>
        <p className="card-meta">{property.bedrooms} bd • {property.bathrooms} ba • {property.area}</p>
        <div className="card-actions">
          <Link to={`/property/${property.id}`} className="btn">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
