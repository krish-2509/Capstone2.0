import React from 'react';
import { Property } from '../types/Property';
import { Bed, Bath, Square, MapPin, Heart } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({
  property,
  onViewDetails
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
          <Heart className="h-5 w-5 text-gray-600" />
        </button>
        <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
          {property.propertyType.charAt(0).toUpperCase() + property.propertyType.slice(1)}
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Price */}
        <div className="text-2xl font-bold text-gray-900 mb-2">
          {formatPrice(property.price)}
        </div>

        {/* Property Details */}
        <div className="flex items-center space-x-4 text-gray-600 mb-3">
          <div className="flex items-center space-x-1">
            <Bed className="h-4 w-4" />
            <span className="text-sm">{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="h-4 w-4" />
            <span className="text-sm">{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Square className="h-4 w-4" />
            <span className="text-sm">{property.squareFootage.toLocaleString()} sq ft</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-1 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">
            {property.address}, {property.city}, {property.state} {property.zipCode}
          </span>
        </div>

        {/* Title and Description */}
        <h3 className="font-semibold text-gray-900 mb-2">{property.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{property.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-4">
          {property.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
          {property.features.length > 3 && (
            <span className="text-gray-500 text-xs">
              +{property.features.length - 3} more
            </span>
          )}
        </div>

        {/* View Details Button */}
        <button
          onClick={() => onViewDetails(property)}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          View Details
        </button>
      </div>
    </div>
  );
};