import ContactForm from "@/components/ContactForm";

const pillars = [
  {
    title: "Acompañamos",
    text: "Estamos cerca para escuchar, apoyar y caminar juntos.",
  },
  {
    title: "Servimos",
    text: "Llevamos ayuda y esperanza a quienes más lo necesitan.",
  },
  {
    title: "Construimos comunidad",
    text: "Creamos espacios de encuentro, fe y unión para fortalecer nuestros lazos.",
  },
];

const workAreas = [
  {
    title: "Acompañamiento",
    text: "[Texto provisional] Descripción breve de cómo se acompaña a los adultos mayores.",
  },
  {
    title: "Apoyo social",
    text: "[Texto provisional] Descripción breve de los servicios de apoyo que se ofrecen.",
  },
  {
    title: "Comunidad",
    text: "[Texto provisional] Descripción breve de los espacios de encuentro y comunidad.",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <section
          id="inicio"
          className="scroll-mt-24 mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 md:items-center md:px-6 md:py-16"
        >
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-muted">
              Corporación Apoyo Social
            </p>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Dignidad, fe y comunidad 
            </h1>
            <p className="mt-5 max-w-md text-lg leading-7 text-muted">
              Acompañamos a nuestros adultos mayores con amor, respeto y
              esperanza.
            </p>
            <a
              href="#nosotros"
              className="mt-8 inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Conoce más
            </a>
          </div>
          <div
            className="flex min-h-64 items-center justify-center rounded-3xl border border-dashed border-border bg-surface p-8 text-center text-sm text-muted md:min-h-80"
            role="img"
            aria-label="Espacio reservado para la fotografía principal"
          >
            [Imagen provisional]
            <br />
            Fotografía principal pendiente
          </div>
        </section>

        <section
          aria-label="Pilares"
          className="border-y border-border bg-surface"
        >
          <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
            {pillars.map((pillar) => (
              <article key={pillar.title} className="flex gap-4">
                <span
                  className="mt-1 h-10 w-10 shrink-0 rounded-full border border-border bg-background"
                  aria-hidden
                />
                <div>
                  <h2 className="text-xl font-semibold">{pillar.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {pillar.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="apoyo"
          className="scroll-mt-24 border-b border-border"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-semibold leading-tight">
                Tú también puedes hacer la diferencia.
              </h2>
              <p className="mt-3 text-muted leading-7">
                Cada gesto cuenta. Tu apoyo nos permite seguir acompañando y
                transformando vidas.
              </p>
              <p className="mt-3 text-sm text-muted">
                [Texto provisional] Pronto publicaremos las formas concretas de
                apoyar. Mientras tanto, puedes escribirnos en Contacto.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex w-fit rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white hover:bg-accent-hover"
            >
              Quiero apoyar
            </a>
          </div>
        </section>

        <section
          id="nosotros"
          className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:px-6"
        >
          <h2 className="text-3xl font-semibold">Nosotros</h2>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
            Mis Abuelos es una corporación de apoyo social dedicada a acompañar
            a adultos mayores. Trabajamos desde la dignidad, la fe y la
            comunidad.
          </p>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            [Texto provisional] Aquí irá la historia institucional, la misión y
            la visión cuando estén definidas.
          </p>
        </section>

        <section
          id="trabajo"
          className="scroll-mt-24 border-y border-border bg-surface"
        >
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold">Nuestro trabajo</h2>
            <p className="mt-4 max-w-3xl leading-7 text-muted">
              [Texto provisional] Resumen de las líneas de trabajo de la
              corporación.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {workAreas.map((area) => (
                <article
                  key={area.title}
                  className="rounded-xl border border-border bg-background p-5"
                >
                  <h3 className="text-lg font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{area.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="historias"
          className="scroll-mt-24 mx-auto max-w-6xl px-4 py-16 md:px-6"
        >
          <h2 className="text-3xl font-semibold">Historias</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">
            [Texto provisional] En esta sección se publicarán testimonios cuando
            estén disponibles. No se incluyen historias reales por ahora.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-xl border border-dashed border-border bg-surface p-6">
              <div className="mb-4 h-36 rounded-lg border border-border bg-background text-center text-sm leading-[9rem] text-muted">
                [Imagen provisional]
              </div>
              <h3 className="font-semibold">Historia 1</h3>
              <p className="mt-2 text-sm text-muted">
                [Texto provisional] Espacio para un testimonio.
              </p>
            </article>
            <article className="rounded-xl border border-dashed border-border bg-surface p-6">
              <div className="mb-4 h-36 rounded-lg border border-border bg-background text-center text-sm leading-[9rem] text-muted">
                [Imagen provisional]
              </div>
              <h3 className="font-semibold">Historia 2</h3>
              <p className="mt-2 text-sm text-muted">
                [Texto provisional] Espacio para un testimonio.
              </p>
            </article>
          </div>
        </section>

        <section
          id="contacto"
          className="scroll-mt-24 border-t border-border bg-surface"
        >
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-6">
            <div>
              <h2 className="text-3xl font-semibold">Contacto</h2>
              <p className="mt-4 leading-7 text-muted">
                Si quieres conocer más, colaborar o hacer una consulta, deja tu
                mensaje. Los datos de contacto institucionales se publicarán
                cuando estén confirmados.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted">
                <li>Dirección: [Texto provisional]</li>
                <li>Teléfono: [Texto provisional]</li>
                <li>Correo: [Texto provisional]</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </>
  );
}
