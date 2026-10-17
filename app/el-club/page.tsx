import Link from "next/link";

export const metadata = { title: "El club" };

export default function ElClub() {
  return (
    <main id="juego">
      {/* Portada */}
      <section className="apertura">
        <div className="apertura__fondo">
          <img
            src="/equipo.jpg"
            alt="Dos equipos en ronda charlando antes de jugar en el predio."
            fetchPriority="high"
          />
        </div>
        <div className="apertura__tarjeta">
          <div className="ancho">
            <h1>
              El club
              <span className="segunda">desde 1985</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>1985</b> año de fundación</div>
              <div><b>15 de marzo</b> la fecha exacta</div>
              <div><b>2</b> colores: verde y amarillo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Historia</h2>
          </div>
          <p>
            El club se fundó el 15 de marzo de 1985. Las canchas están en
            Carlos Pellegrini y Santa Cruz y la secretaría funciona en Santa
            Cruz 1101, Cañuelas.
          </p>
          <p>
            El rugby compite por la URBA y el hockey se practica en el mismo
            predio. Si querés jugar, tenés la página de inscripción con los
            grupos disponibles.
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
        </div>
      </section>

      <hr className="pintura" />

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

      <hr className="pintura" />

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

      {/* Llamado */}
      <section className="seccion vestuario">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Vení a conocernos</h2>
            <p>Acercate a la secretaría o escribí por WhatsApp; también podés dejar la inscripción completa.</p>
          </div>
          <Link className="boton" href="/inscripciones">Ir a Inscripciones</Link>
        </div>
      </section>
    </main>
  );
}
