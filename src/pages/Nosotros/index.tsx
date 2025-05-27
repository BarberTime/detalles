import Header from "@/modules/PaginaWeb/components/header";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { Map, Marker } from "pigeon-maps";
import AppBarComponent from "@/modules/Reservas/components/AppBarComponent";
import CardMapa from "@/modules/Negocios/components/CardMapa";
import EjemploComponente from "@/modules/Negocios/components/ejemploComponente";
const PaginaNosotros = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <AppBarComponent />

        <EjemploComponente />
      </Box>
    </Box>
  );
};

export default PaginaNosotros;
