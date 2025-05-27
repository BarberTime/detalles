export interface NegocioType {
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  rating: number;
  reviews: number;
  isOpen: boolean;
  hours: string;
  images: string[];
  services: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    duration: string;
  }>;
  employees: Array<{
    name: string;
    image: string;
  }>;
  socialMedia: {
    instagram: string;
    website: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}
