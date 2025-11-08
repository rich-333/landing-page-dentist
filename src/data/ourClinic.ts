import img1 from "../assets/images/img1_our_clinic.jpg?url";
import img2 from "../assets/images/img2_our_clinic.jpg?url";
import img3 from "../assets/images/img3_our_clinic.jpg?url";

export interface Clinic {
  id: string;
  image: string;
  alt: string;
}

export const images: Clinic[] = [
  {
    id: "area-atencion",
    image: img1,
    alt: "Área de atención",
  },
  {
    id: "consultorio-moderno",
    image: img2,
    alt: "Consultorio dental moderno",
  },
  {
    id: "equipo-odontologico",
    image: img3,
    alt: "Equipo odontológico",
  },
];
