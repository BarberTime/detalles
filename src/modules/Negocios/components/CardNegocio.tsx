"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  Button,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { LocationOn, Phone, Star, Schedule } from "@mui/icons-material";
import { NegocioType } from "../types/NegocioType";
import { useRouter } from "next/router";
interface CardNegocioProps {
  negocio: NegocioType;
}

export function CardNegocio({ negocio }: CardNegocioProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "100%" : 345,
        minWidth: isMobile ? "100%" : 300,
        borderRadius: 3,
        overflow: "hidden",
        background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        position: "relative",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)",
          "& .card-media": {
            transform: "scale(1.08)",
          },
          "& .overlay": {
            opacity: 1,
          },
        },
      }}
    >
      {/* Status Chips */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          left: 12,
          right: 12,
          display: "flex",
          justifyContent: "space-between",
          zIndex: 2,
        }}
      ></Box>

      {/* Media */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          className="card-media"
          component="img"
          height={isMobile ? 180 : 200}
          image={negocio.foto}
          alt={negocio.nombre}
          sx={{
            transition: "transform 0.6s ease",
            objectFit: "cover",
          }}
        />
        <Box
          className="overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.5) 100%)",
            opacity: 0,
            transition: "opacity 0.4s ease",
          }}
        />
      </Box>

      {/* Content */}
      <CardContent sx={{ p: isMobile ? 2.5 : 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography
              variant={isMobile ? "h6" : "h5"}
              component="h3"
              sx={{
                fontWeight: 700,
                color: "#1a1a1a",
                lineHeight: 1.2,
                mb: 0.5,
              }}
            >
              {negocio.nombre}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.9rem",
              }}
            >
              {negocio.descripcion}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <LocationOn
                sx={{ fontSize: 18, color: "#dc2626", mt: 0.2, flexShrink: 0 }}
              />
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  lineHeight: 1.4,
                  fontSize: "0.875rem",
                }}
              >
                {negocio.direccion}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ fontSize: 18, color: "#dc2626", flexShrink: 0 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: "0.875rem",
                }}
              >
                {negocio.telefono}
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              router.push(`/Negocios/${negocio.id_negocio}`);
            }}
            sx={{
              mt: 1,
              py: 1.5,
              borderRadius: 2,
              background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
              fontWeight: 600,
              fontSize: "0.9rem",
              textTransform: "none",
              boxShadow: "0 4px 15px rgba(220, 38, 38, 0.3)",
              "&:hover": {
                background: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
                transform: "scale(1.02)",
                boxShadow: "0 6px 20px rgba(220, 38, 38, 0.4)",
              },
            }}
          >
            Ver Barbería
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
