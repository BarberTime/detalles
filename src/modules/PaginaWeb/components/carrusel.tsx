"use client";

import { useRef } from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import type { ReactNode } from "react";
import { NegocioType } from "@/modules/Negocios/types/NegocioType";

interface CarruselProps {
  title?: String;
  children: ReactNode;
}

export function Carrusel({ children, title }: CarruselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = isMobile ? 280 : 350;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)",
      }}
    >
      <Container maxWidth="lg">
        {title && (
          <Box sx={{ textAlign: "center", mb: { xs: 4, md: 6 } }}>
            <Typography
              variant={isMobile ? "h3" : "h2"}
              component="h2"
              sx={{
                fontWeight: 800,
                color: "#1a1a1a",
                mb: 2,
              }}
            >
              {title}
            </Typography>
            <Box
              sx={{
                width: 80,
                height: 4,
                borderRadius: 2,
                background: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                mx: "auto",
              }}
            />
          </Box>
        )}

        <Box sx={{ position: "relative" }}>
          {/* Navigation Buttons */}
          <IconButton
            onClick={() => scroll("left")}
            sx={{
              position: "absolute",
              left: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: 56,
              height: 56,
              backgroundColor: "white",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              border: "1px solid rgba(0,0,0,0.05)",
              "&:hover": {
                backgroundColor: "#f8f9fa",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ChevronLeft sx={{ fontSize: 28, color: "#1a1a1a" }} />
          </IconButton>

          <IconButton
            onClick={() => scroll("right")}
            sx={{
              position: "absolute",
              right: -20,
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              width: 56,
              height: 56,
              backgroundColor: "white",
              boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
              border: "1px solid rgba(0,0,0,0.05)",
              "&:hover": {
                backgroundColor: "#f8f9fa",
                transform: "translateY(-50%) scale(1.1)",
                boxShadow: "0 12px 35px rgba(0,0,0,0.2)",
              },
              transition: "all 0.3s ease",
            }}
          >
            <ChevronRight sx={{ fontSize: 28, color: "#1a1a1a" }} />
          </IconButton>

          {/* Carousel Content */}
          <Box
            ref={scrollRef}
            sx={{
              display: "flex",
              gap: { xs: 2, md: 3 },
              overflowX: "auto",
              scrollBehavior: "smooth",
              px: { xs: 3, md: 6 },
              py: 2,
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {children}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
