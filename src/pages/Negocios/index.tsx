import React, { useEffect, useState } from "react";
import { HorarioType, NegocioType } from "@/modules/Negocios/types/NegocioType";
import { Box } from "@mui/material";
import { BusinessDetail } from "@/modules/Negocios/components/business-detail";
import { AppBarComponent } from "@/modules/Reservas/components/AppBarComponent";
import { Footer } from "@/modules/PaginaWeb/components/Footer";

const PaginaNegocios = () => {
  const [negocios, setNegocios] = useState<NegocioType[]>([]);
  const [horarios, setHorarios] = useState<HorarioType[]>([]);
  const [totalNegocios, setTotalNegocios] = useState(0);
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/negocio/`)
      .then((res) => res.json())
      .then((datos) => {
        setNegocios(datos);
        const totalPages = datos.total;
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/api/horario/`)
      .then((res) => res.json())
      .then((datos) => {
        setHorarios(datos);
        const totalPages = datos.total;
      });
  }, []);

  // Datos simulados de negocio

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBarComponent />

      <Box sx={{ flex: 1, overflow: "auto" }}>
        {negocios.map((negocio, horario) => (
          <BusinessDetail
            key={negocio.id_negocio}
            negocio={negocio}
            horario={horarios.find((h) => h.negocio === negocio.id_negocio)}
          />
        ))}
      </Box>

      <Footer />
    </Box>
  );
};

export default PaginaNegocios;
