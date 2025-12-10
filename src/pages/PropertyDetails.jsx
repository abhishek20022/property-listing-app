import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties.json";
import ContactForm from "../components/ContactForm";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find(p => String(p.id) === String(id));

  if (!property) {
    return (
      <div className="notfound">
        <h2>Property not found</h2>
        <button className="btn-outline" onClick={() => navigate(-1)}>Back</button>
      </div>
    );
  }

  const handleContact = (formData) => {
    // since no backend, just console + alert
    console.log("Inquiry sent:", { propertyId: property.id, ...formData });
    alert("Your message was sent to the agent (mock). We'll contact you soon.");
  };

  return (
    <div className="property-details">
      <div className="details-top">
        <img src={property.image} alt={property.title} className="details-img" />
        <div className="details-info">
          <h1>{property.title}</h1>
          <p className="card-location">{property.location} • {property.type}</p>
          <p className="card-price">Rs. {property.price.toLocaleString()}</p>
          <p className="card-meta">{property.bedrooms} bd • {property.bathrooms} ba • {property.area}</p>
          <p className="description">{property.description}</p>
        </div>
      </div>

      <div className="details-bottom">
        <div className="contact-side">
          <h3>Contact Agent</h3>
          <ContactForm onSubmit={handleContact} initialSubject={`Inquiry about: ${property.title}`} />
        </div>

        <div className="map-side">
          <h3>Location</h3>
          <div className="map-placeholder">
            {/* Since no real map, show placeholder. Later replace with Google Map iframe */}
            <p>{property.location}</p>
            <small>Map placeholder (add map iframe later)</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
