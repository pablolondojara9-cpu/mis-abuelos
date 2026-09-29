import NosotrosHero from "@/components/nosotros/NosotrosHero";

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

export default function NosotrosPage() {
	return (
        <>
            <NosotrosHero />

            <section className="relative overflow-hidden">

                {/* 
                IMAGEN DE FONDO / COLOR

                La imagen que funciona como fondo de esta sección
                puede colocarse aquí:

                <img
                    src="/images/nosotros-background.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                />

                Si la imagen debe quedar detrás del contenido,
                recuerda usar z-index.
                */}

                <div className="relative mx-auto flex min-h-[300px] max-w-7xl items-center justify-center px-6 py-16">

                    {/* Contenido dentro del círculo azul de la imagen */}

                    <div className="max-w-xs text-center">

                        <p className="font-serif text-3xl font-medium leading-tight">
                            Un presente
                            <br />
                            más humano,
                            <br />
                            para un futuro
                            <br />
                            más justo.
                        </p>

                    </div>

                </div>
            </section>

            <section className="relative overflow-hidden">

                <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">

                    {/* Título */}

                    <div className="mb-12">

                        <h2 className="font-serif text-4xl font-semibold">
                        Nuestros
                        <br />
                        valores
                        </h2>

                    </div>

                    <div className="flex flex-wrap justify-center">

                        {values.map((value, index) => (
                            <article
                                key={value.title}
                                className="
                                w-full
                                border-b
                                px-6
                                py-8
                                text-center

                                sm:w-1/2

                                lg:w-1/5
                                lg:border-b-0
                                lg:border-r
                                lg:last:border-r-0
                                "
                            >

                                {/* Nombre del valor */}

                                <h3 className="mb-4 font-serif text-xl font-semibold">
                                    {value.title}
                                </h3>


                                {/* Descripción */}

                                <p className="text-sm leading-relaxed">
                                    {value.description}
                                </p>

                            </article>
                        ))}

                    </div>

                </div>
            </section>
        </>
    );
}
