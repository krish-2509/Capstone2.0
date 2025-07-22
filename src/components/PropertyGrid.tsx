import React from 'react';
import { Property } from '../types/Property';
import { PropertyCard } from './PropertyCard';

interface PropertyGridProps {
  properties: Property[];
  onViewDetails: (property: Property) => void;
}

export const PropertyGrid: React.FC<PropertyGridProps> = ({
  properties,
  onViewDetails
}) => {
  if (properties.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 mb-4">No properties found</p>
          <p className="text-gray-500">Try adjusting your search criteria</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {properties.length} Properties Found
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onViewDetails={onViewDetails}
          />
        ))}
      </div>
    </div>
  );
};