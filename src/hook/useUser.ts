import { getAllUsers, getUsersByName } from "@/api/users";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsers = () => {
  const {
    data: dataAll,
    isLoading: isLoadingAll,
    isError: isErrorAll,
    refetch: refetchAll,
  } = useQuery({
    queryFn: async () => await getAllUsers(),
    queryKey: ["allUsers"],
    enabled: false,
  });

  return { dataAll, refetchAll };
};

export const useSearchUser = (paramSearch: string) => {
  const {
    data: dataSearch,
    isLoading: isLoadingSearch,
    isError: isErrorSearch,
    refetch: refetchSearch,
  } = useQuery({
    queryFn: async () => await getUsersByName({ term: paramSearch }),
    queryKey: ["searchUser", paramSearch],
    enabled: false,
  });

  return { dataSearch, refetchSearch };
};
