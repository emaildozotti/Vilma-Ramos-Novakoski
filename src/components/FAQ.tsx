import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import FadeIn from './FadeIn'

const faqs = [
  {
    pergunta: 'Ja tentei terapia antes e nao funcionou',
    resposta:
      'Entendo. A maioria das abordagens trata o sintoma ou fica na conversa de superficie. O Reprocessamento Emocional acessa onde o padrao foi registrado no cerebro. E la que a mudanca real acontece. Nao e a mesma coisa.',
  },
  {
    pergunta: 'Funciona online?',
    resposta:
      'Sim. As sessoes por videochamada funcionam com a mesma profundidade do presencial. Atendo mulheres de todo o Brasil. O unico requisito e um espaco tranquilo e privado durante a sessao.',
  },
  {
    pergunta: 'Qual e o investimento?',
    resposta:
      'Entendo que e uma decisao financeira real. Entendo tambem que viver com exaustao emocional, dependencia e uma voz que nunca para tem um custo que voce ja esta pagando: nos relacionamentos, na saude, na paz. O valor do acompanhamento e definido na nossa conversa inicial, porque cada processo tem profundidade diferente.',
  },
  {
    pergunta: 'Quanto tempo leva?',
    resposta:
      'O processo costuma durar entre 4 e 8 meses, dependendo da complexidade dos registros que encontramos. Algumas mulheres percebem mudancas ja no primeiro mes. Resultado que se sustenta pede tempo, compromisso e participacao ativa.',
  },
  {
    pergunta: 'Tenho medo de mexer no passado',
    resposta:
      'Esse medo e legitimo. Reprocessamento Emocional nao e sobre reviver a dor. E sobre reorganizar como o cerebro registrou aquela experiencia. Voce nao precisa abrir feridas. Precisa permitir que seu cerebro reorganize o que ficou preso.',
  },
  {
    pergunta: 'E se eu nao estiver pronta?',
    resposta:
      'Se voce chegou ate aqui e leu tudo, uma parte de voce ja sabe que e hora. Voce nao precisa estar pronta. Precisa estar disposta a dar o primeiro passo. O resto acontece no processo.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggle = (i: number) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="relative bg-bg-warm section-padding overflow-hidden grain-overlay">
      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display text-heading text-3xl md:text-4xl leading-tight mb-14">
            Perguntas <span className="text-primary">frequentes</span>
          </h2>
        </FadeIn>

        <div className="max-w-3xl">
          {faqs.map((faq, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="border-b border-text-main/[0.08]">
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between py-6 text-left cursor-pointer group"
                >
                  <span className="font-sans font-medium text-text-main text-base md:text-lg pr-4 group-hover:text-primary transition-colors">
                    {faq.pergunta}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`flex-shrink-0 text-primary/50 transition-transform duration-300 ${open === i ? 'rotate-180' : ''}`}
                  >
                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-text-main/70 text-sm md:text-base leading-relaxed pb-6 pr-8">
                        {faq.resposta}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
