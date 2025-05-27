import React, { useState } from "react";
import { NegocioType } from "@/modules/Negocios/types/NegocioType";
import { Box } from "@mui/material";
import { BusinessDetail } from "@/modules/Negocios/components/business-detail";
import { AppBarComponent } from "@/modules/Reservas/components/AppBarComponent";
import { Footer } from "@/modules/PaginaWeb/components/Footer";

const PaginaNegocios = () => {
  // Datos simulados de negocio
  const initialBusiness: NegocioType = {
    id: "1",
    name: "BarberTime Estilo y Corte",
    description: "Barbería especializada en cortes modernos y tradicionales",
    address: "Calle Principal 123, Ciudad",
    phone: "7646545",
    rating: 4.8,
    reviews: 150,
    isOpen: true,
    hours: "Lunes a Viernes: 9:00 - 20:00",
    images: [
      "/images/imagen_fondo.jpg",
      "/images/foto_header.png",
    ],
    services: [
      {
        id: "1",
        name: "Corte de pelo",
        description: "Corte de pelo con estilo moderno",
        price: 25.0,
        duration: "30 min"
      },
     
    ],
    employees: [
      {
        name: "jose",
        image: "/images/employee1.jpg"
      },
     
    ],
    socialMedia: {
      instagram: "@barbertime_estilo",
      website: "https://barbertime.com"
    },
    coordinates: {
      lat: -16.495706,
      lng: -68.147927
    }
  };

  const [business, setBusiness] = useState<NegocioType>(initialBusiness);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <AppBarComponent />

      <Box sx={{ flex: 1, overflow: "auto" }}>
        <BusinessDetail business={business} />
      </Box>

      <Footer />
    </Box>
  );
};

export default PaginaNegocios;
