"use client";

import { useState } from "react";

type Estado = "esperando" | "enviado";

export default function FormularioInscripcion() {
  const [estado, setEstado] = useState<Estado>("esperando");

  function alEnviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formulario = e.currentTarget;
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }
    setEstado("enviado");
    formulario.querySelectorAll("input, select").forEach((el) => {
      (el as HTMLInputElement | HTMLSelectElement).disabled = true;
    });
  }

  return (
    <form className="inscripcion" onSubmit={alEnviar} noValidate>
      <h3>Te anotás en un minuto</h3>
      <p>Te escribimos dentro del día con el horario de tu categoría.</p>

      <label className="caja">
        <span>Nombre y apellido</span>
        <input type="text" name="nombre" autoComplete="name" placeholder="Ej: Julián Lagos" required />
      </label>

      <div className="pareja">
        <label className="caja">
          <span>Teléfono</span>
          <input type="tel" name="telefono" autoComplete="tel" placeholder="11 0000-0000" required />
        </label>
        <label className="caja">
          <span>Categoría</span>
          <select name="categoria" defaultValue="" required>
            <option value="" disabled>Elegir una</option>
            <option>Escuelita de rugby, del M5 al M13</option>
            <option>Juveniles de rugby, del M14 al M19</option>
            <option>Plantel superior</option>
            <option>Hockey, escuelita</option>
            <option>Hockey, damas</option>
            <option>Coach o colaborador</option>
          </select>
        </label>
      </div>

      <label className="caja">
        <span>¿Algo que debamos saber?</span>
        <input type="text" name="notas" placeholder="Amigos en el club, experiencia previa, edades…" />
      </label>

      <p className="aviso">
        {estado === "esperando"
          ? "Tus datos no salen del club. Formulario de demostración."
          : "Inscripción recibida."}
      </p>

      <button className="boton" type="submit" disabled={estado === "enviado"}>
        {estado === "esperando" ? "Dejar inscripción" : "Inscripción enviada"}
      </button>

      <div className={estado === "enviado" ? "confirmado visible" : "confirmado"} role="status">
        Listo, te anotamos. Alguien de la subcomisión te escribe esta semana
        con el horario de tu primera práctica.
      </div>
    </form>
  );
}
