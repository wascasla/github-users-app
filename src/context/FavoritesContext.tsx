"use client"
import React, { createContext, useState, ReactNode } from 'react';

interface FavoritesContextType {
  favorites: User[];
  toggleFavorite: (user: User) => void;
}

// Contexto para los favoritos
export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

// Proveedor de contexto para los favoritos
export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const [favorites, setFavorites] = useState<User[]>([]);

  const toggleFavorite = (user: User) => {
    setFavorites((prevFavorites) =>
      prevFavorites.find((fav) => fav.id === user.id)
        ? prevFavorites.filter((fav) => fav.id !== user.id)
        : [...prevFavorites, user]
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};