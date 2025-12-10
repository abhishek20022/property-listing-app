import React, { useEffect, useMemo, useState } from "react";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";

const Listings = () => {
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    location: "",
    type: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: ""
  });

  useEffect(() => {
    // In future replace with fetch(...) to backend
    setProperties(propertiesData);
  }, []);

  const locations = useMemo(() => {
    const set = new Set(propertiesData.map(p => p.location));
    return Array.from(set);
  }, []);

  const filtered = useMemo(() => {
    return properties.filter(p => {
      if (search) {
        const q = search.toLowerCase();
        if (!(`${p.title} ${p.location} ${p.type}`).toLowerCase().includes(q)) return false;
      }
      if (filters.location && p.location !== filters.location) return false;
      if (filters.type && p.type !== filters.type) return false;
      if (filters.minPrice && Number(p.price) < Number(filters.minPrice)) return false;
      if (filters.maxPrice && Number(p.price) > Number(filters.maxPrice)) return false;
      if (filters.bedrooms && Number(p.bedrooms) < Number(filters.bedrooms)) return false;
      return true;
    });
  }, [properties, search, filters]);

  return (
    <div className="listings-page">
      <div className="listings-top">
        <h2>Listings</h2>
        <SearchBar value={search} onChange={setSearch} />
      </div>

      <div className="listings-grid">
        <FilterBar filters={filters} setFilters={setFilters} locations={locations} />
        <section className="listings-results">
          {filtered.length === 0 ? (
            <p>No properties found. Try changing filters.</p>
          ) : (
            <div className="grid">
              {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Listings;
