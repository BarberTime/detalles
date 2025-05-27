"use client"

import { useState } from "react"
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Avatar,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Close,
  Home,
  Business,
  PersonAdd,
  Person,
} from "@mui/icons-material"
import { useRouter } from "next/navigation"

export function AppBar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [dialogOpen, setDialogOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const router = useRouter()

  const menuItems = [
    { label: "Inicio", icon: Home, href: "/" },
    { label: "Negocios", icon: Business, href: "/Negocios" },
    { label: "Reservas", icon: Person, href: "/Reservas" },
  ]

  const handleNavigation = (href: string) => {
    router.push(href)
    setDrawerOpen(false)
  }

  return (
    <>
      <Box sx={{ position: 'relative', zIndex: 50 }}>
        <Toolbar sx={{ px: { xs: 2, md: 4 }, py: 1 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ width: '100%' }}
          >
            {/* Logo */}
           
              
              {!isMobile && (
                <Typography
                  variant="h5"
                  sx={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                  }}
                >
                  Barber Time
                </Typography>
              )}
            

            {/* Desktop Navigation */}
            {!isMobile && (
              <Stack direction="row" alignItems="center" spacing={2}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    startIcon={<item.icon />}
                    onClick={() => handleNavigation(item.href)}
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      textTransform: 'none',
                      fontSize: '0.9rem',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}

                <Button
                  startIcon={<PersonAdd />}
                  onClick={() => setDialogOpen(true)}
                  sx={{
                    color: 'white',
                    fontWeight: 500,
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    textTransform: 'none',
                    fontSize: '0.9rem',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                    },
                  }}
                >
                  Registra tu negocio
                </Button>

                <Avatar
                  sx={{
                    width: 36,
                    height: 36,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      border: '2px solid rgba(255, 255, 255, 0.5)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  <Person sx={{ color: 'white' }} />
                </Avatar>
              </Stack>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton
                onClick={() => setDrawerOpen(true)}
                sx={{
                  color: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Stack>
        </Toolbar>
      </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.9) 100%)',
            backdropFilter: 'blur(20px)',
            color: 'white',
          },
        }}
      >
        <Box sx={{ p: 2, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Menú
            </Typography>
            <IconButton onClick={() => setDrawerOpen(false)} sx={{ color: 'white' }}>
              <Close />
            </IconButton>
          </Stack>
        </Box>

        <List sx={{ pt: 2 }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              onClick={() => handleNavigation(item.href)}
              sx={{
                cursor: 'pointer',
                borderRadius: 2,
                mx: 1,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                <item.icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 500,
                  fontSize: '1rem',
                }}
              />
            </ListItem>
          ))}

          <ListItem
            onClick={() => {
              setDialogOpen(true)
              setDrawerOpen(false)
            }}
            sx={{
              cursor: 'pointer',
              borderRadius: 2,
              mx: 1,
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
              <PersonAdd />
            </ListItemIcon>
            <ListItemText
              primary="Registrarse"
              primaryTypographyProps={{
                fontWeight: 500,
                fontSize: '1rem',
              }}
            />
          </ListItem>
        </List>
      </Drawer>

      {/* Registration Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            p: 1,
          },
        }}
      >
        <DialogTitle sx={{ textAlign: 'center', pb: 1 }}>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1a1a1a' }}>
            Crear Cuenta
          </Typography>
        </DialogTitle>

        <DialogContent sx={{ px: 4, pb: 4 }}>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Nombre completo"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Correo electrónico"
              type="email"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />
            <TextField
              fullWidth
              label="Contraseña"
              type="password"
              variant="outlined"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 2,
                },
              }}
            />

            <Button
              variant="contained"
              fullWidth
              size="large"
              sx={{
                py: 1.5,
                borderRadius: 2,
                background: 'linear-gradient(135deg, #dc2626 0%, #ef4444 100%)',
                fontWeight: 600,
                fontSize: '1rem',
                textTransform: 'none',
                '&:hover': {
                  background: 'linear-gradient(135deg, #b91c1c 0%, #dc2626 100%)',
                },
              }}
            >
              Registrarse
            </Button>

            <Typography variant="body2" sx={{ textAlign: 'center', color: '#666' }}>
              ¿Ya tienes cuenta?{' '}
              <Button
                variant="text"
                sx={{
                  color: '#dc2626',
                  fontWeight: 600,
                  textTransform: 'none',
                  p: 0,
                  minWidth: 'auto',
                  '&:hover': {
                    backgroundColor: 'transparent',
                    color: '#b91c1c',
                  },
                }}
              >
                Inicia sesión
              </Button>
            </Typography>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  )
}
