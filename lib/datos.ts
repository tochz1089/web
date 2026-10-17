// Datos del club, editables: se cambian acá y todas las páginas quedan actualizadas.

export type Encuentro = {
  fecha: string;
  titulo: string;
  detalle: string;
  nota: string;
};

export type Horario = {
  titulo: string;
  detalle: string;
};

export type Foto = {
  src: string;
  pie: string;
};

// Fixture: se completa cuando llega la programación del torneo.
export const fixture: Encuentro[] = [
  {
    fecha: "a definir",
    titulo: "Primera división",
    detalle: "rival y horario por confirmar",
    nota: "el resto de las fechas se suma cuando sale la programación de la URBA",
  },
];

// Horarios: se confirman al inicio de cada temporada.
export const horarios: Horario[] = [
  {
    titulo: "Rugby",
    detalle: "horario por confirmar; preguntá en la secretaría o por WhatsApp",
  },
  {
    titulo: "Hockey",
    detalle: "horario por confirmar; preguntá en la secretaría o por WhatsApp",
  },
];

// Galería: fotos ilustrativas, se van reemplazando por las del club.
export const galeria: Foto[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ireland_vs_Romania_rugby_match.jpg/1280px-Ireland_vs_Romania_rugby_match.jpg",
    pie: "Partido un sábado (foto ilustrativa)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2023_Rugby_World_Cup_warm-up_matches_-_Uruguay_vs_Chile_-_10.jpg/1280px-2023_Rugby_World_Cup_warm-up_matches_-_Uruguay_vs_Chile_-_10.jpg",
    pie: "Defensa en el tackle (foto ilustrativa)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Rovigo_campione_2023_rugby_%28no_watermark%29.jpg/1280px-Rovigo_campione_2023_rugby_%28no_watermark%29.jpg",
    pie: "Después del partido (foto ilustrativa)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Rugby_Scrum_Roma_-_Benetton_Treviso_9_may_2009.jpg/1280px-Rugby_Scrum_Roma_-_Benetton_Treviso_9_may_2009.jpg",
    pie: "Scrum (foto ilustrativa)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/England_rugby_training_at_bath_arp.jpg/1280px-England_rugby_training_at_bath_arp.jpg",
    pie: "Entrenamiento (foto ilustrativa)",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Perpignan_Lineout_Wasps_Perpignan.jpg/1280px-Perpignan_Lineout_Wasps_Perpignan.jpg",
    pie: "Line out (foto ilustrativa)",
  },
];
