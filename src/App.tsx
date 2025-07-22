import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { Header } from './components/Header';
import { AuthModal } from './components/auth/AuthModal';
import { FilterSidebar } from './components/FilterSidebar';
import { PropertyGrid } from './components/PropertyGrid';
import { PropertyModal } from './components/PropertyModal';
import { usePropertySearch } from './hooks/usePropertySearch';
import { Property } from './types/Property';

function App() {
  const {
    searchLocation,
    setSearchLocation,
    filters,
    setFilters,
    filteredProperties,
    handleSearch
  } = usePropertySearch();

  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleViewDetails = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProperty(null);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          searchLocation={searchLocation}
          onSearchLocationChange={setSearchLocation}
          onSearch={handleSearch}
          onAuthClick={() => setIsAuthModalOpen(true)}
        />
        
        <div className="flex">
          <FilterSidebar
            filters={filters}
            onFiltersChange={setFilters}
          />
          
          <PropertyGrid
            properties={filteredProperties}
            onViewDetails={handleViewDetails}
          />
        </div>

        <PropertyModal
          property={selectedProperty}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />

        <AuthModal
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </div>
    </AuthProvider>
  );
}

export default App;