import Link from "next/link";
import { fixture, galeria, horarios } from "@/lib/datos";

export const metadata = { title: "Rugby" };

export default function Rugby() {
  const horarioRugby = horarios.filter((h) => h.titulo === "Rugby");

  return (
    <main id="juego">
      {/* Portada */}
      <section className="apertura">
        <div className="apertura__fondo">
          <img
            src="/portada.jpg"
            alt="El pack de Las Cañas empujando un scrum, con la tribuna detrás."
            fetchPriority="high"
          />
        </div>
        <div className="apertura__tarjeta">
          <div className="ancho">
            <h1>
              Rugby
              <span className="segunda">en Las Cañas</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>3</b> ramas: escuelita, juveniles y superior</div>
              <div><b>URBA</b> club afiliado</div>
              <div><b>1985</b> jugando desde la fundación</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="tablero" aria-label="Resultados de la última fecha">
        <div className="ancho">
          <h2 className="tablero__titulo">Resultados del último sábado</h2>
          <div className="renglon">
            <span className="renglon__fecha">a definir</span>
            <div className="renglon__duelo">
              Resultados por categoría
              <small>se cargan en cuanto terminan los partidos del fin de semana</small>
            </div>
            <span className="renglon__puntos">—</span>
            <span className="renglon__lugar">sin datos todavía</span>
          </div>
        </div>
      </section>

      <hr className="pintura" />

      {/* Fixture */}
      <section className="seccion" id="fixture">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Lo que viene</h2>
            <p>
              El fixture se publica cuando llega la programación del torneo;
              en cuanto esté, lo cargamos acá con días y horarios.
            </p>
          </div>
          <div className="pizarra">
            {fixture.map((e) => (
              <article className="jornada" key={e.titulo}>
                <div className="jornada__fecha"><b>—</b><span>{e.fecha}</span></div>
                <div className="jornada__duelo">
                  <strong>{e.titulo}</strong>
                  <small>{e.detalle}</small>
                </div>
                <span className="jornada__rol">{e.nota}</span>
              </article>
            ))}
          </div>

          <div className="horarios">
            {horarioRugby.map((h) => (
              <div className="horario" key={h.titulo}>
                <b>{h.titulo}</b>
                <span>{h.detalle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cada edad */}
      <section className="seccion" id="ramas">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Cada edad, su equipo</h2>
            <p>La escuelita recibe desde los 5 años y no hace falta experiencia previa.</p>
          </div>
          <div className="bandas">
            <Link className="banda" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Schoolkids_doing_a_rugby_tackle.jpg/1280px-Schoolkids_doing_a_rugby_tackle.jpg"
                alt="Chicos practicando tackle. Foto ilustrativa."
                loading="lazy"
              />
              <div>
                <div className="grupo">del M5 al M13</div>
                <h3>Escuelita</h3>
                <p>Juego y fundamentos; el primer tackle llega con tiempo.</p>
              </div>
            </Link>
            <Link className="banda" data-categoria="juveniles" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bond_Rugby_%2813373623165%29.jpg/1280px-Bond_Rugby_%2813373623165%29.jpg"
                alt="Juveniles corriendo con la pelota. Foto ilustrativa."
                loading="lazy"
              />
              <div>
                <div className="grupo">del M14 al M19</div>
                <h3>Juveniles</h3>
                <p>Competencia oficial por edad y camino al plantel superior.</p>
              </div>
            </Link>
            <Link className="banda" data-categoria="superior" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Homeboyz_Rugby_celebrate_winning_the_Enterprise_Cup.jpg"
                alt="Equipo celebrando con la copa. Foto ilustrativa."
                loading="lazy"
              />
              <div>
                <div className="grupo">plantel superior</div>
                <h3>Primera</h3>
                <p>El equipo que representa al club en la URBA.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="seccion" id="album">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Fotos</h2>
            <p>Estas son ilustrativas: se van a ir cambiando por fotos reales del club.</p>
          </div>
          <div className="album">
            {galeria.map((g) => (
              <figure key={g.pie}>
                <img src={g.src} alt={g.pie} loading="lazy" />
                <figcaption>{g.pie}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Llamado */}
      <section className="seccion vestuario">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Sumate al rugby</h2>
            <p>
              Dejá tus datos en el formulario y alguien del club te escribe con
              el horario de tu grupo. La primera clase es gratis.
            </p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
