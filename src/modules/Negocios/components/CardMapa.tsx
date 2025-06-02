"use client";
import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Close, Navigation } from "@mui/icons-material";
import { Map, Marker } from "pigeon-maps";
import { NegocioType } from "../types/NegocioType";

interface CardMapaProps {
  negocio: NegocioType;
}

export function CardMapa({ negocio }: CardMapaProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const latitud = React.useMemo(
    () => Number(negocio.latitud),
    [negocio.latitud]
  );
  const longitud = React.useMemo(
    () => Number(negocio.longitud),
    [negocio.longitud]
  );
  console.log("Coordenadas del negocio:", latitud, longitud);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: isMobile ? "100%" : "20rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: isMobile ? "100%" : "20rem",
          height: "23rem",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            height: "300px",
            width: isMobile ? "100%" : "250px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Map
            width={isMobile ? 300 : 240} // Usa un número, no un string
            height={295}
            defaultCenter={[latitud, longitud]}
            defaultZoom={14}
            onClick={handleOpen}
          >
            <Marker width={80} anchor={[latitud, longitud]} color="#dc2626" />
          </Map>
        </Box>
        <Button
          onClick={handleOpen}
          sx={{
            color: "white",
            backgroundColor: "rgba(0,0,0,0.5)",
            borderRadius: "20px",
            width: "150px",
            padding: "10px",
            transition: "0.3s ease-in-out",
            "&:hover": {
              boxShadow: "0px 0px 10px 5px rgba(92, 92, 92, 0.8)",
              transform: "scale(1.05)",
            },
          }}
        >
          Ver Ubicación
        </Button>
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: "90vh",
          },
        }}
      >
        <DialogTitle
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            pb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Navigation sx={{ color: "#dc2626" }} />
            <Typography variant="h5" sx={{ fontWeight: 700 }}>
              Ubicación de {negocio.nombre}
            </Typography>
          </Box>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent>
          <Box
            sx={{
              height: 400,
              borderRadius: 2,
              overflow: "hidden",
            }}
          >
            <Map
              width={600}
              height={400}
              defaultCenter={[latitud, longitud]}
              defaultZoom={16}
            >
              <Marker
                width={100}
                anchor={[latitud, longitud]}
                color="#dc2626"
              />
            </Map>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                backgroundColor: "#dc2626",
                px: 4,
                py: 1.5,
                borderRadius: 2,
                fontWeight: 600,
                "&:hover": {
                  backgroundColor: "#b91c1c",
                },
              }}
            >
              Cerrar Ubicación
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
