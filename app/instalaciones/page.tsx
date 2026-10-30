import Link from "next/link";

export const metadata = { title: "Instalaciones" };

export default function Instalaciones() {
  return (
    <main id="juego">
      {/* Portada tipográfica */}
      <section className="apertura apertura--tinta">
        <div className="apertura__tarjeta">
          <div className="ancho">
            <h1>
              Instalaciones
              <span className="segunda">el predio del club</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>1985</b> en Carlos Pellegrini y Santa Cruz</div>
              <div><b>2</b> deportes con cancha propia</div>
              <div><b>1</b> secretaría en Santa Cruz 1101</div>
            </div>
          </div>
        </div>
      </section>

      {/* El predio en fotos */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Todo en el mismo predio</h2>
            <p>
              Las canchas están en Carlos Pellegrini y Santa Cruz, Cañuelas:
              ahí entrenan y juegan el rugby y el hockey. Acá les va mientras
              sumamos fotos propias de cada rincón.
            </p>
          </div>
          <div className="album">
            <figure className="larga">
              <img
                src="/equipo.jpg"
                alt="El predio del club con las tribunas de madera y los equipos en ronda."
                loading="lazy"
              />
              <figcaption>El predio, con los equipos charlando antes de jugar.</figcaption>
            </figure>
            <figure>
              <img
                src="/portada.jpg"
                alt="La cancha principal durante un scrum, con la tribuna detrás."
                loading="lazy"
              />
              <figcaption>Cancha principal, un sábado de fixture.</figcaption>
            </figure>
            <figure>
              <img
                src="/hockey.jpg"
                alt="Jugadoras de hockey en la cancha del club."
                loading="lazy"
              />
              <figcaption>El hockey, en el mismo predio.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <hr className="pintura" />

      {/* Datos útiles */}
      <section className="seccion vestuario">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Dónde está cada cosa</h2>
            <p>Si venís por primera vez, esto es lo que hay que saber.</p>
          </div>
          <div className="horarios">
            <div className="horario">
              <b>Canchas</b>
              <span>Carlos Pellegrini y Santa Cruz, Cañuelas, Buenos Aires.</span>
            </div>
            <div className="horario">
              <b>Secretaría</b>
              <span>Santa Cruz 1101, Cañuelas (1814). Teléfono: 02226 15-609903.</span>
            </div>
            <div className="horario">
              <b>Cómo llegar</b>
              <span>Tren Línea Roca hasta Cañuelas, colectivos 88, 51 y 218, o autopista Ezeiza-Cañuelas por ruta 3. El detalle completo queda en El club.</span>
            </div>
          </div>
          <Link className="boton" href="/el-club#como-llegar">Ver cómo llegar completo</Link>
        </div>
      </section>

      {/* Llamado */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Vení a conocerlas</h2>
            <p>Un sábado de fixture alcanza para ver todo funcionando.</p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
