"use client";

import { useState } from "react";

const navItems = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "#trabajo", label: "Nuestro trabajo" },
  { href: "#historias", label: "Historias" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <a href="#inicio" className="flex items-center gap-3" onClick={closeMenu}>
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-sm font-semibold"
            aria-hidden
          >
            MA
          </span>
          <span className="leading-tight">
            <span className="block text-base font-semibold tracking-wide uppercase">
              Mis Abuelos
            </span>
            <span className="block text-xs text-muted uppercase tracking-wide">
              Corporación Apoyo Social
            </span>
            <span className="hidden text-[11px] text-muted sm:block">
              Dignidad · Fe · Comunidad
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground hover:underline underline-offset-4"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#apoyo"
            className="rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-accent-hover"
          >
            Quiero apoyar
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-border px-3 py-2 text-sm font-medium lg:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Cerrar" : "Menú"}
        </button>
      </div>

      {open ? (
        <nav
          id="menu-movil"
          className="border-t border-border bg-background px-4 py-3 lg:hidden"
          aria-label="Móvil"
        >
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-1 text-base font-medium"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#apoyo"
                className="inline-flex rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
                onClick={closeMenu}
              >
                Quiero apoyar
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
