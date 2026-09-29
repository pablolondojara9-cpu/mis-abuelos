import NosotrosHero from "@/components/nosotros/NosotrosHero";
import NosotrosValores from "@/components/nosotros/NosotrosValores";



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

                        <p className="font-title text-3xl font-medium italic leading-tight text-[var(--foreground)]">
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

            <NosotrosValores />
        </>
    );
}
