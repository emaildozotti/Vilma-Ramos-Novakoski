import FadeIn from './FadeIn'

export default function VideoSection() {
  return (
    <section id="video" className="relative bg-bg-light section-padding overflow-hidden">
      <h2 className="sr-only">Video de apresentacao</h2>
      {/* Blur ornament */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B5727A10 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10 flex flex-col items-center">
        <FadeIn>
          <div className="max-w-xl text-center mb-12">
            <p className="font-sans text-text-main/80 text-base md:text-lg leading-relaxed">
              Eu passei anos observando mulheres brilhantes se apagando por dentro.
            </p>
            <p className="font-sans text-text-main/80 text-base md:text-lg leading-relaxed mt-2">
              Mulheres que carregavam tudo, cuidavam de todos e nao tinham permissao pra sentir.
            </p>
            <p className="font-sans text-text-main/80 text-base md:text-lg leading-relaxed mt-2">
              Quando estudei neurociencia, entendi: nao era fraqueza. Era o cerebro operando com registros que ninguem tinha acessado.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {/* 9:16 vertical container */}
          <div
            className="relative w-full rounded-sm overflow-hidden ring-1 ring-primary shadow-2xl"
            style={{ maxWidth: '300px', aspectRatio: '9/16' }}
          >
            <iframe
              src="https://www.youtube.com/embed/q84iC_f-YpE"
              title="Video de Vilma Ramos"
              className="w-full h-full"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.30} className="mt-10">
          <p className="font-sub italic text-text-main/70 text-lg md:text-xl text-center max-w-lg">
            O que descobri nesse caminho e exatamente o que compartilho com voce agora.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
