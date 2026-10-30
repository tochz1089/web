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

// Galería: fotos reales de la temporada 2026, sacadas por Gui Sanabria PH
// en los partidos (el archivo original está en el Drive del club).
// Pocas y grandes, estilo póster para no saturar.
export const galeria: Foto[] = [
  { src: "/fotos/temporada/g1-lomas-barro.jpg", pie: "El tackle en el barro, contra Lomas (Pre)" },
  { src: "/fotos/temporada/g13-lineout-lasalle.jpg", pie: "El salto en el line out, contra La Salle (Pre)" },
  { src: "/fotos/temporada/g4-scrum-pinos.jpg", pie: "El scrum todo apretado, contra Pinos (Pre)" },
  { src: "/fotos/temporada/g17-tackle-mercedes.jpg", pie: "El tackle doble, contra Mercedes (Primera)" },
];

// Carrusel de la portada: fotos que van girando con las flechas.
export const carrusel: Foto[] = [
  { src: "/fotos/temporada/h-rugby.jpg", pie: "Un jugador de Las Cañas ataca corriendo con la pelota, en un partido de Primera" },
  { src: "/fotos/temporada/c8-tigre2.jpg", pie: "El tackle de dos, en el partido contra Tigre" },
  { src: "/fotos/temporada/c7-tigre.jpg", pie: "El zaguero arrancando, contra Tigre" },
  { src: "/fotos/temporada/c1-lasalle.jpg", pie: "Un partido de la Pre contra La Salle, en el predio" },
  { src: "/fotos/temporada/c6-mercedes.jpg", pie: "Conduciendo la pelota contra Mercedes, en Primera" },
  { src: "/fotos/temporada/c4-albatros.jpg", pie: "El cierre de la jugada, contra Albatros" },
];
