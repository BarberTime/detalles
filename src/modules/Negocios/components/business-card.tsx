"use client";

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  LocationOn,
  Phone,
  Star,
  Schedule,
  Visibility,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";

interface Business {
  id: string;
  name: string;
  address: string;
  phone: string;
  image: string;
  rating?: number;
  isOpen?: boolean;
}

interface BusinessCardProps {
  business: Business;
}

export function BusinessCard({ business }: BusinessCardProps) {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      sx={{
        maxWidth: isMobile ? "100%" : 350,
        minWidth: isMobile ? "100%" : 300,
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderRadius: 3,
        overflow: "hidden",
        position: "relative",
        background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        "&:hover": {
          transform: "translateY(-8px) scale(1.02)",
          boxShadow: "0 20px 40px rgba(220, 38, 38, 0.15)",
          "& .media-overlay": {
            opacity: 1,
          },
          "& .card-media": {
            transform: "scale(1.1)",
          },
        },
      }}
      onClick={() => router.push(`/business/${business.id}`)}
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
          alignItems: "flex-start",
          zIndex: 2,
        }}
      >
        {business.rating && (
          <Chip
            icon={<Star sx={{ fontSize: 16, color: "#ffd700" }} />}
            label={business.rating}
            size="small"
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              backdropFilter: "blur(10px)",
              fontWeight: 600,
              fontSize: "0.75rem",
            }}
          />
        )}
        <Chip
          icon={<Schedule sx={{ fontSize: 16 }} />}
          label={business.isOpen ? "Abierto" : "Cerrado"}
          size="small"
          sx={{
            backgroundColor: business.isOpen
              ? "rgba(76, 175, 80, 0.9)"
              : "rgba(158, 158, 158, 0.9)",
            color: "white",
            fontWeight: 600,
            fontSize: "0.75rem",
          }}
        />
      </Box>

      {/* Media */}
      <Box sx={{ position: "relative", overflow: "hidden" }}>
        <CardMedia
          className="card-media"
          component="img"
          height={isMobile ? 200 : 240}
          image={business.image || "/placeholder.svg?height=240&width=400"}
          alt={business.name}
          sx={{
            transition: "transform 0.6s ease",
            objectFit: "cover",
          }}
        />
        <Box
          className="media-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%)",
            opacity: 0,
            transition: "opacity 0.4s ease",
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "center",
            pb: 2,
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "rgba(220, 38, 38, 0.9)",
              color: "white",
              "&:hover": {
                backgroundColor: "rgba(220, 38, 38, 1)",
                transform: "scale(1.1)",
              },
            }}
          >
            <Visibility />
          </IconButton>
        </Box>
      </Box>

      {/* Content */}
      <CardContent
        sx={{
          p: isMobile ? 2 : 3,
          "&:last-child": { pb: isMobile ? 2 : 3 },
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography
            variant={isMobile ? "h6" : "h5"}
            component="h3"
            sx={{
              fontWeight: 700,
              color: "#1a1a1a",
              lineHeight: 1.2,
              transition: "color 0.3s ease",
              "&:hover": {
                color: "#dc2626",
              },
            }}
          >
            {business.name}
          </Typography>

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
                  fontSize: isMobile ? "0.875rem" : "0.9rem",
                }}
              >
                {business.address}
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Phone sx={{ fontSize: 18, color: "#dc2626", flexShrink: 0 }} />
              <Typography
                variant="body2"
                sx={{
                  color: "#666",
                  fontSize: isMobile ? "0.875rem" : "0.9rem",
                }}
              >
                {business.phone}
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              mt: 1,
              p: 2,
              borderRadius: 2,
              background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
              color: "white",
              textAlign: "center",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)",
                transform: "scale(1.02)",
              },
            }}
          >
            <Typography
              variant="button"
              sx={{ fontWeight: 600, fontSize: "0.9rem" }}
            >
              Ver Detalles
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
