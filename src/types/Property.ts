export interface Property {
  id: string;
  title: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  propertyType: 'house' | 'apartment' | 'condo' | 'townhouse';
  images: string[];
  description: string;
  yearBuilt: number;
  lotSize?: number;
  features: string[];
  listingDate: string;
  agent: {
    name: string;
    phone: string;
    email: string;
  };
}

export interface SearchFilters {
  location: string;
  minPrice: number;
  maxPrice: number;
  propertyType: string;
  bedrooms: number;
  bathrooms: number;
  minSquareFootage: number;
  maxSquareFootage: number;
}