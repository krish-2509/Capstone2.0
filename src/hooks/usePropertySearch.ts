import { useState, useMemo } from 'react';
import { Property, SearchFilters } from '../types/Property';
import { mockProperties } from '../data/mockProperties';

export const usePropertySearch = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({
    location: '',
    minPrice: 0,
    maxPrice: 0,
    propertyType: '',
    bedrooms: 0,
    bathrooms: 0,
    minSquareFootage: 0,
    maxSquareFootage: 0
  });

  const filteredProperties = useMemo(() => {
    return mockProperties.filter((property) => {
      // Location filter
      if (searchLocation && !property.city.toLowerCase().includes(searchLocation.toLowerCase()) &&
          !property.state.toLowerCase().includes(searchLocation.toLowerCase()) &&
          !property.zipCode.includes(searchLocation)) {
        return false;
      }

      // Property type filter
      if (filters.propertyType && property.propertyType !== filters.propertyType) {
        return false;
      }

      // Price range filter
      if (filters.minPrice > 0 && property.price < filters.minPrice) {
        return false;
      }
      if (filters.maxPrice > 0 && property.price > filters.maxPrice) {
        return false;
      }

      // Bedrooms filter
      if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) {
        return false;
      }

      // Bathrooms filter
      if (filters.bathrooms > 0 && property.bathrooms < filters.bathrooms) {
        return false;
      }

      // Square footage filter
      if (filters.minSquareFootage > 0 && property.squareFootage < filters.minSquareFootage) {
        return false;
      }
      if (filters.maxSquareFootage > 0 && property.squareFootage > filters.maxSquareFootage) {
        return false;
      }

      return true;
    });
  }, [searchLocation, filters]);

  const handleSearch = () => {
    setFilters(prev => ({ ...prev, location: searchLocation }));
  };

  return {
    searchLocation,
    setSearchLocation,
    filters,
    setFilters,
    filteredProperties,
    handleSearch
  };
};