export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <p className="font-semibold uppercase tracking-wide">Mis Abuelos</p>
          <p className="text-sm text-muted">Corporación Apoyo Social</p>
          <p className="mt-2 text-sm text-muted">Dignidad · Fe · Comunidad</p>
        </div>
        <nav aria-label="Pie de página">
          <ul className="flex flex-col gap-2 text-sm md:items-end">
            <li>
              <a href="#inicio" className="hover:underline">
                Inicio
              </a>
            </li>
            <li>
              <a href="#nosotros" className="hover:underline">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#trabajo" className="hover:underline">
                Nuestro trabajo
              </a>
            </li>
            <li>
              <a href="#historias" className="hover:underline">
                Historias
              </a>
            </li>
            <li>
              <a href="#contacto" className="hover:underline">
                Contacto
              </a>
            </li>
            <li>
              <a href="#apoyo" className="hover:underline">
                Quiero apoyar
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-border px-4 py-4 text-center text-xs text-muted">
        Sitio en construcción. Contenido institucional pendiente de completar.
      </div>
    </footer>
  );
}
