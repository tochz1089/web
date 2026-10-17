// Escudo real del club (public/escudo.png).
// El favicon vive en app/icon.png con el mismo archivo.

export default function Escudo() {
  return (
    <img
      className="escudo"
      src="/escudo.png"
      alt=""
      width={30}
      height={34}
      aria-hidden="true"
    />
  );
}
