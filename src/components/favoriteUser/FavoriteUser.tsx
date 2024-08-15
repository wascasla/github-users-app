import { useFavorites } from "@/hook/useFavorites";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import { yellow } from "@mui/material/colors";

interface FavoriteUserProps {
  user: User;
}

export default function FavoriteUser({ user }: FavoriteUserProps) {
  const { favorites, toggleFavorite } = useFavorites();

  return (
    <div onClick={() => toggleFavorite(user)}>
      {favorites.some((fav) => fav.id === user.id) ? (
        <Tooltip title="Quitar de Favoritos">
          <Favorite sx={{ color: yellow[500] }} />
        </Tooltip>
      ) : (
        <Tooltip title="Agregar a Favoritos">
          <FavoriteBorder />
        </Tooltip>
      )}
    </div>
  );
}
