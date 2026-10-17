import { fixture, horarios } from "@/lib/datos";

export const metadata = { title: "Cartelera" };

export default function Cartelera() {
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
              Cartelera
              <span className="segunda">lo que viene</span>
            </h1>
            <div className="apertura__numeros">
              <div><b>1</b> club, dos deportes</div>
              <div><b>—</b> fechas por confirmar</div>
              <div><b>0</b> pesos la entrada si sos socio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixture y horarios */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Fixture y horarios</h2>
            <p>
              Cuando sale la programación del torneo, cargamos acá los partidos
              con rivales, días y horarios. Los entrenamientos se confirman al
              inicio de cada temporada.
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
            {horarios.map((h) => (
              <div className="horario" key={h.titulo}>
                <b>{h.titulo}</b>
                <span>{h.detalle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
