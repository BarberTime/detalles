"use client";

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  LocationOn,
  Phone,
  Email,
  Send,
} from "@mui/icons-material";
import { useRouter } from "next/router";

export function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  const quickLinks = [
    { label: "Inicio", href: "/" },
    { label: "Negocios", href: "/negocios" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Contacto", href: "/contacto" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: "linear-gradient(180deg, #1a1a1a 0%, #000000 100%)",
        color: "white",
        pt: { xs: 6, md: 8 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={isMobile ? "column" : "row"}
          spacing={{ xs: 4, md: 6 }}
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          {/* Logo y descripción */}
          <Box sx={{ flex: isMobile ? "none" : 2 }}>
            <Stack spacing={3}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Barber Time
                </Typography>
              </Stack>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255, 255, 255, 0.7)",
                  lineHeight: 1.6,
                  maxWidth: 400,
                  fontSize: "1rem",
                }}
              >
                La plataforma líder para reservas en barberías. Conectamos
                clientes con los mejores profesionales de Bolivia.
              </Typography>
            </Stack>
          </Box>

          {/* Enlaces rápidos */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: "1.25rem",
              }}
            >
              Enlaces Rápidos
            </Typography>
            <Stack spacing={2}>
              {quickLinks.map((link) => (
                <Typography
                  key={link.label}
                  component="a"
                  href={link.href}
                  variant="body2"
                  sx={{
                    color: "rgba(255, 255, 255, 0.7)",
                    textDecoration: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "white",
                      transform: "translateX(4px)",
                    },
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>

          {/* Newsletter */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 3,
                fontSize: "1.25rem",
              }}
            >
              Contacto
            </Typography>

            <Stack spacing={2}>
              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#dc2626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LocationOn sx={{ fontSize: 16, color: "white" }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  La Paz, Bolivia
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#dc2626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Phone sx={{ fontSize: 16, color: "white" }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  +591 7889655
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" spacing={2}>
                <Box
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "50%",
                    backgroundColor: "#dc2626",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Email sx={{ fontSize: 16, color: "white" }} />
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: "rgba(255, 255, 255, 0.7)" }}
                >
                  info@barbertime.com
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>

        {/* Bottom section */}
        <Box
          sx={{
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            pt: 4,
          }}
        >
          <Stack
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255, 255, 255, 0.5)",
                textAlign: isMobile ? "center" : "left",
              }}
            >
              © 2025 BarberTime. Todos los derechos reservados
            </Typography>

            <Stack direction="row" spacing={1}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  href={social.href}
                  sx={{
                    color: "rgba(255, 255, 255, 0.5)",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    borderRadius: 2,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "white",
                      backgroundColor: "#dc2626",
                      transform: "scale(1.1)",
                    },
                  }}
                >
                  <social.icon />
                </IconButton>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
