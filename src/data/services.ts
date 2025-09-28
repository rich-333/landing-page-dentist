import Services from "../components/Services.astro";
import endodontics from "../assets/icons/endodontics.svg?url";
import extraction from "../assets/icons/extraction.svg?url";
import orthodontics from "../assets/icons/orthodontics.svg?url";
import prophylaxis from "../assets/icons/prophylaxis.svg?url";
import prosthesis from "../assets/icons/prosthesis.svg?url";
import caries from "../assets/icons/caries.svg?url";

export interface Service {
  icon: string;
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    icon: endodontics,
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    href: "#",
  },

  {
    icon: prophylaxis,
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    href: "#",
  },

  {
    icon: extraction,
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    href: "#",
  },

  {
    icon: prosthesis,
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    href: "#",
  },

  {
    icon: orthodontics,
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    href: "#",
  },

  {
    icon: caries,
    title: "Implantes",
    description:
      "Los implantes dentales son un sustituto artificial de los dientes y sus raíces. Generalmente de forma roscada, los implantes poseen un aspecto y sensación similares a los dientes naturales logrando de esta manera una mayor comodidad, seguridad y confianza en su uso, respecto de otros métodos.",
    href: "#",
  },
];
