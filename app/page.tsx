import Link from "next/link";

export const metadata = { title: "Inicio" };

export default function Home() {
  return (
    <main id="juego">
      {/* Portada de bienvenida */}
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
          </div>
        </div>
      </section>

      {/* Las dos opciones */}
      <div className="disciplinas">
        <Link className="disco" href="/rugby">
          <img
            src="/portada.jpg"
            alt="El pack de Las Cañas formando scrum."
            loading="lazy"
          />
          <h2>Rugby</h2>
          <p>Escuelita, juveniles y plantel superior. Resultados, fixture y fotos.</p>
          <span className="atravesar">Ver la página de rugby</span>
        </Link>
        <Link className="disco disco--hockey" href="/hockey">
          <img
            src="/hockey.jpg"
            alt="Una jugadora de hockey del club conduciendo la pelota."
            loading="lazy"
          />
          <h2>Hockey</h2>
          <p>Escuelita y damas, en el mismo predio del club.</p>
          <span className="atravesar">Ver la página de hockey</span>
        </Link>
      </div>

      {/* Info mínima + acceso al club */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Quiénes somos</h2>
            <p>
              Las Cañas Rugby Club es un club de Cañuelas, fundado el 15 de marzo
              de 1985. Las canchas están en Carlos Pellegrini y Santa Cruz, y la
              secretaría en Santa Cruz 1101. La historia completa, las autoridades
              y cómo llegar están en la página El club.
            </p>
          </div>
          <Link className="boton" href="/el-club">Ir a El club</Link>
        </div>
      </section>

      {/* Llamado a anotarse */}
      <section className="seccion vestuario">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>¿Querés jugar?</h2>
            <p>
              La primera clase es gratis, para rugby y para hockey. Dejá tus datos
              y alguien del club te escribe con los horarios.
            </p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
