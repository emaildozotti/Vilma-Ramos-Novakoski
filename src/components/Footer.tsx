import FadeIn from './FadeIn'

const WA_LINK = 'https://wa.me/5512991611893?text=Oi%20Vilma%2C%20vim%20pelo%20site.%20Gostaria%20de%20agendar%20uma%20conversa%20inicial%20para%20entender%20se%20o%20Reprocessamento%20Emocional%20faz%20sentido%20para%20mim.'

export default function Footer() {
  return (
    <footer className="relative bg-dark text-off-white py-24 md:py-32 overflow-hidden">
      {/* Blur ornament */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B9E870D 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10 flex flex-col items-center text-center">
        <FadeIn>
          <h2 className="font-display text-off-white text-3xl md:text-4xl lg:text-5xl leading-tight max-w-2xl mb-6">
            Seus registros nao precisam ser seu destino
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-off-white/70 text-base md:text-lg max-w-lg mb-4 leading-relaxed">
            Voce nao precisa ser forte o tempo todo. Nao precisa ter certeza de nada. Nao precisa estar pronta.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <p className="font-sub italic text-off-white/60 text-lg md:text-xl max-w-lg mb-12">
            Precisa apenas de uma conversa honesta com alguem que entende o que voce sente e sabe como ajudar.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-shimmer bg-primary text-off-white font-sans font-medium text-sm uppercase tracking-[0.12em] rounded-sm hover:bg-primary-dark transition-all"
          >
            Agendar minha conversa com Vilma
          </a>
        </FadeIn>

        {/* Signature */}
        <FadeIn delay={0.3} className="mt-20">
          <span className="font-sub text-2xl italic text-off-white/30">Vilma Ramos</span>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-4">
          <p className="text-off-white/20 text-xs">
            Reprocessamento Emocional &middot; Neurociencia Aplicada &middot; Universo Emocional Feminino
          </p>
        </FadeIn>
      </div>
    </footer>
  )
}
