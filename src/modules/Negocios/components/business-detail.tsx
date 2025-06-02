"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Avatar,
  IconButton,
  Divider,
  CardMedia,
} from "@mui/material";
import {
  Star,
  Share,
  Heart,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Globe,
  MoreHorizontal,
  ChevronUp,
  Info,
} from "lucide-react";
import { CardMapa } from "./CardMapa";
import Image from "next/image";
import { HorarioType, NegocioType } from "../types/NegocioType";

interface BusinessDetailPageProps {
  negocio: NegocioType;
  horario?: HorarioType;
}

export const BusinessDetail = ({
  negocio,
  horario,
}: BusinessDetailPageProps) => {
  //const [currentImageIndex, setCurrentImageIndex] = useState(0);

  /*const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % negocio.foto.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + negocio.foto.length) % negocio.foto.length
    );
  };  para imagenes*/

  return (
    <Box
      sx={{
        display: "flex",
        maxWidth: 1200,
        mx: "auto",
        gap: 3,
        p: 3,
        bgcolor: "#f5f5f5",
      }}
    >
      {/* Contenido Principal */}
      <Box sx={{ flex: 1, maxWidth: 600 }}>
        {/* Galería de Imágenes */}
        <Box
          sx={{
            position: "relative",
            mb: 3,
            borderRadius: 2,
            overflow: "hidden",
            bgcolor: "white",
          }}
        >
          <Box sx={{ position: "relative", height: 400 }}>
            {/* Rating Badge */}

            {/* Controles de navegación */}
            {/*  <IconButton
              onClick={prevImage}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={nextImage}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                bgcolor: "white",
                boxShadow: 2,
                "&:hover": { bgcolor: "grey.100" },
              }}
            >
              <ChevronRight />
            </IconButton> */}

            {/* Indicadores */}
            <CardMedia
              className="card-media"
              component="img"
              height={"auto"}
              image={negocio.foto}
              alt={negocio.nombre}
              sx={{
                transition: "transform 0.6s ease",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>

        {/* Información del Negocio */}
        <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, mb: 3 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {negocio.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {negocio.descripcion}
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Servicios */}
        <Box sx={{ bgcolor: "white", borderRadius: 2 }}>
          <Box sx={{ p: 3, borderBottom: "1px solid #e0e0e0" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                Servicios
              </Typography>
              <Button variant="text" size="small" sx={{ color: "#666" }}>
                Buscar servicio
              </Button>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
              Servicios más populares
            </Typography>
          </Box>

          <Box sx={{ p: 0 }}>aqui ira Servicios</Box>

          <Box
            sx={{ p: 2, textAlign: "center", borderTop: "1px solid #e0e0e0" }}
          >
            <Button
              variant="text"
              sx={{ color: "#666" }}
              startIcon={<ChevronUp />}
            >
              Mostrar menos
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Sidebar */}
      <Box
        sx={{ width: 350, display: "flex", flexDirection: "column", gap: 2 }}
      >
        {/* Mapa */}
        <CardMapa negocio={negocio} />

        {/* Quiénes Somos */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#ff5722"
            gutterBottom
          >
            QUIÉNES SOMOS
          </Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer" }}
          >
            Ven y Crea tu estilo...
          </Typography>
        </Box>

        {/* Empleados */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#ff5722"
            gutterBottom
          >
            EMPLEADOS
          </Typography>
        </Box>

        {/* Horario */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#ff5722"
            gutterBottom
          >
            HORARIO DE APERTURA
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            Hoy
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 1 }}>
            {negocio.id_negocio == horario?.negocio
              ? `${horario?.hora_inicio} - ${horario?.hora_fin}`
              : "horario no disponible"}
          </Typography>
          <Button
            variant="text"
            size="small"
            sx={{ color: "#00bcd4", p: 0, textTransform: "none" }}
          >
            Mostrar semana completa
          </Button>
        </Box>

        {/* Información del Negocio */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#ff5722"
            gutterBottom
          >
            INFORMACIÓN DEL NEGOCIO
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            {negocio.nombre}
          </Typography>
        </Box>

        {/* Redes Sociales */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="#ff5722"
            gutterBottom
          >
            REDES SOCIALES
          </Typography>
        </Box>

        {/* Información para el Consumidor */}
      </Box>
    </Box>
  );
};
