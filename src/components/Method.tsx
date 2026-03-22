import { motion } from 'motion/react'
import FadeIn from './FadeIn'

const pilares = [
  {
    num: '01',
    titulo: 'Consciencia Emocional',
    texto:
      'Comeco ajudando voce a identificar o que realmente esta sentindo, sem julgamento. A maioria das mulheres que me procura funciona no automatico ha tanto tempo que perdeu contato com as proprias emocoes. Nao e porque voce nao sente. E porque seu cerebro aprendeu a silenciar o que doi pra voce continuar funcionando.',
  },
  {
    num: '02',
    titulo: 'Registro de Memoria',
    texto:
      'Cada dor que voce carrega hoje tem um ponto de origem. Um momento onde seu cerebro gravou uma resposta emocional que se tornou automatica. Identifico esses registros com precisao. Nao e sobre reviver o trauma. E sobre localizar onde ele ficou preso no seu sistema nervoso.',
  },
  {
    num: '03',
    titulo: 'Neuroplasticidade e Reprocessamento',
    texto:
      'Aqui esta o diferencial real do meu trabalho. A neurociencia prova que o cerebro pode mudar em qualquer idade. Neuroplasticidade nao e um conceito de livro: e a capacidade real do cerebro de reescrever respostas que voce carrega ha decadas.',
    extra:
      'Quando reprocessamos um registro emocional, a resposta automatica muda. A culpa diminui. A dependencia perde forca. A voz critica para de gritar. Nao e magica. E ciencia aplicada ao que doi de verdade.',
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

export default function Method() {
  return (
    <section id="metodo" className="relative bg-dark text-off-white section-padding-lg overflow-hidden">
      {/* Blur ornament */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7B9E8710 0%, transparent 70%)', filter: 'blur(90px)' }}
        aria-hidden="true"
      />

      <div className="container-ultra relative z-10">
        <FadeIn>
          <h2 className="font-display text-off-white text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
            Reprocessamento Emocional com{' '}
            <span className="text-accent">Neurociencia Aplicada</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="font-sans text-off-white/75 text-base md:text-lg leading-relaxed max-w-2xl mb-16">
            Eu nao trabalho com a superficie da dor. Acesso onde ela foi registrada no cerebro. Porque e la que o padrao se repete, independente do quanto voce tenta mudar por conta propria.
          </p>
        </FadeIn>

        <motion.div
          className="space-y-12 md:space-y-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {pilares.map((pilar) => (
            <motion.div key={pilar.num} variants={item} className="relative">
              {/* Numero decorativo grande */}
              <span
                className="absolute -top-4 -left-2 md:-left-6 font-sub text-accent/20 text-8xl md:text-9xl leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                {pilar.num}
              </span>

              <div className="relative z-10 pl-0 md:pl-16">
                <h3 className="font-display text-off-white text-xl md:text-2xl mb-4">
                  {pilar.titulo}
                </h3>
                <p className="font-sans text-off-white/80 text-base leading-relaxed max-w-2xl">
                  {pilar.texto}
                </p>
                {pilar.extra && (
                  <p className="font-sans text-off-white/65 text-base leading-relaxed max-w-2xl mt-4">
                    {pilar.extra}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Nao prometo */}
        <FadeIn className="mt-16">
          <div className="border-l-2 border-accent pl-6 max-w-2xl">
            <p className="font-sans text-off-white/70 text-sm leading-relaxed italic">
              Nao prometo cura instantanea. Nao trabalho com quem busca solucoes sem participacao ativa. Exijo comprometimento real, porque o tempo de cada cerebro e individual.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-12">
          <p className="font-sub italic text-accent text-lg md:text-xl">
            Esse metodo nasceu da minha propria observacao. Deixa eu te contar por que escolhi esse caminho.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
