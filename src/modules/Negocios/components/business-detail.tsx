"use client"

import { useState } from "react"
import { Box, Typography, Button, Avatar, IconButton, Divider } from "@mui/material"
import {
  Star,
  Share,
  Heart,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Globe,
  MoreHorizontal,
  ChevronUp,
  Info,
} from "lucide-react"
import { CardMapa } from "./CardMapa"
import Image from "next/image"

interface BusinessDetailPageProps {
  business: {
    id: string
    name: string
    description: string
    address: string
    phone: string
    rating: number
    reviews: number
    hours: string
    isOpen: boolean
    images: string[]
    services: Array<{
      id: string
      name: string
      description: string
      price: number
      duration: string
    }>
    employees: Array<{
      name: string
      image: string
    }>
    socialMedia: {
      instagram: string
      website: string
    }
    coordinates: {
      lat: number
      lng: number
    }
  }
}

export const BusinessDetail = ({ business }: BusinessDetailPageProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % business.images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + business.images.length) % business.images.length)
  }

  return (
    <Box sx={{ display: "flex", maxWidth: 1200, mx: "auto", gap: 3, p: 3, bgcolor: "#f5f5f5" }}>
      {/* Contenido Principal */}
      <Box sx={{ flex: 1, maxWidth: 600 }}>
        {/* Galería de Imágenes */}
        <Box sx={{ position: "relative", mb: 3, borderRadius: 2, overflow: "hidden", bgcolor: "white" }}>
          <Box sx={{ position: "relative", height: 400 }}>
            <Image
              src={business.images[currentImageIndex] || "/placeholder.svg"}
              alt={business.name}
              fill
              style={{ objectFit: "cover" }}
            />

            {/* Rating Badge */}
            
            {/* Controles de navegación */}
            <IconButton
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
            </IconButton>

            {/* Indicadores */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
              }}
            >
              {business.images.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    bgcolor: index === currentImageIndex ? "white" : "rgba(255,255,255,0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>

        {/* Información del Negocio */}
        <Box sx={{ bgcolor: "white", p: 3, borderRadius: 2, mb: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", mb: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                {business.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                {business.description}
              </Typography>
             
              
            </Box>

           
          </Box>
        </Box>

        {/* Servicios */}
        <Box sx={{ bgcolor: "white", borderRadius: 2 }}>
          <Box sx={{ p: 3, borderBottom: "1px solid #e0e0e0" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
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

          <Box sx={{ p: 0 }}>
            {business.services.map((service, index) => (
              <Box key={service.id}>
                <Box sx={{ p: 3, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body1" fontWeight="600" gutterBottom>
                      {service.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <MoreHorizontal size={16} color="#666" />
                    </Box>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", gap: 2, ml: 2 }}>
                    <Box sx={{ textAlign: "right" }}>
                      <Typography variant="h6" fontWeight="bold">
                        {service.price.toFixed(2)} Bs
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        {service.duration}
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        bgcolor: "linear-gradient(135deg, #dc2626 0%, #ef4444 100%)",
                        "&:hover": { bgcolor: "#00acc1" },
                        borderRadius: 1,
                        px: 3,
                        textTransform: "none",
                      }}
                    >
                      Reservar
                    </Button>
                  </Box>
                </Box>
                {index < business.services.length - 1 && <Divider />}
              </Box>
            ))}
          </Box>

          <Box sx={{ p: 2, textAlign: "center", borderTop: "1px solid #e0e0e0" }}>
            <Button variant="text" sx={{ color: "#666" }} startIcon={<ChevronUp />}>
              Mostrar menos
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Sidebar */}
      <Box sx={{ width: 350, display: "flex", flexDirection: "column", gap: 2 }}>
        {/* Mapa */}
        <CardMapa
          latitud={business.coordinates.lat}
          longitud={business.coordinates.lng}
          businessName={business.name}
        />

        {/* Quiénes Somos */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#ff5722" gutterBottom>
            QUIÉNES SOMOS
          </Typography>
          <Typography variant="body2" color="primary" sx={{ cursor: "pointer" }}>
            Ven y Crea tu estilo...
          </Typography>
        </Box>

        {/* Empleados */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#ff5722" gutterBottom>
            EMPLEADOS
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {business.employees.map((employee, index) => (
              <Box key={index} sx={{ textAlign: "center" }}>
                <Avatar src={employee.image} sx={{ width: 48, height: 48, mb: 0.5 }} />
                <Typography variant="caption" display="block">
                  {employee.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Horario */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#ff5722" gutterBottom>
            HORARIO DE APERTURA
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            Hoy
          </Typography>
          <Typography variant="body2" sx={{ whiteSpace: "pre-line", mb: 1 }}>
            {business.hours}
          </Typography>
          <Button variant="text" size="small" sx={{ color: "#00bcd4", p: 0, textTransform: "none" }}>
            Mostrar semana completa
          </Button>
        </Box>

        {/* Información del Negocio */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#ff5722" gutterBottom>
            INFORMACIÓN DEL NEGOCIO
          </Typography>
          <Typography variant="body2" fontWeight="600" gutterBottom>
            {business.name}
          </Typography>
          
        </Box>

        {/* Redes Sociales */}
        <Box sx={{ bgcolor: "white", p: 2, borderRadius: 2 }}>
          <Typography variant="subtitle2" fontWeight="bold" color="#ff5722" gutterBottom>
            REDES SOCIALES
          </Typography>
         
        </Box>

        {/* Información para el Consumidor */}
        
      </Box>
    </Box>
  )
}
