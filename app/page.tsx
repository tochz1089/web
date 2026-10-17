import Link from "next/link";
import { encuentros, figuras, galeria, horarios, resultados } from "@/lib/datos";

export default function Home() {
  return (
    <main id="juego">
      {/* Portada */}
      <section className="apertura">
        <div className="apertura__fondo">
          <img
            src="/portada.jpg"
            alt="El pack de Las Cañas empujando un scrum contra un rival, con la tribuna detrás."
            fetchPriority="high"
          />
        </div>
        <div className="apertura__tarjeta">
          <div className="ancho">
            <h1>
              El pack empuja
              <span className="segunda">parejo, siempre</span>
            </h1>

            <Link className="apertura__cartel" href="/#fixture">
              <div className="lado">
                <span className="rival">Contra Jaguares del Litoral</span>
                <span className="detalle">Torneo Apertura, fecha 10</span>
              </div>
              <div className="dia">
                <b>02 nov</b>
                <span>16:00, cancha 1</span>
              </div>
            </Link>

            <div className="apertura__numeros">
              <div><b>412</b> socios del club</div>
              <div><b>9</b> categorías, de M5 a plantel</div>
              <div><b>2</b> deportes: rugby y hockey</div>
            </div>
          </div>
        </div>
      </section>

      {/* Disciplinas */}
      <div className="disciplinas">
        <Link className="disco" id="rugby" href="/#fixture">
          <img
            src="/portada.jpg"
            alt="El pack de Las Cañas formando scrum."
            loading="lazy"
          />
          <h2>Rugby</h2>
          <p>De la escuelita al plantel superior: sábados de fixture en el predio y tercer tiempo de asado.</p>
          <span className="atravesar">Ver cartelera</span>
        </Link>
        <Link className="disco disco--hockey" id="hockey" href="/#ramas">
          <img
            src="/hockey.jpg"
            alt="Una jugadora de hockey del club conduciendo la pelota en césped sintético."
            loading="lazy"
          />
          <h2>Hockey</h2>
          <p>Escuelita y damas: el otro deporte grande del club, los martes y los jueves.</p>
          <span className="atravesar">Conocer hockey</span>
        </Link>
      </div>

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

      {/* El club */}
      <section className="seccion" id="club">
        <div className="ancho">
          <div className="premisa">
            <div className="premisa__cuerpo">
              <h2>Hecho de barro y de años</h2>
              <p>
                En 1978, un grupo de amigos armó su primer equipo al costado de la
                estación de Las Cañas. Hoy ese mismo predio tiene dos canchas, un quincho
                y los sábados llenos de chicos de cinco años y de veteranos que no
                aprendieron a parar.
              </p>
              <blockquote>
                “El partido de verdad se juega el martes a la tarde, cuando nadie está mirando.”
                <footer>Horacio Tacho Baena, capitán entre 1994 y 2003</footer>
              </blockquote>
              <p>
                El club forma jugadores en la cancha y personas fuera de ella:
                la camiseta no se regala, se gana en los entrenamientos.
              </p>
              <div className="estampas">
                <div className="estampa"><b>45</b><span>años jugando en el mismo predio</span></div>
                <div className="estampa"><b>412</b><span>socios del club, chicos y grandes</span></div>
                <div className="estampa"><b>9</b><span>categorías, de M5 a plantel</span></div>
                <div className="estampa"><b>4</b><span>títulos de clubes del interior</span></div>
              </div>
              <Link className="boton" href="/inscripciones">Vení a conocernos</Link>
            </div>
            <figure className="premisa__foto">
              <img
                src="/equipo.jpg"
                alt="Juveniles del club en ronda, charlando antes de jugar."
                loading="lazy"
              />
              <figcaption>La charla antes del partido, en el predio del club.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <hr className="pintura" />

      {/* Cartelera */}
      <section className="seccion" id="fixture">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Lo que viene</h2>
            <p>Cada fecha de local hay asado gracias a la comisión. Entra gratis si sos socio.</p>
          </div>
          <div className="pizarra">
            {encuentros.map((e) => (
              <Link className="jornada" href="/inscripciones" key={e.dia + e.mes}>
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
              </Link>
            ))}
          </div>

          <div className="horarios">
            {horarios.map((h) => (
              <div className="horario" key={h.titulo}>
                <b>{h.titulo}</b>
                <span>{h.detalle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Edades y hockey */}
      <section className="seccion" id="ramas">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Cada edad, cada deporte</h2>
            <p>Arrancar nunca es tarde: la escuelita recibe desde los 5 años y el hockey suma cada año.</p>
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
            <Link className="banda" data-categoria="hockey" href="/inscripciones">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/CNU_vs_HC%2C_Field_Hockey_%288150454054%29.jpg/1280px-CNU_vs_HC%2C_Field_Hockey_%288150454054%29.jpg"
                alt="Partido de hockey césped."
                loading="lazy"
              />
              <div>
                <div className="grupo">martes y jueves, 19:00</div>
                <h3>Hockey</h3>
                <p>Escuelita y damas: el segundo deporte del club, con la misma cara.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Plantel */}
      <section className="seccion vestuario" id="plantel">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>El plantel tiene nombres</h2>
            <p>Los que cargan con la camiseta más veces y los que la llevan más alto en el torneo.</p>
          </div>
          <div className="figuras">
            {figuras.map((f) => (
              <article className="figura" key={f.nombre}>
                <div className="figura__foto">
                  <img src={f.foto} alt={f.nombre} loading="lazy" />
                </div>
                <h3>{f.nombre}</h3>
                <span className="puesto">{f.puesto}</span>
                <p>{f.historia}</p>
              </article>
            ))}
          </div>
          <p className="aclaracion">
            Las fotos son ilustrativas: las de cada persona entran con la temporada.
          </p>
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

      <hr className="pintura" />
    </main>
  );
}
