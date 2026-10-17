import { encuentros, horarios } from "@/lib/datos";

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
              <div><b>{encuentros.length}</b> fechas próximas en el fixture</div>
              <div><b>3</b> líneas de colectivo te acercan al club</div>
              <div><b>0</b> pesos la entrada si sos socio</div>
            </div>
          </div>
        </div>
      </section>

      {/* Fixture */}
      <section className="seccion">
        <div className="ancho">
          <div className="seccion__intro">
            <h2>Fixture del club</h2>
            <p>Cada fecha de local hay asado gracias a la comisión. Los horarios de práctica son referentes: si dudás, preguntá en la secretaría.</p>
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
