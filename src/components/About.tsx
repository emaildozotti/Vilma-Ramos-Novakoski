import FadeIn from './FadeIn'

export default function About() {
  return (
    <section id="sobre" className="relative bg-bg-warm section-padding-lg overflow-hidden grain-overlay">
      {/* Blur ornament */}
      <div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #B5727A08 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display text-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-14">
            A terapeuta que entendeu o cerebro pra{' '}
            <span className="text-accent">cuidar da alma</span>
          </h2>
        </FadeIn>

        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
          {/* Photo — order-2 on mobile (text first), order-1 on md */}
          <FadeIn delay={0.15} className="order-2 md:order-1 w-full md:w-5/12 flex-shrink-0">
            <div className="relative">
              <div className="relative aspect-[3/4] overflow-hidden rounded-tl-3xl rounded-br-3xl border border-primary/30 shadow-2xl">
                {/* Placeholder fallback */}
                <div className="absolute inset-0 bg-primary/10 flex flex-col items-center justify-center gap-3">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary/30">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                  <span className="text-primary/40 text-xs">Foto de Vilma</span>
                </div>
                <img
                  src="/images/about.jpg"
                  alt="Vilma Ramos, terapeuta"
                  className="w-full h-full object-cover relative z-10"
                  loading="lazy"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Text — order-1 on mobile (text first), order-2 on md */}
          <div className="order-1 md:order-2 w-full md:w-7/12">
            <FadeIn>
              <p className="font-sans text-text-main/85 text-base leading-relaxed mb-5">
                Durante anos, observei mulheres extraordinarias se apagando em silencio. Mulheres que sustentavam familias, carreiras, relacionamentos inteiros nas costas. E que, por dentro, sentiam que nao eram suficientes. Que algo nelas estava quebrado.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <p className="font-sans text-text-main/85 text-base leading-relaxed mb-5">
                Quando mergulhei na neurociencia, tudo mudou. Entendi que aquele sofrimento nao era destino, nem fraqueza, nem frescura. Era o <span className="font-semibold text-text-main/90">cerebro operando com registros emocionais que nunca tinham sido acessados</span>. A dor estava gravada ali, repetindo padroes automaticos que nenhuma conversa de superficie ia resolver.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="font-sans text-text-main/85 text-base leading-relaxed mb-8">
                Hoje aplico o Reprocessamento Emocional com base em neurociencia para ajudar mulheres a localizarem, entenderem e reescreverem esses registros. Cada mulher que chega ate mim carrega uma historia que precisa ser <span className="text-primary">lida</span> com precisao e acolhida com respeito.
              </p>
            </FadeIn>

            <FadeIn delay={0.25}>
              <blockquote className="border-l-2 border-primary pl-5 mb-8">
                <p className="font-sub italic text-text-main/70 text-lg leading-relaxed">
                  Agora que voce conhece minha historia, deixa eu te mostrar como funciona na pratica.
                </p>
              </blockquote>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-wrap gap-3">
                {['Neurociencia Aplicada', 'Reprocessamento Emocional', 'Universo Emocional Feminino'].map((cred) => (
                  <span
                    key={cred}
                    className="text-xs uppercase tracking-[0.12em] text-primary/70 border border-primary/20 rounded-sm px-3 py-1.5"
                  >
                    {cred}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
