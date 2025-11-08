export interface Faqs {
  id: string;
  question: string;
  answer: string;
}

export const faqs: Faqs[] = [
  {
    id: "obras-sociales",
    question: "¿Que Obras sociales aceptan?",
    answer:
      "Aceptamos las principales obras sociales como OSDE, Swiss Medical, Medifé, Galeno, IOMA, PAMI, y muchas más. Te recomendamos contactarnos para confirmar si trabajamos con tu cobertura específica."
  },
  {
    id: "horarios-atencion",
    question: "¿Cuáles son los horarios de atención?",
    answer:
      "Atendemos de lunes a viernes de 9:00 a 19:00 hs y sábados de 9:00 a 13:00 hs. Para urgencias fuera de estos horarios, contamos con un servicio de guardia.",
  },
  {
    id: "primera-consulta",
    question: "¿Qué debo llevar a la primera consulta?",
    answer:
      "Para tu primera consulta, te pedimos que traigas tu DNI, credencial de obra social (si corresponde), estudios previos que tengas (radiografías, análisis) y un listado de medicamentos que estés tomando actualmente.",
  },
  {
    id: "metodos-pago",
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos efectivo, tarjetas de débito, crédito (todas las marcas), transferencias bancarias y MercadoPago. También ofrecemos planes de financiación para tratamientos extensos.",
  },
  {
    id: "cancelar-turno",
    question: "¿Cómo puedo cancelar o reprogramar un turno?",
    answer:
      "Podés cancelar o reprogramar tu turno llamando a nuestra recepción o enviando un WhatsApp al menos 24 horas antes de tu cita. Esto nos ayuda a optimizar la agenda y atender a más pacientes.",
  },
  {
    id: "duracion-tratamientos",
    question: "¿Cuánto duran los tratamientos?",
    answer:
      "La duración varía según el tipo de tratamiento. Una limpieza dental toma aproximadamente 45 minutos, mientras que tratamientos como ortodoncia pueden durar entre 12 y 24 meses. En tu primera consulta te daremos un plan detallado.",
  },
];
