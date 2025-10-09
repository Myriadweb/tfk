// src/state/location.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  LocationName,
  getLocationFromURL,
  loadLocationAssets,
  DEFAULT_LOCATION,
} from '../utils/locationLoader';

interface LocationContextType {
  location: LocationName;
  assets: any | null;
  isLoading: boolean;
  error: Error | null;
}

const LocationContext = createContext<LocationContextType | undefined>(
  undefined
);

export function LocationContextProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState<LocationName>(DEFAULT_LOCATION);
  const [assets, setAssets] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load assets when component mounts
  useEffect(() => {
    const currentLocation = getLocationFromURL();
    setLocation(currentLocation);

    setIsLoading(true);
    setError(null);

    loadLocationAssets(currentLocation)
      .then((loadedAssets) => {
        console.log('Assets loaded for location:', currentLocation);
        setAssets(loadedAssets);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('Failed to load location assets:', err);
        setError(err);
        setIsLoading(false);
      });
  }, []); // Only load once on mount

  // Listen for hash changes (if user manually changes URL)
  useEffect(() => {
    const handleHashChange = () => {
      const newLocation = getLocationFromURL();
      if (newLocation !== location) {
        console.log('Location changed to:', newLocation);
        setLocation(newLocation);
        setIsLoading(true);

        loadLocationAssets(newLocation)
          .then((loadedAssets) => {
            console.log('Assets loaded for new location:', newLocation);
            setAssets(loadedAssets);
            setIsLoading(false);
          })
          .catch((err) => {
            console.error('Failed to load location assets:', err);
            setError(err);
            setIsLoading(false);
          });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [location]);

  return (
    <LocationContext.Provider value={{ location, assets, isLoading, error }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error(
      'useLocation must be used within a LocationContextProvider'
    );
  }
  return context;
}
