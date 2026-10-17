import type { Metadata } from "next";
import Link from "next/link";
import FormularioInscripcion from "@/components/FormularioInscripcion";

export const metadata: Metadata = {
  title: "Inscripciones",
  description:
    "Cómo inscribirte en Las Cañas Rugby Club: rugby y hockey, desde la escuelita al plantel superior. Deja tus datos y te recibimos la semana que viene.",
};

export default function Inscripciones() {
  return (
    <main id="juego">
      {/* Portada de la página */}
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
              Inscripciones
              <span className="segunda">abiertas todo el año</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>1</b> clase gratis para probar</div>
              <div><b>4</b> pasos para arrancar</div>
              <div><b>Todos</b> rugby y hockey, chicos y adultos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo se inscribe + formulario */}
      <section className="seccion">
        <div className="ancho">
          <div className="union">
            <div>
              <h2>Sumate al club</h2>
              <p>
                Llená el formulario con tus datos y alguien de la subcomisión te
                escribe con el horario de tu primera práctica. Si tenés dudas
                antes, podés preguntar por WhatsApp.
              </p>

              <ul className="promesas">
                <li><span className="num" aria-hidden="true">1</span><span>La primera clase es gratis, para probar</span></li>
                <li><span className="num" aria-hidden="true">2</span><span>La ficha médica se pide después del primer mes</span></li>
                <li><span className="num" aria-hidden="true">3</span><span>Cuota social con becas para quienes las necesiten</span></li>
                <li><span className="num" aria-hidden="true">4</span><span>Pedimos fotocopia del DNI y un teléfono de contacto</span></li>
              </ul>

              <p>
                Escribinos por WhatsApp al 02226 15-609903 o a
                clublascanas_rugbyhockey@hotmail.com y te respondemos en el día.
              </p>
              <p>
                Las canchas están en Carlos Pellegrini y Santa Cruz: tren Línea
                Roca desde Constitución, colectivos 88, 51 y 218, o autopista
                Ezeiza-Cañuelas por ruta 3. El detalle está en la página El club,
                sección "Cómo llegar".
              </p>
              <p>
                <Link className="boton" href="/">Volver al inicio</Link>
              </p>
            </div>

            <FormularioInscripcion />
          </div>
        </div>
      </section>

      <hr className="pintura" />
    </main>
  );
}
