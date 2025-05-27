//import { BusinessDetail } from "@/components/business-detail";
import { notFound } from "next/navigation";

// Datos de ejemplo - en una app real vendrían de una base de datos
const businessData = {
  "monckey-barber": {
    id: "monckey-barber",
    name: "Monckey Barber",
    address: "Av. Periferica nro 505",
    phone: "+591 8523714",
    email: "info@monckeybarber.com",
    image:
      "https://img.freepik.com/vector-premium/logo-barberia-calavera_43623-577.jpg",
    description:
      "La mejor barbería de la ciudad con más de 10 años de experiencia. Ofrecemos servicios de calidad con los mejores profesionales.",
    hours: {
      "Lunes - Viernes": "9:00 AM - 8:00 PM",
      Sábado: "9:00 AM - 6:00 PM",
      Domingo: "10:00 AM - 4:00 PM",
    },
    services: [
      { name: "Corte Clásico", price: "25 Bs", duration: "30 min" },
      { name: "Corte + Barba", price: "40 Bs", duration: "45 min" },
      { name: "Afeitado Tradicional", price: "20 Bs", duration: "25 min" },
      { name: "Corte Infantil", price: "20 Bs", duration: "25 min" },
      { name: "Tratamiento Capilar", price: "35 Bs", duration: "40 min" },
      { name: "Peinado Especial", price: "30 Bs", duration: "35 min" },
    ],
    barbers: [
      {
        name: "Carlos Mendoza",
        specialty: "Cortes Clásicos",
        experience: "8 años",
        image: "/placeholder.svg?height=150&width=150",
      },
      {
        name: "Miguel Rodriguez",
        specialty: "Barbas y Bigotes",
        experience: "6 años",
        image: "/placeholder.svg?height=150&width=150",
      },
      {
        name: "Luis Fernandez",
        specialty: "Cortes Modernos",
        experience: "5 años",
        image: "/placeholder.svg?height=150&width=150",
      },
    ],
    location: {
      lat: -17.783,
      lng: -63.182,
      address: "Av. Periferica nro 505, Santa Cruz, Bolivia",
    },
  },
};

interface PageProps {
  params: { id: string };
}

export default function BusinessPage({ params }: PageProps) {
  const business = businessData[params.id as keyof typeof businessData];

  if (!business) {
    notFound();
  }

  /*return <BusinessDetail business={business} />;*/
}
