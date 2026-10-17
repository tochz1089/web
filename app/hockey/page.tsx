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
              <span className="segunda">martes y jueves</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>2</b> grupos: escuelita y damas</div>
              <div><b>19:00</b> {horarioHockey ? horarioHockey.detalle : "prácticas en el predio"}</div>
              <div><b>1</b> cancha, el mismo predio del rugby</div>
            </div>
          </div>
        </div>
      </section>

      {/* Qué es el hockey del club */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>El otro deporte grande</h2>
            <p>
              El hockey creció junto al rugby en el mismo predio de Cañuelas.
              Las más chicas arrancan en la escuelita con palos livianos y juego;
              las damas compiten los fines de semana con el mismo escudo en la
              camiseta a cuadros.
            </p>
            <p>
              No hace falta experiencia: llegá una martes o un jueves y probá
              una clase completa. Después te contamos cómo seguir.
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
            <p>Escuelita y damas: la primera clase es gratis y el palo, lo ponemos nosotros.</p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
