"use client"

import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  InputAdornment,
  Stack,
  useTheme,
  useMediaQuery,
  Chip,
} from "@mui/material"
import { Search, PlayArrow, TrendingUp, People, Business } from "@mui/icons-material"
import { AppBar } from "./AppBar"

export function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'))

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #000000 100%)',
      }}
    >
      {/* Background Image with Overlay */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/imagen_fondo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(26,26,26,0.7) 50%, rgba(0,0,0,0.8) 100%)',
          }}
        />
      </Box>

      {/* Decorative Elements */}
      <Box
        sx={{
          position: 'absolute',
          top: 80,
          left: 40,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 6s ease-in-out infinite',
          '@keyframes float': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 100,
          right: 60,
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220, 38, 38, 0.05) 0%, transparent 70%)',
          filter: 'blur(50px)',
          animation: 'float 8s ease-in-out infinite reverse',
        }}
      />

      {/* Content */}
      <Box sx={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Navigation */}
        <Box sx={{ pt: 3 }}>
          <AppBar />
        </Box>

        {/* Main Content */}
        <Container
          maxWidth="lg"
          sx={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            py: { xs: 4, md: 8 },
          }}
        >
          <Stack spacing={{ xs: 6, md: 8 }} alignItems="center" sx={{ width: '100%', maxWidth: 900 }}>
            {/* Hero Text */}
            <Stack spacing={{ xs: 3, md: 4 }} alignItems="center">
              <Typography
                variant={isMobile ? "h2" : "h1"}
                component="h1"
                sx={{
                  fontWeight: 900,
                  color: 'white',
                  lineHeight: 1.1,
                  fontSize: {
                    xs: '2.5rem',
                    sm: '3.5rem',
                    md: '4.5rem',
                    lg: '5.5rem',
                  },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                MENOS TIEMPO
                <br />
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  MÁS RESERVAS
                </Box>
              </Typography>

              <Typography
                variant={isMobile ? "h6" : "h5"}
                sx={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  maxWidth: 600,
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontSize: {
                    xs: '1.1rem',
                    md: '1.3rem',
                  },
                }}
              >
                Reserva tu cita en los mejores salones de belleza y barberías de Bolivia. 
                Rápido, fácil y sin complicaciones.
              </Typography>
            </Stack>

            {/* Statistics */}
            <Stack
              direction={isMobile ? "column" : "row"}
              spacing={{ xs: 2, md: 4 }}
              sx={{ width: '100%', maxWidth: 600 }}
            >
              {[
                { icon: Business, number: "500+", label: "Negocios" },
                { icon: People, number: "10K+", label: "Clientes" },
                { icon: TrendingUp, number: "50K+", label: "Reservas" },
              ].map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    textAlign: 'center',
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <stat.icon sx={{ fontSize: 32, color: '#dc2626', mb: 1 }} />
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 800,
                      color: 'white',
                      fontSize: { xs: '1.8rem', md: '2.2rem' },
                    }}
                  >
                    {stat.number}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'rgba(255, 255, 255, 0.7)',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Stack>

            {/* Search Section */}
            <Stack spacing={4} sx={{ width: '100%', maxWidth: 600 }}>
              <TextField
                placeholder="Buscar negocios..."
                variant="outlined"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search sx={{ color: 'rgba(0,0,0,0.5)', fontSize: 24 }} />
                    </InputAdornment>
                  ),
                  sx: {
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: 3,
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    py: { xs: 1, md: 1.5 },
                    '& fieldset': {
                      border: 'none',
                    },
                    '&:hover': {
                      backgroundColor: 'white',
                    },
                    '&.Mui-focused': {
                      backgroundColor: 'white',
                      boxShadow: '0 0 0 3px rgba(220, 38, 38, 0.1)',
                    },
                  },
                }}
                sx={{
                  '& .MuiOutlinedInput-input': {
                    '&::placeholder': {
                      color: 'rgba(0,0,0,0.6)',
                      opacity: 1,
                    },
                  },
                }}
              />

              <Stack
                direction={isMobile ? "column" : "row"}
                spacing={2}
                justifyContent="center"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: { xs: 4, md: 6 },
                    py: { xs: 1.5, md: 2 },
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                    fontSize: { xs: '1rem', md: '1.1rem' },
                    fontWeight: 600,
                    textTransform: 'none',
                    boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 12px 35px rgba(220, 38, 38, 0.4)',
                    },
                  }}
                >
                  Explorar Negocios
                </Button>

                
              </Stack>
            </Stack>

            {/* Popular Tags */}
            <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={1} sx={{ maxWidth: 500 }}>
              <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.6)', mr: 1 }}>
                Popular:
              </Typography>
              {["Corte de cabello", "Barba", "Manicure", "Pedicure"].map((tag) => (
                <Chip
                  key={tag}
                  label={tag}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.2)',
                      cursor: 'pointer',
                    },
                  }}
                />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
