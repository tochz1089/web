// Datos editables del club: cambiar acá, no en las páginas.

export type Resultado = {
  fecha: string;
  local: string;
  visita: string;
  puntos: string;
  torneo: string;
  ganoVisita: boolean;
};

export type Encuentro = {
  dia: string;
  mes: string;
  titulo: string;
  detalles: string;
  rol: "casa" | "afuera" | "fiesta";
 RolTexto: string;
};

export type Horario = {
  titulo: string;
  detalle: string;
};

export type Figura = {
  nombre: string;
  puesto: string;
  historia: string;
  foto: string;
};

export const resultados: Resultado[] = [
  {
    fecha: "18 oct",
    local: "Cañuelas",
    visita: "Old Lions",
    puntos: "28–17",
    torneo: "Primera, torneo Apertura",
    ganoVisita: false,
  },
  {
    fecha: "18 oct",
    local: "Arquitectura RC",
    visita: "Cañuelas",
    puntos: "19–26",
    torneo: "Intermedia, torneo Apertura",
    ganoVisita: true,
  },
  {
    fecha: "11 oct",
    local: "Cañuelas",
    visita: "Campos RC",
    puntos: "35–14",
    torneo: "M17, zonal sur",
    ganoVisita: false,
  },
];

export const encuentros: Encuentro[] = [
  {
    dia: "24",
    mes: "octubre",
    titulo: "Cañuelas contra Los Troncos",
    detalles: "11:30, cancha 1, intermedia y primera",
    rol: "casa",
    RolTexto: "de local",
  },
  {
    dia: "01",
    mes: "noviembre",
    titulo: "La Salle contra Cañuelas",
    detalles: "10:00, sede La Salle, M17",
    rol: "afuera",
    RolTexto: "de visita",
  },
  {
    dia: "02",
    mes: "noviembre",
    titulo: "Cañuelas contra Jaguares del Litoral",
    detalles: "16:00, cancha 1, primera",
    rol: "afuera",
    RolTexto: "clásico",
  },
  {
    dia: "09",
    mes: "noviembre",
    titulo: "Circuito de seven del interior",
    detalles: "todo el día, club Puerto Norte, M9 a M15",
    rol: "fiesta",
    RolTexto: "todos juegan",
  },
];

export const horarios: Horario[] = [
  { titulo: "Rugby superior", detalle: "lunes, miércoles y viernes a las 19:00" },
  { titulo: "Escuela y juveniles", detalle: "lunes y miércoles a partir de las 17:30" },
  { titulo: "Hockey", detalle: "martes y jueves a partir de las 19:00" },
];

export const figuras: Figura[] = [
  {
    nombre: "Toto Ferreyra",
    puesto: "capitán, segunda línea",
    historia: "El último en salir del vestuario y el primero en el line. Llegó de M9 al club.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/ST_vs_Harlequins_-_Thierry_Dusautoir_tackles_Nick_Evans.jpg/1280px-ST_vs_Harlequins_-_Thierry_Dusautoir_tackles_Nick_Evans.jpg",
  },
  {
    nombre: "Julián Lagos",
    puesto: "apertura",
    historia: "68 puntos en el Apertura y contando. Cuando aprieta el partido, la pelota cae a su pie.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Nick_Evans_Drop_Goal_%2810243147733%29.jpg/1280px-Nick_Evans_Drop_Goal_%2810243147733%29.jpg",
  },
  {
    nombre: "Renata Orfila",
    puesto: "media scrum, hockey",
    historia: "Convocada a la selección regional y ayudante de la escuelita los domingos.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/ST_vs_LOU_-_21.jpg/1280px-ST_vs_LOU_-_21.jpg",
  },
  {
    nombre: "Cachito Duarte",
    puesto: "head coach",
    historia: "Nivel 3 de World Rugby. Ex puma, hoy al frente del proyecto 2026 a 2028.",
    foto: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Garry_Law_kicks_at_goal.jpg",
  },
];

export const galeria: { src: string; alto: boolean; larga: boolean; pie: string }[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Ireland_vs_Romania_rugby_match.jpg/1280px-Ireland_vs_Romania_rugby_match.jpg",
    alto: true, larga: false,
    pie: "Cancha 1, un sábado cualquiera",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/2023_Rugby_World_Cup_warm-up_matches_-_Uruguay_vs_Chile_-_10.jpg/1280px-2023_Rugby_World_Cup_warm-up_matches_-_Uruguay_vs_Chile_-_10.jpg",
    alto: false, larga: false,
    pie: "La defensa no negocia",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Rovigo_campione_2023_rugby_%28no_watermark%29.jpg/1280px-Rovigo_campione_2023_rugby_%28no_watermark%29.jpg",
    alto: true, larga: false,
    pie: "El título del 2024, con el pueblo en la tribuna",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Rugby_Scrum_Roma_-_Benetton_Treviso_9_may_2009.jpg/1280px-Rugby_Scrum_Roma_-_Benetton_Treviso_9_may_2009.jpg",
    alto: false, larga: false,
    pie: "El pack, la fábrica del club",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/England_rugby_training_at_bath_arp.jpg/1280px-England_rugby_training_at_bath_arp.jpg",
    alto: false, larga: true,
    pie: "Martes de trabajo, viernes de video",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Perpignan_Lineout_Wasps_Perpignan.jpg/1280px-Perpignan_Lineout_Wasps_Perpignan.jpg",
    alto: false, larga: true,
    pie: "Subiendo por la pelota",
  },
];
