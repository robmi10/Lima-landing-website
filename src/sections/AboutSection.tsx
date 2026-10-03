import Contours from '../components/Contours'
import { about, sections } from '../content/site'

function AboutSection() {
  return (
    <section id={sections.about} className="scroll-mt-24 bg-[#fafbff] px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-xl font-normal text-slate-900 sm:text-2xl">{about.eyebrow}</p>

        <div className="mt-16 grid items-center gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl tracking-tight text-slate-950 sm:text-4xl">{about.headline}</h2>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-600">{about.text}</p>

            {about.blocks.map((block) => (
              <div key={block.title} className="mt-8">
                <h3 className="text-sm font-semibold text-emerald-800">{block.title}</h3>
                <p className="mt-1 max-w-md text-sm leading-6 text-slate-600">{block.text}</p>
              </div>
            ))}
          </div>

          <Contours className="mx-auto h-72 w-72 text-slate-300/80 sm:h-96 sm:w-96" />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
