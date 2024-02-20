import React from "react";
import properties from "../json/properties";
import PropertyCard from "./PropertyCard";

const Projects = () => {
  return (
    <div>
      <div className="text-center mb-3 dark:text-white">
        <p className="md:text-4xl text-2xl font-bold text-custom-orange">New Projects in Pune</p>
        <p>Handpicked projects for you.</p>
      </div>

      <div className="flex flex-wrap justify-around">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
