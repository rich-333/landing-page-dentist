import address from "../assets/icons/address.svg?url";
import email from "../assets/icons/email.svg?url";
import phone from "../assets/icons/phone.svg?url";

export interface Contact {
  icon: string;
  title: string;
  info: string;
  additionalInfo: string;
}

export const contacts: Contact[] = [
  {
    icon: address,
    title: "Dirección",
    info: "Av. Color 1560",
    additionalInfo: "Cordoba, Cordoba Capital",
  },

  {
    icon: email,
    title: "Email",
    info: "info@tudentista.com.ar",
    additionalInfo: "info@tudentista.com.ar",
  },

  {
    icon: phone,
    title: "Telefonos",
    info: "351 7608XXX",
    additionalInfo: "3541 7825XXX",
  },
];
