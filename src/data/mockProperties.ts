import { Property } from '../types/Property';

export const mockProperties: Property[] = [
  {
    id: '1',
    title: 'Modern Family Home',
    address: '123 MG Road',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400001',
    price: 12500000,
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 2800,
    propertyType: 'house',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Beautiful modern family home with updated kitchen and spacious garden in prime Mumbai location.',
    yearBuilt: 2018,
    lotSize: 0.25,
    features: ['Parking', 'Garden', 'Updated Kitchen', 'Marble Floors'],
    listingDate: '2024-01-15',
    agent: {
      name: 'Priya Sharma',
      phone: '+91 98765 43210',
      email: 'priya@realestate.in'
    }
  },
  {
    id: '2',
    title: 'Downtown Luxury Apartment',
    address: '456 Connaught Place',
    city: 'New Delhi',
    state: 'Delhi',
    zipCode: '110001',
    price: 8500000,
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1200,
    propertyType: 'apartment',
    images: [
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Stunning downtown apartment with city views and modern amenities in the heart of Delhi.',
    yearBuilt: 2020,
    features: ['City Views', 'Gym', 'Security', 'Balcony'],
    listingDate: '2024-01-10',
    agent: {
      name: 'Rajesh Kumar',
      phone: '+91 87654 32109',
      email: 'rajesh@realestate.in'
    }
  },
  {
    id: '3',
    title: 'Heritage Bungalow',
    address: '789 Brigade Road',
    city: 'Bangalore',
    state: 'Karnataka',
    zipCode: '560001',
    price: 16500000,
    bedrooms: 3,
    bathrooms: 2,
    squareFootage: 2200,
    propertyType: 'house',
    images: [
      'https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396125/pexels-photo-1396125.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Classic heritage bungalow with traditional architecture and modern updates in prime Bangalore location.',
    yearBuilt: 1895,
    lotSize: 0.15,
    features: ['Heritage Architecture', 'Updated Kitchen', 'Garden', 'Parking'],
    listingDate: '2024-01-08',
    agent: {
      name: 'Meera Reddy',
      phone: '+91 76543 21098',
      email: 'meera@realestate.in'
    }
  },
  {
    id: '4',
    title: 'Modern Villa',
    address: '321 Hitech City',
    city: 'Hyderabad',
    state: 'Telangana',
    zipCode: '500081',
    price: 11500000,
    bedrooms: 3,
    bathrooms: 3,
    squareFootage: 1800,
    propertyType: 'house',
    images: [
      'https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396129/pexels-photo-1396129.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Contemporary villa in vibrant Hitech City with modern amenities and smart home features.',
    yearBuilt: 2019,
    features: ['Modern Design', 'Terrace Garden', 'Parking', 'Smart Home'],
    listingDate: '2024-01-12',
    agent: {
      name: 'Arjun Patel',
      phone: '+91 65432 10987',
      email: 'arjun@realestate.in'
    }
  },
  {
    id: '5',
    title: 'Luxury Penthouse',
    address: '567 Marine Drive',
    city: 'Mumbai',
    state: 'Maharashtra',
    zipCode: '400020',
    price: 9500000,
    bedrooms: 2,
    bathrooms: 2,
    squareFootage: 1400,
    propertyType: 'apartment',
    images: [
      'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Elegant penthouse with sea views and premium finishes on iconic Marine Drive.',
    yearBuilt: 2017,
    features: ['Sea Views', 'Premium Finishes', 'Concierge', 'Gym'],
    listingDate: '2024-01-05',
    agent: {
      name: 'Kavya Singh',
      phone: '+91 54321 09876',
      email: 'kavya@realestate.in'
    }
  },
  {
    id: '6',
    title: 'Family Home with Garden',
    address: '890 Koramangala',
    city: 'Bangalore',
    state: 'Karnataka',
    zipCode: '560034',
    price: 13500000,
    bedrooms: 4,
    bathrooms: 3,
    squareFootage: 2500,
    propertyType: 'house',
    images: [
      'https://images.pexels.com/photos/1396121/pexels-photo-1396121.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1396128/pexels-photo-1396128.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    description: 'Spacious family home with large garden and updated interior in popular Koramangala area.',
    yearBuilt: 2005,
    lotSize: 0.3,
    features: ['Large Garden', 'Updated Interior', 'Parking', 'Terrace'],
    listingDate: '2024-01-03',
    agent: {
      name: 'Vikram Gupta',
      phone: '+91 43210 98765',
      email: 'vikram@realestate.in'
    }
  }
];