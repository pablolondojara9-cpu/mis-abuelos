"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <p className="rounded-lg border border-border bg-surface p-4 text-sm leading-6">
        Gracias por tu interés. Este formulario todavía no envía mensajes. [Texto
        provisional]
      </p>
    );
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <label className="grid gap-1 text-sm">
        Nombre
        <input
          name="nombre"
          type="text"
          required
          className="rounded-md border border-border bg-surface px-3 py-2 text-base"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Correo
        <input
          name="correo"
          type="email"
          required
          className="rounded-md border border-border bg-surface px-3 py-2 text-base"
        />
      </label>
      <label className="grid gap-1 text-sm">
        Mensaje
        <textarea
          name="mensaje"
          required
          rows={4}
          className="rounded-md border border-border bg-surface px-3 py-2 text-base"
        />
      </label>
      <button
        type="submit"
        className="w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        Enviar mensaje
      </button>
      <p className="text-xs text-muted">
        El envío es temporal: aún no hay un servicio de correo conectado.
      </p>
    </form>
  );
}
