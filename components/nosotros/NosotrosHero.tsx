export default function NosotrosHero() {
	return (
        <>
            <section className="relative overflow-hidden">
                <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 md:px-12">

                {/* Contenido que estaba dentro del círculo azul */}
                <div className="max-w-md">

                    <p className="mb-4 text-sm font-semibold uppercase tracking-widest">
                        Nosotros
                    </p>

                    <h1 className="font-serif text-5xl font-semibold leading-[1.05]">
                    Creemos en historias
                    <br />
                    que siguen haciendo
                    <br />
                    vida.
                    </h1>

                </div>


                {/* =================================================
                    IMAGEN / DECORACIÓN

                    Aquí iría la imagen que aparece en esta sección.
                    Puedes cambiar el src cuando tengas la imagen.
                    ================================================= */}

                {/*
                <img
                    src="/images/nosotros-hero.png"
                    alt=""
                    className="absolute ..."
                />
                */}

                </div>
            </section>
        </>
    );
}