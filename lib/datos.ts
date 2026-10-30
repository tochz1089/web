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
  clase?: "alta" | "larga";
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
export const galeria: Foto[] = [
  { src: "/fotos/temporada/g1-lomas-barro.jpg", pie: "El tackle en el barro, contra Lomas (Pre)", clase: "larga" },
  { src: "/fotos/temporada/g13-lineout-lasalle.jpg", pie: "El salto en el line out, contra La Salle (Pre)", clase: "alta" },
  { src: "/fotos/temporada/g4-scrum-pinos.jpg", pie: "El scrum todo apretado, contra Pinos (Pre)" },
  { src: "/fotos/temporada/g7-corrida-chasco.jpg", pie: "La corrida, contra Chascomús (Primera)" },
  { src: "/fotos/temporada/g2-veterano-lomas.jpg", pie: "Respirando el final, contra Lomas (Pre)", clase: "alta" },
  { src: "/fotos/temporada/g17-tackle-mercedes.jpg", pie: "El tackle doble, contra Mercedes (Primera)" },
  { src: "/fotos/temporada/g6-maul-pinos.jpg", pie: "El maul avanza, contra Pinos (Pre)", clase: "alta" },
  { src: "/fotos/temporada/g9-tackle-sanpedro.jpg", pie: "La defensa abajo, contra San Pedro (Primera)", clase: "larga" },
  { src: "/fotos/temporada/g18-byn-lineout.jpg", pie: "El saque, en blanco y negro (Pre)", clase: "alta" },
  { src: "/fotos/temporada/g3-tackle-oldg.jpg", pie: "Tackle limpio, contra Old Georgians (Primera)" },
  { src: "/fotos/temporada/g11-tackle-retiro.jpg", pie: "El tackle, contra Retiro" },
  { src: "/fotos/temporada/g5-retrato-pinos.jpg", pie: "La mirada, contra Pinos (Pre)" },
  { src: "/fotos/temporada/g15-huddle-oldg.jpg", pie: "El huddle, contra Old Georgians (Primera)", clase: "larga" },
  { src: "/fotos/temporada/g8-byn-chasco.jpg", pie: "En blanco y negro, contra Chascomús (Primera)" },
  { src: "/fotos/temporada/g10-abrazo-sanpedro.jpg", pie: "Tras el partido, contra San Pedro (Primera)" },
  { src: "/fotos/temporada/g12-zaguero-retiro.jpg", pie: "El zaguero arranca, contra Retiro" },
  { src: "/fotos/temporada/g14-abrazos-lasalle.jpg", pie: "Los amigos, contra La Salle (Pre)" },
];

// Cinta de fotos de la portada: una fila que corre despacio.
export const cinta: string[] = [
  "/fotos/temporada/c1-lasalle.jpg",
  "/fotos/temporada/c2-chascomus.jpg",
  "/fotos/temporada/c3-chascomus2.jpg",
  "/fotos/temporada/c4-albatros.jpg",
  "/fotos/temporada/c5-albatros2.jpg",
  "/fotos/temporada/c6-mercedes.jpg",
  "/fotos/temporada/c11-capitan.jpg",
  "/fotos/temporada/c7-tigre.jpg",
  "/fotos/temporada/c8-tigre2.jpg",
  "/fotos/temporada/c10-abridor.jpg",
  "/fotos/temporada/c9-lasalle2.jpg",
];
