"use client";

import { Box } from "@mui/material";
import { CardNegocio } from "@/modules/Negocios/components/CardNegocio";
import { CardTuNegocio } from "@/modules/Negocios/components/CardTuNegocio";
import { Footer } from "@/modules/PaginaWeb/components/Footer";
import { Header } from "@/modules/PaginaWeb/components/header";
import { Carrusel } from "@/modules/PaginaWeb/components/carrusel";
import { NegocioType } from "@/modules/Negocios/types/NegocioType";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [negocios, setNegocios] = useState<NegocioType[]>([]);
  const [totalNegocios, setTotalNegocios] = useState(0);
  const router = useRouter();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/negocio/`)
      .then((res) => res.json())
      .then((datos) => {
        setNegocios(datos);
        const totalPages = datos.total;
      });
  }, []);
  const handleNavigation = () => {
    router.push("/Negocios");
  };

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "white" }}>
      {/* Header principal */}
      <Header />

      {/* Sección de negocios destacados */}
      <Carrusel title="Algunas de las Barberias ">
        <Box sx={{ display: "flex", gap: 3, minWidth: "max-content" }}>
          {negocios.slice(0, 8).map((negocio) => (
            <Box key={negocio.id_negocio} sx={{ flexShrink: 0 }}>
              <CardNegocio negocio={negocio} />
            </Box>
          ))}
        </Box>
      </Carrusel>

      {/* Secciones promocionales */}
      <Box sx={{ backgroundColor: "#f8f9fa" }}>
        <CardTuNegocio
          imagen_card="https://img.freepik.com/vector-premium/fondo-concepto-reserva-hotel_23-2148146111.jpg"
          imagen_grande="https://img.freepik.com/foto-gratis/hombre-revisando-telefono-mientras-corta-pelo_23-2148242784.jpg?ga=GA1.1.527834109.1746621935&w=740"
          informacion="Que las filas no te quiten tu tiempo, reserva ahora mismo y disfruta de un servicio de calidad sin esperas."
          reserva="Ver Barberías"
          onClick={handleNavigation}
        />

        <CardTuNegocio
          imagen_card="https://img.freepik.com/vector-premium/fondo-concepto-reserva-hotel_23-2148146111.jpg"
          imagen_grande="https://images.pexels.com/photos/2061820/pexels-photo-2061820.jpeg?auto=compress&cs=tinysrgb&w=600"
          informacion="Empieza a gestionar tu negocio más rápido y fácilmente con Barber_Time. Todo en el mismo lugar, desde reservas hasta pagos."
          reserva="Suscribe tu Negocio"
          reversed={true}
          onClick={handleNavigation}
        />

        <CardTuNegocio
          imagen_card="https://img.freepik.com/foto-gratis/rendimiento-grafico-digital-superposicion-manos-empresario_53876-101943.jpg?ga=GA1.1.527834109.1746621935&semt=ais_hybrid&w=740"
          imagen_grande="https://img.freepik.com/foto-gratis/herramientas-profesion-peluquero_23-2150668471.jpg?ga=GA1.1.527834109.1746621935&semt=ais_hybrid&w=740"
          informacion="Obtén una cotización personalizada para tu negocio y descubre cómo podemos ayudarte a crecer."
          reserva="Contáctanos"
          onClick={handleNavigation}
        />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
}
