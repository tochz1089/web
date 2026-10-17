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
            src="/hockey.jpg"
            alt="Una jugadora de hockey del club conduciendo la pelota en césped sintético."
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
              El hockey se practica en el predio de Carlos Pellegrini y Santa
              Cruz, con escuelita para las más chicas y equipos de damas.
              {horarioHockey ? " " + horarioHockey.detalle.charAt(0).toUpperCase() + horarioHockey.detalle.slice(1) + "." : ""}
            </p>
            <p>
              No hace falta experiencia previa: vení a probar una clase y de ahí
              te contamos cómo seguir.
            </p>
          </div>
        </div>
      </section>

      {/* Fotos */}
      <section className="seccion">
        <div className="ancho">
          <div className="album">
            <figure className="larga">
              <img
                src="/hockey.jpg"
                alt="Jugadora del club peleando la pelota adelante del arco."
                loading="lazy"
              />
              <figcaption>Ataque en el área, partido de damas.</figcaption>
            </figure>
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Dutch_Women_Hockey_-_Shielding_the_ball.jpg/1280px-Dutch_Women_Hockey_-_Shielding_the_ball.jpg"
                alt="Jugadora protegiendo la pelota. Foto ilustrativa."
                loading="lazy"
              />
              <figcaption>Foto ilustrativa.</figcaption>
            </figure>
            <figure>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/CNU_vs_HC%2C_Field_Hockey_%288150454054%29.jpg/1280px-CNU_vs_HC%2C_Field_Hockey_%288150454054%29.jpg"
                alt="Partido de hockey césped. Foto ilustrativa."
                loading="lazy"
              />
              <figcaption>Foto ilustrativa.</figcaption>
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
