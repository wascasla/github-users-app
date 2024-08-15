import { Box, Button, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction } from 'react'

interface SearchUserProps {
    param: string; 
    setParam: Dispatch<SetStateAction<string>>;
    onSearch: () => void;
}

export default function SearchUser({ param, setParam, onSearch }: SearchUserProps) {
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setParam(event.target.value);
      };
  
    return (
    <>
    <div>Buscar Usuarios</div>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Ingrese un texto" value={param} onChange={handleChange} variant="outlined" fullWidth />
      <Button variant="contained" onClick={onSearch}>Buscar</Button>
    </Box>
    </>
  )
}
