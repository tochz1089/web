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
              <div><b>1</b> clase gratis, sin compromiso</div>
              <div><b>4</b> pasos para arrancar</div>
              <div><b>48</b> horas para escribirte</div>
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
                Toda persona llega acompañada: si todavía no conocés a nadie, llená el
                formulario y alguien de la subcomisión te recibe el primer día, te
                presenta el grupo de tu edad y te mete en la práctica.
              </p>

              <ul className="promesas">
                <li><span className="num" aria-hidden="true">1</span><span>Primera clase gratis, sin compromiso y sin cuota inicial</span></li>
                <li><span className="num" aria-hidden="true">2</span><span>El primer mes jugás sin ficha médica; después la pedimos a tu médico de cabecera</span></li>
                <li><span className="num" aria-hidden="true">3</span><span>Cuota social accesible, con becas para chicos y chicas de la escuela</span></li>
                <li><span className="num" aria-hidden="true">4</span><span>Traé una fotocopia del DNI y, si sos mayor de edad, un teléfono de contacto</span></li>
              </ul>

              <p>
                Entrenamos en el predio del club, Buenos Aires.
                Si preferís escribirnos: WhatsApp al 11 4567-8900.
              </p>
              <p>
                <Link className="boton" href="/">Volver a la home</Link>
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
