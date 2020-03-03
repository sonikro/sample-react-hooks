import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import * as React from "react";
import { useSquad } from "../../state/useSquad";

export const SquadList: React.FC = () => {
  const { squad, isLoading } = useSquad();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {isLoading ? <CircularProgress /> : void 0}
          {squad.map(row => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
