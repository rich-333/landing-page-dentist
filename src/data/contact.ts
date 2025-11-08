import address from "../assets/icons/addressContact.svg?url";
import email from "../assets/icons/emailContact.svg?url";
import phone from "../assets/icons/phoneContact.svg?url";
import whatsApp from "../assets/icons/whatsApp.svg?url";

export interface Contacts {
  title: string;
  contact: string;
  icon: string;
}

export const cont: Contacts[] = [
  {
    title: "Escribinos al Mail",
    contact: "info@tudentista.com.ar",
    icon: email,
  },
  {
    title: "Chatea con Nosotros",
    contact: "+54 35176085XX",
    icon: whatsApp,
  },
  {
    title: "Llamanos",
    contact: "0810 888 90XX",
    icon: phone,
  },
  {
    title: "Visitanos",
    contact: "Av. Colon 1338, Barrio Alberdi",
    icon: address,
  },
];
