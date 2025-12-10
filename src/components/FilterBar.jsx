import React from "react";

const FilterBar = ({ filters, setFilters, locations }) => {
  const update = (key, value) => setFilters(prev => ({ ...prev, [key]: value }));

  return (
    <aside className="filterbar">
      <div className="filter-row">
        <label>Location</label>
        <select value={filters.location} onChange={(e)=> update("location", e.target.value)}>
          <option value="">All</option>
          {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
        </select>
      </div>

      <div className="filter-row">
        <label>Type</label>
        <select value={filters.type} onChange={(e)=> update("type", e.target.value)}>
          <option value="">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="House">House</option>
          <option value="Studio">Studio</option>
        </select>
      </div>

      <div className="filter-row">
        <label>Min Price</label>
        <input type="number" value={filters.minPrice} onChange={(e)=> update("minPrice", e.target.value)} placeholder="0" />
      </div>

      <div className="filter-row">
        <label>Max Price</label>
        <input type="number" value={filters.maxPrice} onChange={(e)=> update("maxPrice", e.target.value)} placeholder="1000000" />
      </div>

      <div className="filter-row">
        <label>Bedrooms</label>
        <select value={filters.bedrooms} onChange={(e)=> update("bedrooms", e.target.value)}>
          <option value="">Any</option>
          <option value="1">1+</option>
          <option value="2">2+</option>
          <option value="3">3+</option>
          <option value="4">4+</option>
        </select>
      </div>

      <div className="filter-actions">
        <button onClick={() => setFilters({ location: "", type: "", minPrice: "", maxPrice: "", bedrooms: "" })} className="btn-outline">Reset</button>
      </div>
    </aside>
  );
};

export default FilterBar;
