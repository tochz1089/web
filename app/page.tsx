import Link from "next/link";
import { encuentros } from "@/lib/datos";

export const metadata = { title: "Inicio" };

export default function Home() {
  const proximo = encuentros[0];

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

            <Link className="apertura__cartel" href="/cartelera">
              <div className="lado">
                <span className="rival">Próximo partido: {proximo.titulo}</span>
                <span className="detalle">Tocá para ver la cartelera completa</span>
              </div>
              <div className="dia">
                <b>{proximo.dia} {proximo.mes}</b>
                <span>{proximo.detalles}</span>
              </div>
            </Link>

            <div className="apertura__numeros">
              <div><b>1985</b> año de fundación</div>
              <div><b>41</b> años de historia en el mismo predio</div>
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
          <p>De la escuelita al plantel superior: fixture, resultados y toda la escuelita del club, sábados en la cancha.</p>
          <span className="atravesar">Ver rugby</span>
        </Link>
        <Link className="disco disco--hockey" href="/hockey">
          <img
            src="/hockey.jpg"
            alt="Una jugadora de hockey del club conduciendo la pelota."
            loading="lazy"
          />
          <h2>Hockey</h2>
          <p>Escuelita y damas, martes y jueves: horarios y cómo sumar la parte para el grupo del deporte.</p>
          <span className="atravesar">Ver hockey</span>
        </Link>
      </div>

      {/* Info mínima + acceso al club */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Un club de barrio</h2>
            <p>
              Fundado el 15 de marzo de 1985 en Cañuelas, juega el rugby afiliado a la
              URBA. La historia completa del club, la comisión y cómo llegar a las
              canchas están en su propia página.
            </p>
          </div>
          <Link className="boton" href="/el-club">Conocer el club</Link>
        </div>
      </section>

      {/* Llamado a anotarse */}
      <section className="seccion vestuario">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Anotate en un minuto</h2>
            <p>La primera clase es gratis, para rugby y para hockey, de chicos a mayores.</p>
          </div>
          <Link className="boton" href="/inscripciones">Dejar inscripción</Link>
        </div>
      </section>
    </main>
  );
}
