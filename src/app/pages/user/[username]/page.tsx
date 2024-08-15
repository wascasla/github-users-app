"use client"

import { getUserByUserName } from "@/api/users";
import FavoriteUser from "@/components/favoriteUser/FavoriteUser";
import { Avatar, Card, CardContent } from "@mui/material";
import { useQuery } from "@tanstack/react-query";


export default function Page({ params }: { params: { username: string } }) {

  //return <p>Post: {params.username}</p>

  const { data: user, isLoading, isError, refetch } = useQuery({
    queryFn: async () => await getUserByUserName({ username: params.username }),
    queryKey: ["getUserDetail", params.username],
  });
 

  return (
    
      <Card sx={{ minWidth: 275 }}>
      <CardContent>
        
      <h1>Detalles del Usuario</h1>
      {user ? (
        <div>
          <p>Id: {user.id}</p>
          <p>Username: {user.login}</p>
          <p><Avatar alt={user.login} src={user.avatar_url} /></p>
          <p><FavoriteUser user={user} /> </p>
        </div>
      ) : (
        <p>No se encontró el usuario.</p>
      )}
      </CardContent>
      
    </Card>
    
  );
}