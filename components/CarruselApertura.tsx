"use client";

import Link from "next/link";
import { useState } from "react";
import { carrusel } from "@/lib/datos";

export default function CarruselApertura() {
  const [indice, setIndice] = useState(0);
  const total = carrusel.length;

  const mover = (delta: number) => {
    setIndice((i) => (i + delta + total) % total);
  };

  return (
    <section className="apertura">
      <div className="apertura__fondo carrusel">
        {carrusel.map((f, i) => (
          <img
            key={f.src}
            src={f.src}
            alt={i === indice ? f.pie : ""}
            fetchPriority={i === 0 ? "high" : undefined}
            aria-hidden={i !== indice}
            className={i === indice ? "visible" : ""}
          />
        ))}
      </div>
      <div className="apertura__tarjeta">
        <div className="ancho">
          <h1>
            Bienvenidos
            <span className="segunda">al club</span>
          </h1>

          <p className="apertura__proxima">
            Próximo partido: por definir.{" "}
            <Link href="/cartelera">Ver cartelera</Link>
          </p>

          <div className="apertura__numeros">
            <div><b>1985</b> año de fundación</div>
            <div><b>41</b> años en el mismo predio</div>
            <div><b>2</b> deportes: rugby y hockey</div>
          </div>

          <div className="apertura__control">
            <button type="button" onClick={() => mover(-1)} aria-label="Foto anterior">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M14.5 5.5 8 12l6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button type="button" onClick={() => mover(1)} aria-label="Foto siguiente">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                <path d="M9.5 5.5 16 12l-6.5 6.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span aria-live="polite" className="apertura__cuenta">
              {indice + 1} / {total}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}