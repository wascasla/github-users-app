import { FavoritesContext } from "@/context/FavoritesContext";
import { useContext } from "react";

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
      throw new Error('useFavorites debe usarse dentro de un FavoritesProvider');
    }
    return context;
  };