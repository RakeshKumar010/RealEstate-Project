import React from "react";

const PropertyCard = ({property}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full" src={property.image} alt="Property" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 dark:text-white">{property.name}</div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{property.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block dark:bg-gray-200 bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold dark:text-gray-700 text-gray-50  mr-2 mb-2">
          Price: {property.price}
        </span>
        <span className="inline-block dark:bg-gray-200 bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold dark:text-gray-700 text-gray-50  mr-2 mb-2">
          Location: {property.location}
        </span>
        <span className="inline-block dark:bg-gray-200 bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold dark:text-gray-700 text-gray-50  mr-2 mb-2">
          Size: {property.size}
        </span>
        <span className="inline-block dark:bg-gray-200 bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold dark:text-gray-700 text-gray-50  mr-2 mb-2">
          {property.bhk} BHK
        </span>
      </div>
    </div>
  );
};

export default PropertyCard;
