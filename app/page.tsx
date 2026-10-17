import Link from "next/link";
import { encuentros, galeria, horarios, resultados } from "@/lib/datos";

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
              <div><b>1985</b> año de fundación</div>
              <div><b>2</b> deportes: rugby y hockey</div>
              <div><b>URBA</b> club afiliado, sábados en Cañuelas</div>
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
                Las Cañas Rugby Club quedó fundado el 15 de marzo de 1985. Desde
                entonces el cuadrante entre Carlos Pellegrini y Santa Cruz es casa:
                ahí están las canchas, el tercer tiempo y los sábados del pueblo.
                La secretaría funciona a pocas cuadras, en Santa Cruz 1101.
              </p>
              <p>
                El club juega afiliado a la URBA y forma jugadores en la cancha y
                personas fuera de ella: la camiseta no se regala, se gana en los
                entrenamientos.
              </p>
              <ul className="camisetas">
                <li>
                  <span className="parche parche--titular" aria-hidden="true"></span>
                  <span>Titular: camiseta verde y amarilla a cuadros, pantalón blanco y medias verdes.</span>
                </li>
                <li>
                  <span className="parche parche--alternativa" aria-hidden="true"></span>
                  <span>Alternativa: camiseta verde con cuello y puños amarillos, pantalón blanco y medias verdes.</span>
                </li>
              </ul>
              <div className="estampas">
                <div className="estampa"><b>1985</b><span>fundado el 15 de marzo</span></div>
                <div className="estampa"><b>41</b><span>años en el mismo predio</span></div>
                <div className="estampa"><b>1</b><span>secretaría: Santa Cruz 1101, Cañuelas</span></div>
                <div className="estampa"><b>2</b><span>colores de siempre: verde y amarillo</span></div>
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

      {/* Cómo llegar */}
      <section className="seccion" id="como-llegar">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Cómo llegar</h2>
            <p>
              Las canchas están en Carlos Pellegrini y Santa Cruz, Cañuelas,
              provincia de Buenos Aires. La secretaría, en Santa Cruz 1101.
            </p>
          </div>
          <div className="horarios">
            <div className="horario">
              <b>En tren</b>
              <span>Línea Roca desde Constitución hasta Cañuelas; del andén son 6 cuadras caminando hasta el club.</span>
            </div>
            <div className="horario">
              <b>En colectivo</b>
              <span>Línea 88 desde Plaza Once, Línea 51 desde Constitución y Línea 218 desde Liniers: todas llegan a Cañuelas.</span>
            </div>
            <div className="horario">
              <b>En auto</b>
              <span>Autopista Ezeiza-Cañuelas hasta la rotonda de la Esso; tome ruta 3 hacia San Miguel del Monte y, 3 km después (donde la ruta se hace doble), doble a la derecha: 400 m y está el club. Desde ruta 205, mismo camino pasando el castillo.</span>
            </div>
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

      {/* Autoridades */}
      <section className="seccion vestuario" id="autoridades">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Quiénes están al frente</h2>
            <p>La comisión que ordena el club y el cuerpo técnico que conduce la cancha.</p>
          </div>
          <div className="autoridades">
            <article className="autoridad">
              <h3>Presidencia</h3>
              <div>
                <b>Claudio Mozotegui</b>
                <div className="contacto">
                  <a href="tel:+5491136817072">011 15-3681-7072</a>
                  <a href="mailto:mozoteguicd@yahoo.com.ar">mozoteguicd@yahoo.com.ar</a>
                </div>
              </div>
            </article>
            <article className="autoridad">
              <h3>Secretaría</h3>
              <div>
                <b>Diego Baquero</b>
                <div className="contacto">
                  <a href="tel:+5492226681725">02226 15-681725</a>
                  <a href="mailto:mula09@hotmail.com">mula09@hotmail.com</a>
                </div>
              </div>
            </article>
            <article className="autoridad">
              <h3>Capitán general de rugby</h3>
              <div>
                <b>Fernando C. Alzugaray</b>
                <div className="contacto">
                  <a href="tel:+5491154273813">011 15-5427-3813</a>
                  <a href="mailto:fernando_alzugaray@hotmail.com">fernando_alzugaray@hotmail.com</a>
                </div>
              </div>
            </article>
            <article className="autoridad">
              <h3>Coordinador de rugby infantil</h3>
              <div>
                <b>Diego Saied</b>
                <div className="contacto">
                  <a href="tel:+543758433566">3758 43-3566</a>
                  <a href="mailto:diesai@yahoo.com">diesai@yahoo.com</a>
                </div>
              </div>
            </article>
            <article className="autoridad">
              <h3>Coordinador de rugby juvenil</h3>
              <div>
                <b>Fernando C. Alzugaray</b>
                <div className="contacto">
                  <a href="tel:+5491154273813">011 15-5427-3813</a>
                  <a href="mailto:fernando_alzugaray@hotmail.com">fernando_alzugaray@hotmail.com</a>
                </div>
              </div>
            </article>
            <article className="autoridad">
              <h3>Capitán de división superior</h3>
              <div>
                <b>Mario E. Sosa</b>
                <div className="contacto">
                  <a href="tel:+5492226544126">02226 15-544126</a>
                  <a href="mailto:mezequielsosa@gmail.com">mezequielsosa@gmail.com</a>
                </div>
              </div>
            </article>
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

      <hr className="pintura" />
    </main>
  );
}
