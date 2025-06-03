import { CardMapa } from "@/modules/Negocios/components/CardMapa";
import { HorarioType, NegocioType } from "@/modules/Negocios/types/NegocioType";
import { Box, CardMedia, Typography, Button } from "@mui/material";
import { ChevronUp } from "lucide-react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const PaginaDetalleNegocio = () => {
  interface BusinessDetailPageProps {
    negocio: NegocioType;
    horario?: HorarioType;
  }
  const [negocio, setNegocio] = useState<NegocioType | null>(null);
  const [horario, setHorario] = useState<HorarioType>();
  const router = useRouter();
  const id_negocio =
    typeof router.query.idNegocio === "string"
      ? router.query.idNegocio
      : Array.isArray(router.query.idNegocio)
      ? router.query.idNegocio[0]
      : undefined;

  console.log("Valor de id:", id_negocio);
  useEffect(() => {
    if (!router.isReady || !id_negocio) return;
    fetch(`http://localhost:8000/api/negocio/${id_negocio}`)
      .then((res) => res.json())
      .then((datos) => setNegocio(datos));
  }, [router.isReady, id_negocio]);

  useEffect(() => {
    if (!id_negocio) return;
    fetch(`http://localhost:8000/api/horario/`)
      .then((res) => res.json())
      .then((datos) => {
        console.log("Horarios recibidos:", datos); // Agrega esto
        const horarioFiltrado = datos.find(
          (h: HorarioType) => h.negocio === id_negocio
        );
        console.log("Horario filtrado:", horarioFiltrado); // Y esto
        setHorario(horarioFiltrado);
      });
  }, [id_negocio]);

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
              image={negocio?.foto}
              alt={negocio?.nombre}
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
                {negocio?.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {negocio?.descripcion}
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
        {negocio && <CardMapa negocio={negocio} />}

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
            {negocio?.descripcion}
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
            HORARIO
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            Hoy
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 1 }}>
            {negocio?.id_negocio == horario?.negocio
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
            {negocio?.nombre}
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            {negocio?.telefono}
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            {negocio?.direccion}
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            {negocio?.departamento}
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

export default PaginaDetalleNegocio;
