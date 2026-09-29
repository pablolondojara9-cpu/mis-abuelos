export default function NosotrosHero() {
	return (
        <>
            <section className="relative overflow-hidden">
                <div className="mx-auto flex min-h-[500px] max-w-7xl items-center px-6 py-20 md:px-12">

                {/* Contenido que estaba dentro del círculo azul */}
                <div className="max-w-md">

                    <p className="mb-4 text-sm font-menu font-semibold uppercase tracking-widest text-[var(--accent)]">
                        Nosotros
                    </p>

                    <h1 className="font-title text-5xl font-semibold leading-[1.05] text-[var(--foreground)]">
                        Creemos en historias
                        <br />
                        que siguen haciendo
                        <br />
                        <span className="font-body font-bold text-[var(--accent)]">vida.</span>
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