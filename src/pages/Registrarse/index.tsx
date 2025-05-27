import AppBar from "@/modules/PaginaWeb/components/AppBar";
import Header from "@/modules/PaginaWeb/components/header";
import AppBarComponent from "@/modules/Reservas/components/AppBarComponent";
import { Box, TextField } from "@mui/material";
import React from "react";

const PaginaReservas = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <AppBarComponent />
    </Box>
  );
};

export default PaginaReservas;
