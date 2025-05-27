"use client"
import {
  AppBar,
  Toolbar,
  Box,
  TextField,
  InputAdornment,
  Container,
  useTheme,
  useMediaQuery,
  Button,
} from "@mui/material"
import { Search, Home, Building2, UserPlus, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function AppBarComponent() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const router = useRouter()
  const [searchValue, setSearchValue] = useState("")

  const navegacionItems = [
    { label: "Inicio", href: "/", icon: Home },
    { label: "Negocios", href: "/Negocios", icon: Building2 },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
  }

  return (
    <Box sx={{ position: "sticky", top: 0, zIndex: 1000 }}>
      {/* Header Superior */}
      <Box
        sx={{
          background: "linear-gradient(135deg, #dc2626 0%, #991b1b 50%, #7f1d1d 100%)",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        {/* Elementos decorativos de fondo */}
        <Box
          sx={{
            position: "absolute",
            top: -50,
            right: -50,
            width: 200,
            height: 200,
            background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            bottom: -30,
            left: -30,
            width: 150,
            height: 150,
            background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        <Container maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              py: 2,
              gap: { xs: 2, md: 4 },
              position: "relative",
              zIndex: 1,
            }}
          >
            {/* Logo mejorado */}
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 2, cursor: "pointer" }}
              onClick={() => handleNavigation("/")}
            >
             
              {!isMobile && (
                <Box
                  component="span"
                  sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    textShadow: "0 2px 8px rgba(0,0,0,0.3)",
                    letterSpacing: "0.5px",
                  }}
                >
                  Barber Time
                </Box>
              )}
            </Box>

            {/* Buscador mejorado */}
            <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: 600 } }}>
              <TextField
                fullWidth
                placeholder="Buscar negocios, servicios o ubicación..."
                variant="outlined"
                size="medium"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search size={20} color="#6b7280" />
                    </InputAdornment>
                  ),
                  sx: {
                    bgcolor: "rgba(255,255,255,0.95)",
                    borderRadius: 3,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255,255,255,0.3)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    transition: "all 0.3s ease",
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                    "&:hover": {
                      bgcolor: "white",
                      transform: "translateY(-1px)",
                      boxShadow: "0 6px 25px rgba(0,0,0,0.15)",
                    },
                    "&.Mui-focused": {
                      bgcolor: "white",
                      transform: "translateY(-1px)",
                      boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
                      "& .MuiOutlinedInput-notchedOutline": {
                        border: "2px solid #dc2626",
                      },
                    },
                    "& input": {
                      py: 1.5,
                      fontSize: "1rem",
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Navegación inferior */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(17,24,39,0.95) 100%)",
          backdropFilter: "blur(20px)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ minHeight: "64px !important", justifyContent: "center" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 1, md: 3 } }}>
              {navegacionItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => handleNavigation(item.href)}
                  sx={{
                    color: "white",
                    fontWeight: 500,
                    fontSize: { xs: "0.875rem", md: "1rem" },
                    px: { xs: 2, md: 3 },
                    py: 1.5,
                    borderRadius: 2,
                    textTransform: "none",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                    "&:hover": {
                      bgcolor: "rgba(220, 38, 38, 0.1)",
                      color: "#fca5a5",
                      transform: "translateY(-1px)",
                      "&::before": {
                        transform: "scaleX(1)",
                      },
                    },
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      bgcolor: "#dc2626",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease",
                    },
                  }}
                  startIcon={
                    <item.icon
                      size={18}
                      style={{
                        marginRight: isMobile ? 0 : 4,
                        display: isMobile ? "none" : "block",
                      }}
                    />
                  }
                >
                  {isMobile ? <item.icon size={20} /> : item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
