import Link from "next/link";
import { horarios } from "@/lib/datos";

export const metadata = { title: "Hockey" };

export default function Hockey() {
  const horarioHockey = horarios.find((h) => h.titulo === "Hockey");

  return (
    <main id="juego">
      {/* Portada */}
      <section className="apertura">
        <div className="apertura__fondo">
          <img
            src="/fotos/temporada/hk-tribuna.jpg"
            alt="La tribuna del hockey alentando desde el borde de la cancha, en un partido de damas."
            fetchPriority="high"
          />
        </div>
        <div className="apertura__tarjeta">
          <div className="ancho">
            <h1>
              Hockey
              <span className="segunda">en el mismo predio</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>2</b> grupos: escuelita y damas</div>
              <div><b>1</b> predio compartido con el rugby</div>
              <div><b>1985</b> mismo club, mismo escudo</div>
            </div>
          </div>
        </div>
      </section>

      {/* El hockey del club */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Escuelita y damas</h2>
            <p>
              El hockey se juega en la cancha de Pellegrini y Santa Cruz, en el
              mismo predio que el rugby.
              {horarioHockey ? " " + horarioHockey.detalle.charAt(0).toUpperCase() + horarioHockey.detalle.slice(1) + "." : ""}
            </p>
            <p>
              No hace falta experiencia previa: vení a probar una clase y de ahí
              te contamos cómo seguir.
            </p>
          </div>

          <div className="bandas bandas--dos">
            <Link className="banda" href="/inscripciones">
              <img
                src="/fotos/temporada/hk-chicas.jpg"
                alt="Las chicas del hockey, formadas en la cancha del club."
                loading="lazy"
              />
              <div>
                <div className="grupo">las más chicas</div>
                <h3>Escuelita</h3>
                <p>Primeros palos y primeros juegos, dentro del club.</p>
              </div>
            </Link>
            <Link className="banda" data-categoria="femenino" href="/inscripciones">
              <img
                src="/fotos/temporada/hk-damas.jpg"
                alt="El plantel de damas posando junto en la cancha."
                loading="lazy"
              />
              <div>
                <div className="grupo">primer equipo</div>
                <h3>Damas</h3>
                <p>Competencia de la temporada, adentro y de visita.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Fotos</h2>
            <p>Un día de hockey en el predio, sacado desde la tribuna.</p>
          </div>
          <div className="posteres">
            <figure>
              <img
                src="/fotos/temporada/hk-pase.jpg"
                alt="Dos jugadoras del club corriendo detrás de la pelota, en la cancha de Pellegrini y Santa Cruz."
                loading="lazy"
              />
              <figcaption>La salida, partido de damas.</figcaption>
            </figure>
            <figure>
              <img
                src="/fotos/temporada/hk-velocidad.jpg"
                alt="Una jugadora del club acelerando con la pelota pegada al palo."
                loading="lazy"
              />
              <figcaption>La velocidad, subiendo por la punta.</figcaption>
            </figure>
            <figure>
              <img
                src="/fotos/temporada/hk-corto.jpg"
                alt="El corner corto del club, con la arquera esperando en el arco."
                loading="lazy"
              />
              <figcaption>El corner corto, con la arquera lista.</figcaption>
            </figure>
            <figure>
              <img
                src="/fotos/temporada/hk-abrazo.jpg"
                alt="El equipo del club abrazándose después de un gol."
                loading="lazy"
              />
              <figcaption>El abrazo del gol.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Llamado */}
      <section className="seccion vestuario">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Sumate al hockey</h2>
            <p>La primera clase es gratis. Dejá tus datos y te escribimos.</p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
