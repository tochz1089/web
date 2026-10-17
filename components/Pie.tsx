import Link from "next/link";

export default function Pie() {
  return (
    <footer className="ultimo">
      <div className="ancho">
        <div className="ultimo__cuadros">
          <div>
            <h4>Las Cañas Rugby Club</h4>
            <p>
              Rugby y hockey de pueblo. Formamos jugadores para la vida,
              no solo para el sábado.
            </p>
          </div>
          <div>
            <h4>Secciones</h4>
            <ul>
              <li><a href="/#club">El club</a></li>
              <li><a href="/#fixture">Cartelera</a></li>
              <li><a href="/#ramas">Edades y hockey</a></li>
              <li><Link href="/inscripciones">Inscripciones</Link></li>
            </ul>
          </div>
          <div>
            <h4>Horarios</h4>
            <ul>
              <li>Escuela, lunes y miércoles, 17:30</li>
              <li>Superior, lunes, miércoles y viernes, 19:00</li>
              <li>Hockey, martes y jueves, 19:00</li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href="tel:+541145678900">11 4567-8900</a></li>
              <li><a href="mailto:club@lascanasrugby.com.ar">club@lascanasrugby.com.ar</a></li>
              <li>Predio del club, Buenos Aires</li>
            </ul>
          </div>
        </div>
        <div className="ultimo__legal">
          <p style={{ margin: 0 }}>© 2026 Las Cañas Rugby Club, sitio de demostración.</p>
          <details>
            <summary>Créditos y fotos</summary>
            <p style={{ margin: ".6rem 0 0" }}>
              Fotos del club: Gui Sanabria (PH). Las fotos del plantel y de la
              galería que aún no son del club son imágenes ilustrativas de
              Wikimedia Commons, con licencias libres; se van a reemplazar
              por material propio a medida que llegue.
            </p>
          </details>
        </div>
      </div>
    </footer>
  );
}
