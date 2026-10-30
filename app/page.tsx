import Link from "next/link";
import CarruselApertura from "@/components/CarruselApertura";

export const metadata = { title: "Inicio" };

export default function Home() {
  return (
    <main id="juego">
      {/* Portada de bienvenida, con carrusel de fotos */}
      <CarruselApertura />

      {/* Las dos opciones */}
      <div className="disciplinas">
        <Link className="disco" href="/rugby">
          <img
            src="/fotos/temporada/p-rugby.jpg"
            alt="El tackle del plantel superior, sacado en plena jugada."
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
