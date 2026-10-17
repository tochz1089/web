"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Escudo from "./Escudo";

type Seccion = { etiqueta: string; ancla: string };

const secciones: Seccion[] = [
  { etiqueta: "El club", ancla: "#club" },
  { etiqueta: "Rugby", ancla: "#rugby" },
  { etiqueta: "Hockey", ancla: "#hockey" },
  { etiqueta: "Cartelera", ancla: "#fixture" },
  { etiqueta: "Cómo llegar", ancla: "#como-llegar" },
  { etiqueta: "Galería", ancla: "#album" },
];

export default function Cabecera() {
  const [abierto, setAbierto] = useState(false);
  const ruta = usePathname();
  const enHome = ruta === "/";
  const enlace = (ancla: string) => (enHome ? ancla : `/${ancla}`);

  return (
    <header className="arriba">
      <div className="ancho arriba__fila">
        <Link
          className="mosca"
          href={enHome ? "#juego" : "/"}
          onClick={() => setAbierto(false)}
        >
          <Escudo />
          <span>
            <span className="club">Las Cañas Rugby Club</span>
            <span className="anios">rugby y hockey</span>
          </span>
        </Link>

        <nav className={abierto ? "menu abierto" : "menu"} id="menu" aria-label="Navegación principal">
          {secciones.map((s) => (
            <a key={s.ancla} href={enlace(s.ancla)} onClick={() => setAbierto(false)}>
              {s.etiqueta}
            </a>
          ))}
          <Link
            className="ya-vas"
            href="/inscripciones"
            aria-current={ruta === "/inscripciones" ? "page" : undefined}
            onClick={() => setAbierto(false)}
          >
            Anotate
          </Link>
        </nav>

        <button
          className="hammenu"
          aria-expanded={abierto}
          aria-controls="menu"
          aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setAbierto(!abierto)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
            {abierto
              ? <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></>
              : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
      </div>
    </header>
  );
}
