import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const dores = [
  {
    num: '01',
    texto: 'Voce cuida de todo mundo e no final do dia sente um vazio que ninguem ve. Um cansaco que dormir nao resolve.',
  },
  {
    num: '02',
    texto: 'Aceita situacoes que machucam porque o medo de ficar sozinha e maior do que a dor de continuar.',
  },
  {
    num: '03',
    texto: 'Conquista, entrega, se dedica. Mas por dentro, uma voz repete que nada disso e suficiente. Que a qualquer momento vao descobrir que voce e uma fraude.',
  },
  {
    num: '04',
    texto: 'Carrega uma culpa que nao passa. Como mae, como filha, como mulher. Escolher algo pra si parece roubar de alguem.',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

export default function PainPoints() {
  return (
    <section id="dores" className="relative bg-dark text-off-white section-padding overflow-hidden">
      <h2 className="sr-only">Identificacao de dores</h2>
      {/* Blur ornament */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B9E8712 0%, transparent 70%)', filter: 'blur(100px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <p className="font-sub italic text-off-white/70 text-lg md:text-xl mb-12 max-w-2xl">
            Voce se reconhece em alguma dessas situacoes?
          </p>
        </FadeIn>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {dores.map((dor) => (
            <motion.div
              key={dor.num}
              variants={item}
              className="relative p-10 rounded-sm bg-white/[0.03] border border-off-white/[0.06] hover:border-accent/30 transition-colors"
            >
              <span className="absolute top-4 right-6 font-sub text-accent/30 text-6xl leading-none select-none" aria-hidden="true">
                {dor.num}
              </span>
              <p className="font-sans text-off-white/90 text-base leading-relaxed relative z-10">
                {dor.texto}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <FadeIn className="mt-14">
          <p className="font-sub text-accent text-xl md:text-2xl italic text-center max-w-xl mx-auto">
            Essa exaustao tem <span className="font-semibold">origem</span>. E ela nao esta onde voce procurou ate agora.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
