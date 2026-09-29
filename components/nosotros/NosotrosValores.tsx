const values = [
    {
      title: "Respeto",
      description:
        "Valoramos su historia, sus decisiones y su lugar en la comunidad.",
    },
    {
      title: "Amor",
      description:
        "Actuamos con empatía y calidez en cada encuentro.",
    },
    {
      title: "Fe",
      description:
        "Creemos en las personas y en las segundas oportunidades.",
    },
    {
      title: "Solidaridad",
      description:
        "Caminamos juntos para que nadie envejezca solo.",
    },
    {
      title: "Comunidad",
      description:
        "Construimos espacios de encuentro, apoyo y pertenencia.",
    },
];

export default function NosotrosValores() {
	return (
        <>
            <section className="max-w-5xl mx-auto p-6 my-12">

                {/* Título de la sección */}
                <h2 className="font-title font-bold text-3xl text-center text-[var(--foreground)] mb-12">
                    Nuestros{" "}

                    <span className="relative inline-block font-body font-bold text-[var(--accent)]">
                        Valores

                        {/* Línea debajo de "Valores" */}
                        <span className="absolute left-0 -bottom-3 h-[3px] w-8 rounded-full bg-[var(--accent)]" />
                    </span>
                </h2>


                {/* Tarjetas */}
                <div className="flex flex-wrap justify-center gap-6">

                    {values.map((item, index) => (

                        <div
                            key={index}
                            className="
                                w-full
                                md:w-[calc(50%-12px)]
                                lg:w-[calc(33.333%-16px)]
                                bg-[var(--surface)]
                                border
                                border-[var(--border)]
                                p-6
                                rounded-3xl
                                text-center
                                shadow-sm
                            "
                        >

                            {/* Nombre */}
                            <h3 className="font-title font-semibold text-xl text-[var(--foreground)] mb-2">
                                {item.title}
                            </h3>

                            {/* Descripción */}
                            <p className="font-body font-normal text-sm md:text-base leading-relaxed text-[var(--muted)]">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>

            </section>
        </>
    );
}