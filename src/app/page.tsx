"use client";
import { Grid, Paper } from "@mui/material";
import ListUsers from "@/components/listUsers/ListUsers";
import SearchUser from "@/components/searchUser/SearchUser";
import { useEffect, useState } from "react";
import { useGetAllUsers, useSearchUser } from "@/hook/useUser";

export default function Home() {
  const [paramSearch, setParamSearch] = useState<string>("");

  const { dataAll, refetchAll } = useGetAllUsers();

  const { dataSearch, refetchSearch } = useSearchUser(paramSearch);

  useEffect(() => {
    refetchAll();
  }, []);

  const getData = paramSearch ? refetchSearch : refetchAll;

  const rows = paramSearch ? dataSearch : dataAll;

  return (
    <>
      <div>Lista de usuarios de Github</div>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <SearchUser
            param={paramSearch}
            setParam={setParamSearch}
            onSearch={getData}
          />
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <ListUsers users={rows ?? []} />
        </Paper>
      </Grid>
    </>
  );
}
