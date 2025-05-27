"use client"

import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  CardMedia,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material"
import { ArrowForward, AutoAwesome } from "@mui/icons-material"

interface CardTuNegocioProps {
  informacion: string
  imagen_grande: string
  imagen_card: string
  reserva: string
  reversed?: boolean
}

export function CardTuNegocio({
  informacion,
  imagen_grande,
  imagen_card,
  reserva,
  reversed = false,
}: CardTuNegocioProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
      <Stack
        direction={isMobile ? "column" : "row"}
        spacing={{ xs: 4, md: 6 }}
        alignItems="center"
        sx={{
          ...(reversed && !isMobile && {
            flexDirection: 'row-reverse',
          }),
        }}
      >
        {/* Imagen principal */}
        <Box
          sx={{
            flex: 1,
            position: 'relative',
            width: '100%',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              '&:hover': {
                '& .main-image': {
                  transform: 'scale(1.05)',
                },
              },
            }}
          >
            <CardMedia
              className="main-image"
              component="img"
              image={imagen_grande || "/placeholder.svg?height=500&width=600"}
              alt="Imagen promocional"
              sx={{
                width: '100%',
                height: { xs: 280, sm: 350, md: 400 },
                objectFit: 'cover',
                transition: 'transform 0.6s ease',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(0,0,0,0.1) 100%)',
              }}
            />
          </Box>

          {/* Decorative elements */}
          <Box
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              width: 80,
              height: 80,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(220, 38, 38, 0.05) 100%)',
              filter: 'blur(20px)',
              zIndex: -1,
            }}
          />
        </Box>

        {/* Contenido */}
        <Box sx={{ flex: 1, width: '100%' }}>
          <Stack spacing={{ xs: 3, md: 4 }}>
            <Box>
              

              <Typography
                variant={isMobile ? "h3" : "h2"}
                component="h2"
                sx={{
                  fontWeight: 800,
                  color: '#1a1a1a',
                  lineHeight: 1.1,
                  mb: 3,
                  '& span': {
                    background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  },
                }}
              >
                Barber<span>_Time</span> para ti
              </Typography>

              <Typography
                variant="h6"
                sx={{
                  color: '#666',
                  lineHeight: 1.6,
                  fontWeight: 400,
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                }}
              >
                {informacion}
              </Typography>
            </Box>

            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              sx={{
                alignSelf: 'flex-start',
                py: 2,
                px: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                boxShadow: '0 8px 25px rgba(220, 38, 38, 0.3)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 35px rgba(220, 38, 38, 0.4)',
                  '& .MuiSvgIcon-root': {
                    transform: 'translateX(4px)',
                  },
                },
                '& .MuiSvgIcon-root': {
                  transition: 'transform 0.3s ease',
                },
              }}
            >
              {reserva}
            </Button>

            {/* Imagen de tarjeta */}
            <Card
              sx={{
                maxWidth: { xs: '100%', md: 350 },
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                '&:hover': {
                  '& .card-image': {
                    transform: 'scale(1.05)',
                  },
                },
              }}
            >
              <CardMedia
                className="card-image"
                component="img"
                image={imagen_card || "/placeholder.svg?height=200&width=400"}
                alt="Imagen de característica"
                sx={{
                  height: { xs: 160, md: 180 },
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease',
                }}
              />
            </Card>
          </Stack>
        </Box>
      </Stack>
    </Container>
  )
}
