import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const passos = [
  {
    num: '1',
    titulo: 'Conversa inicial',
    texto:
      'Na nossa primeira conversa, escuto sua historia sem pressa. Entendo o que voce sente, o que ja tentou, o que funcionou e o que nao funcionou. Fazemos juntas uma primeira leitura do que pode estar na raiz. Sem compromisso, sem pressao.',
  },
  {
    num: '2',
    titulo: 'Sessoes de Reprocessamento',
    texto:
      'Nas sessoes seguintes, acessamos os registros emocionais que sustentam seus padroes. Identifico os pontos de origem e trabalhamos o reprocessamento com tecnica e acolhimento. Voce comeca a perceber mudancas concretas na forma como reage, sente e se posiciona.',
  },
  {
    num: '3',
    titulo: 'Autonomia emocional',
    texto:
      'Com os registros reprocessados, voce reconstroi sua relacao consigo mesma. A voz critica perde forca. A culpa diminui. As escolhas passam a ser suas de verdade. Voce nao precisa mais de aprovacao externa pra se sentir inteira.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-bg-light section-padding overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom right, #FAF7F2, #F2EBE0)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display text-heading text-3xl md:text-4xl lg:text-5xl leading-tight mb-16">
            Seu processo comeca <span className="text-primary">aqui</span>
          </h2>
        </FadeIn>

        {/* 3 Steps — timeline vertical */}
        <motion.div
          className="relative"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Vertical line */}
          <div className="absolute top-0 bottom-0 left-6 md:left-8 w-px bg-primary/15" aria-hidden="true" />

          <div className="space-y-12 md:space-y-16">
            {passos.map((passo) => (
              <motion.div key={passo.num} variants={item} className="relative flex gap-6 md:gap-10">
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center">
                  <span className="font-display text-off-white text-lg md:text-xl">{passo.num}</span>
                </div>

                <div className="pt-1 md:pt-3">
                  <h3 className="font-display text-heading text-xl md:text-2xl mb-3">
                    {passo.titulo}
                  </h3>
                  <p className="font-sans text-text-main/80 text-base leading-relaxed max-w-2xl">
                    {passo.texto}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Remove ansiedade */}
        <FadeIn className="mt-14">
          <div className="max-w-2xl ml-0 md:ml-[6.5rem]">
            <p className="font-sans text-text-main/65 text-sm leading-relaxed italic">
              Se voce esta insegura sobre dar esse passo, saiba que na conversa inicial nao existe compromisso. E uma escuta. Voce decide depois se quer continuar.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
