import React, { useContext } from "react";
import properties from "../json/properties";
import PropertyCard from "./PropertyCard";
import { Mycontext } from "../App";

const Projects = () => {
  const {project}=useContext(Mycontext)
  return (
    <div ref={project} className="dark:bg-slate-800 ">
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
