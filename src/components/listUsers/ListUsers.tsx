import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FavoriteUser from "../favoriteUser/FavoriteUser";
import Link from "next/link";
import { Avatar } from "@mui/material";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

interface ListUserProps {
  users: User[];
}

export default function ListUsers({ users }: ListUserProps) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Favorito</TableCell>
            <TableCell align="right">Detalle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">
                  <Avatar alt={row.login} src={row.avatar_url} />
                </TableCell>
                <TableCell align="right">{row.login}</TableCell>
                <TableCell align="right">
                  <FavoriteUser user={row} />
                </TableCell>
                <TableCell align="right">
                  <Link href={`/pages/user/${row.login}`}>Ver</Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
