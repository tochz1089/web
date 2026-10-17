import Link from "next/link";
import { encuentros, galeria, horarios, resultados } from "@/lib/datos";

export const metadata = { title: "Rugby" };

export default function Rugby() {
  const horariosRugby = horarios.filter((h) => h.titulo !== "Hockey");

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
              <span className="segunda">sábados en Cañuelas</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>3</b> ramas: escuelita, juveniles y superior</div>
              <div><b>URBA</b> club afiliado, fixture de fin de semana</div>
              <div><b>1985</b> jugando desde la fundación del club</div>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados */}
      <section className="tablero" aria-label="Resultados del fin de semana">
        <div className="ancho">
          <h2 className="tablero__titulo">Resultados del último sábado</h2>
          <div>
            {resultados.map((r) => (
              <div className="renglon" key={r.torneo + r.fecha}>
                <span className="renglon__fecha">{r.fecha}</span>
                <div className="renglon__duelo">
                  <span className={r.ganoVisita ? undefined : "gano"}>{r.local}</span>
                  {" contra "}
                  <span className={r.ganoVisita ? "gano" : undefined}>{r.visita}</span>
                  <small>{r.torneo}</small>
                </div>
                <span className="renglon__puntos">{r.puntos}</span>
                <span className="renglon__lugar">
                  {r.ganoVisita ? "ganamos de visita" : "dimos la vuelta"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="pintura" />

      {/* Fixture */}
      <section className="seccion" id="fixture">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Lo que viene</h2>
            <p>Cada fecha de local hay asado gracias a la comisión. Entra gratis si sos socio.</p>
          </div>
          <div className="pizarra">
            {encuentros.map((e) => (
              <article className="jornada" key={e.dia + e.mes}>
                <div className="jornada__fecha"><b>{e.dia}</b><span>{e.mes}</span></div>
                <div className="jornada__duelo">
                  <strong>
                    <span className="de-casa">{e.titulo.split(" contra ")[0]}</span>
                    {" contra "}
                    {e.titulo.split(" contra ")[1]}
                  </strong>
                  <small>{e.detalles}</small>
                </div>
                <span className={`jornada__rol ${e.rol}`}>{e.RolTexto}</span>
              </article>
            ))}
          </div>

          <div className="horarios">
            {horariosRugby.map((h) => (
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
            <p>Arrancar nunca es tarde: la escuelita recibe desde los 5 años.</p>
          </div>
          <div className="bandas">
            <Link className="banda" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Schoolkids_doing_a_rugby_tackle.jpg/1280px-Schoolkids_doing_a_rugby_tackle.jpg"
                alt="Chicos practicando tackle."
                loading="lazy"
              />
              <div>
                <div className="grupo">lunes y miércoles, 17:30</div>
                <h3>Escuelita</h3>
                <p>Del M5 al M13: juego, valores y el primer tackle sin miedo.</p>
              </div>
            </Link>
            <Link className="banda" data-categoria="juveniles" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Bond_Rugby_%2813373623165%29.jpg/1280px-Bond_Rugby_%2813373623165%29.jpg"
                alt="Juveniles corriendo con la pelota."
                loading="lazy"
              />
              <div>
                <div className="grupo">sábados, hasta las 13</div>
                <h3>Juveniles</h3>
                <p>Del M14 al M19: competencia oficial y camino al plantel.</p>
              </div>
            </Link>
            <Link className="banda" data-categoria="superior" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Homeboyz_Rugby_celebrate_winning_the_Enterprise_Cup.jpg"
                alt="Equipo celebrando con la copa."
                loading="lazy"
              />
              <div>
                <div className="grupo">lunes, miércoles y viernes</div>
                <h3>Primera</h3>
                <p>Doble turno de entrenamiento y un objetivo claro: pelear arriba.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Galería */}
      <section className="seccion" id="album">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Sábado en la cancha</h2>
            <p>Barro, hombro con hombro y el tercer tiempo que nadie se salta.</p>
          </div>
          <div className="album">
            {galeria.map((g) => (
              <figure className={[g.alto ? "alta" : "", g.larga ? "larga" : ""].join(" ").trim()} key={g.pie}>
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
            <p>Primera clase gratis, sin compromiso. El club te da el resto.</p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
