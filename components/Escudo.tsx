// Escudo de cuatro cuadrantes, igual al del club: verde y amarillo a mitades.
// Cuando tengamos el archivo real del escudo, este SVG se reemplaza por <img>.

export default function Escudo() {
  return (
    <svg className="escudo" viewBox="0 0 32 36" width="30" height="34" aria-hidden="true">
      <clipPath id="forma-escudo">
        <path d="M2 2h28v20L16 34 2 22Z" />
      </clipPath>
      <g clipPath="url(#forma-escudo)">
        <rect x="2" y="2" width="14" height="16" fill="#2e5b3a" />
        <rect x="16" y="2" width="14" height="16" fill="#f5cf0a" />
        <rect x="2" y="18" width="14" height="18" fill="#f5cf0a" />
        <rect x="16" y="18" width="14" height="18" fill="#2e5b3a" />
      </g>
      <path d="M2 2h28v20L16 34 2 22Z" fill="none" stroke="#14301f" strokeWidth="2" />
    </svg>
  );
}
