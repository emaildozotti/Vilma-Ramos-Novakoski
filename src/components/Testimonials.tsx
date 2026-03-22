import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const depoimentos = [
  {
    nome: 'Ana P., empresaria, Sao Paulo',
    texto:
      'Passei anos saindo de um relacionamento para o outro sem entender o porque. Com a Vilma, fui a raiz disso. Parei de precisar de validacao externa para me sentir inteira.',
  },
  {
    nome: 'Mariana L., advogada, Campinas',
    texto:
      'Tentei terapia duas vezes antes. Sempre ficava na superficie, falando dos sintomas. Aqui foi diferente desde o primeiro mes: entendi de onde vinha minha ansiedade de verdade.',
  },
  {
    nome: 'Cristina R., professora, Taubate',
    texto:
      'Minha culpa como mae estava me paralisando profissionalmente. Descobri que esses dois sentimentos tinham a mesma raiz. Hoje consigo estar presente na maternidade sem abrir mao de mim.',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? depoimentos.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === depoimentos.length - 1 ? 0 : c + 1))

  return (
    <section id="depoimentos" className="relative bg-dark text-off-white section-padding overflow-hidden">
      <h2 className="sr-only">Depoimentos</h2>
      {/* Blur ornament */}
      <div
        className="absolute top-1/3 right-0 w-[400px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B9E8710 0%, transparent 70%)', filter: 'blur(80px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <div className="relative max-w-3xl mx-auto text-center">
            {/* Aspa decorativa */}
            <span
              className="font-display text-[120px] leading-none text-accent/20 absolute -top-10 left-1/2 -translate-x-1/2 select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Carousel */}
            <div className="relative min-h-[280px] md:min-h-[220px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 flex flex-col items-center justify-center px-4"
                >
                  <p className="font-sub text-off-white/90 text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl">
                    {depoimentos[current].texto}
                  </p>
                  <p className="font-sans text-accent text-sm tracking-wide">
                    — {depoimentos[current].nome}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-6 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/60 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Depoimento anterior"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {depoimentos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-colors cursor-pointer ${
                      i === current ? 'bg-accent' : 'bg-off-white/20'
                    }`}
                    aria-label={`Depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-off-white/20 flex items-center justify-center text-off-white/60 hover:border-accent hover:text-accent transition-colors cursor-pointer"
                aria-label="Proximo depoimento"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
