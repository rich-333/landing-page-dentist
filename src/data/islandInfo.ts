import address from "../assets/icons/address.svg?url";
import email from "../assets/icons/email.svg?url";
import phone from "../assets/icons/phone.svg?url";
import addressDesktop from "../assets/icons/addressDesktop.svg?url";
import emailDesktop from "../assets/icons/emailDesktop.svg?url";
import phoneDesktop from "../assets/icons/phoneDesktop.svg?url";

export interface Contact {
  icon: string;
  iconDesktop: string;
  title: string;
  info: string;
  additionalInfo: string;
}

export const contacts: Contact[] = [
  {
    icon: address,
    iconDesktop: addressDesktop,
    title: "Dirección",
    info: "Av. Color 1560",
    additionalInfo: "Cordoba, Cordoba Capital",
  },

  {
    icon: email,
    iconDesktop: emailDesktop,
    title: "Email",
    info: "info@tudentista.com.ar",
    additionalInfo: "info@tudentista.com.ar",
  },

  {
    icon: phone,
    iconDesktop: phoneDesktop,
    title: "Telefonos",
    info: "351 7608XXX",
    additionalInfo: "3541 7825XXX",
  },
];
