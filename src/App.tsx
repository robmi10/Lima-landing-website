import limaLogo from './assets/lima-logo.svg'
import overalPreview from './assets/overal.png'

const navItems = [
  { label: 'Screening', href: '#screening' },
  { label: 'Säkerhet', href: '#security' },
  { label: 'Compliance', href: '#compliance' },
  { label: 'Proctoring & antifusk', href: '#process' },
]

const featureCards = [
  {
    id: 'screening',
    step: '01',
    eyebrow: 'Testmiljö',
    title: 'Proctoring & anti-fusk som skapar tillförlitliga resultat',
    description:
      'För att Readiness ska vara ett beslutsunderlag ni kan lita på använder Lima ett lättviktigt proctoring-lager och tydliga anti-fusk-signaler. Kamera används endast med kandidatens godkännande och syftar till att säkerställa att genomförandet sker på ett korrekt och jämförbart sätt.',
    bullets: [
      'Kamera (opt-in): Bekräftar rätt person genomför testet.',
      'Beteendesignaler: Mäter copy/paste och otillåten hjälp.',
      'Flikbyte & fokus: Loggar flikbyten och fokusförlust.',
      'Rapportering: Avvikelser flaggas i kandidatrapporten.',
    ],
    variant: 'score',
  },
  {
    id: 'security',
    step: '02',
    eyebrow: 'Rapportering',
    title: 'Tydlig rapportering som går att agera på',
    description:
      'Efter varje screening levererar Lima en strukturerad kandidatrapport som gör det enkelt för HR och hiring managers att fatta beslut snabbt och konsekvent. Ni får både en helhetsbild och ett granulariserat underlag per kompetensområde.',
    bullets: [
      'Helhet: Readiness-score för rollen som helhet.',
      'Per skill: Delresultat visar styrkor och gap.',
      'Per frågetyp: Visar tänkande och prioriteringar.',
      'Intervjuunderlag: Styrkor, riskflaggor och följdfrågor.',
    ],
    variant: 'profile',
  },
  {
    id: 'compliance',
    step: '03',
    eyebrow: 'Customization',
    title: 'Custom tester som speglar er tjänst - innan ni skickar ut',
    description:
      'Innan ett test går ut till kandidater får rekryteraren en tydlig överblick över innehållet och kan anpassa det efter den specifika rollen och er verklighet. Det gör att varje screening blir relevant, konsekvent och lätt att motivera internt.',
    bullets: [
      'Helhet: Readiness-score för rollen som helhet.',
      'Per skill: Delresultat visar styrkor och gap.',
      'Per frågetyp: Visar tänkande och prioriteringar.',
      'Intervjuunderlag: Styrkor, riskflaggor och följdfrågor.',
    ],
    variant: 'table',
  },
]

const processSteps = [
  {
    title: 'Kravprofil',
    text: 'Definiera kompetenser och poängsättning innan ni öppnar processen.',
  },
  {
    title: 'Testgenomförande',
    text: 'Kandidaten genomför screening med rättvisa och tydliga förutsättningar.',
  },
  {
    title: 'Fusk- / riskvarning',
    text: 'Avvikelser samlas upp löpande så att teamet kan göra en trygg bedömning.',
  },
  {
    title: 'Beslutsstöd',
    text: 'Alla resultat, kommentarer och rekommendationer finns samlade på ett ställe.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.96),rgba(245,247,251,0.92),rgba(238,241,248,0.88))] text-slate-900">
      <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-2 text-sm font-semibold text-slate-900">
            <img src={limaLogo} alt="Lima" className="h-6 w-auto" />
            <span className="text-[1.05rem] font-semibold tracking-[0.18em]">LiMA</span>
          </a>

          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-slate-950">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://backoffice.limatest.se/"
              target="_blank"
              rel="noreferrer"
              className="hidden text-sm text-slate-600 transition hover:text-slate-950 sm:inline"
            >
              Logga in
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              Boka demo
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="px-6 pb-18 pt-12 lg:px-8 lg:pt-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-3xl text-center">

              <h1 className="mt-6 text-4xl tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Mät kompetens.
                <span className="text-slate-500"> Anställ bättre.</span>
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Få bättre screening med säkra assessments som ger mätbara resultat, tydliga rekommendationer och en
                smidigare väg från första urval till beslut.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300"
                >
                  Kontakta oss
                </a>
              </div>
            </div>

            <div className="mt-14">
              <img
                src={overalPreview}
                alt="Lima screening dashboard"
                className="w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-8 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-medium text-slate-500">Få bättre screening med säkra assessments som ger mätbara resultat.</p>
          </div>
        </section>

        <section className="px-6 pb-10 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-slate-400">
            <span>Objektiv</span>
            <span>Spårbarhet</span>
            <span>Datasäkerhet</span>
            <span>Smidigt beslutsstöd</span>
          </div>
        </section>

        <section className="px-6 py-10 lg:px-8">
          <div className="mx-auto max-w-6xl space-y-8">
            {featureCards.map((feature) => (
              <article
                id={feature.id}
                key={feature.id}
                className="scroll-mt-28 grid gap-8 rounded-3xl border border-white/70 bg-white/75 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur md:grid-cols-[1fr_0.95fr] md:p-8"
              >
                <div className="flex flex-col justify-between">
                  <div>
                    <div className="inline-flex items-center gap-3 rounded-xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      <span>{feature.step}</span>
                      <span>{feature.eyebrow}</span>
                    </div>
                    <h2 className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                      {feature.title}
                    </h2>
                    <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">{feature.description}</p>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {feature.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-slate-600">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-950" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-inner shadow-white/70">
                  {feature.variant === 'score' && (
                    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">Assessmentoversikt</p>
                          <p className="text-xs text-slate-500">Frontend Developer</p>
                        </div>
                        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Rekommenderad
                        </span>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {[
                          ['Kognitiv formaga', 88],
                          ['Arbetsminne', 81],
                          ['Kommunikation', 76],
                          ['Problemlosning', 92],
                        ].map(([label, value]) => (
                          <div key={label} className="rounded-xl bg-slate-50 p-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-slate-500">{label}</span>
                              <span className="font-semibold text-slate-900">{value}%</span>
                            </div>
                            <div className="mt-3 h-2 rounded-full bg-white">
                              <div className="h-2 rounded-full bg-slate-900" style={{ width: `${value}%` }} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {feature.variant === 'profile' && (
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="rounded-xl bg-slate-50 p-4 sm:w-44">
                          <div className="mx-auto h-20 w-20 rounded-full bg-[radial-gradient(circle_at_30%_30%,#fde68a,#f97316_60%,#1e293b)]" />
                          <p className="mt-4 text-center text-sm font-semibold text-slate-900">Kandidatprofil</p>
                          <p className="mt-1 text-center text-xs text-slate-500">Verifierad identitet</p>
                        </div>
                        <div className="flex-1 space-y-3">
                          {[
                            ['Webbkamera', 'Aktiv'],
                            ['Flikbyte', '0 varningar'],
                            ['Ansiktsmatchning', 'Godkänd'],
                            ['Skärmdelning', 'Aktiverad'],
                          ].map(([label, value]) => (
                            <div key={label} className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
                              <span className="text-sm text-slate-500">{label}</span>
                              <span className="text-sm font-semibold text-slate-900">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {feature.variant === 'table' && (
                    <div className="rounded-xl border border-slate-200 bg-white p-4">
                      <div className="overflow-hidden rounded-xl border border-slate-200">
                        <div className="grid grid-cols-[1.2fr_0.8fr_0.8fr] bg-slate-100 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                          <span>Kandidat</span>
                          <span>Status</span>
                          <span>Kommentar</span>
                        </div>
                        {[
                          ['Anna Svensson', 'Klar', 'Hög matchning'],
                          ['Mikael Berg', 'Under granskning', 'Riskflagga'],
                          ['Sara Holm', 'Klar', 'Stark problemlösning'],
                          ['Jonas Nilsson', 'Planerad', 'Väntar på test'],
                        ].map(([candidate, status, note]) => (
                          <div
                            key={candidate}
                            className="grid grid-cols-[1.2fr_0.8fr_0.8fr] border-t border-slate-100 px-4 py-3 text-sm text-slate-600"
                          >
                            <span className="font-medium text-slate-900">{candidate}</span>
                            <span>{status}</span>
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="scroll-mt-28 px-6 py-20 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">Proctoring & antifusk</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              En trygg process från kravprofil till beslut
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Gör hela processen transparent och konsekvent. Plattformen samlar riskindikatorer, testresultat och
              rekommendationer så att teamet kan fatta bättre beslut snabbare.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-10 lg:grid-cols-[0.9fr_1.2fr_0.9fr]">
            <div className="space-y-6">
              {processSteps.slice(0, 2).map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/70 bg-white/80 p-5 text-left shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="relative flex min-h-105 items-center justify-center">
              <div className="absolute h-85 w-85 rounded-full border border-rose-200" />
              <div className="absolute h-65 w-65 rounded-full border border-dashed border-rose-100" />
              <div className="absolute left-8 top-1/2 h-10 w-10 -translate-y-1/2 rounded-xl border border-slate-200 bg-white shadow-sm" />
              <div className="absolute right-8 top-1/2 h-10 w-10 -translate-y-1/2 rounded-xl border border-slate-200 bg-white shadow-sm" />
              <div className="absolute top-10 h-10 w-10 rounded-xl border border-slate-200 bg-white shadow-sm" />
              <div className="absolute bottom-10 h-10 w-10 rounded-xl border border-slate-200 bg-white shadow-sm" />
              <div className="grid grid-cols-2 gap-3 rounded-full border border-white/80 bg-white/90 p-6 shadow-[0_25px_60px_-25px_rgba(15,23,42,0.35)]">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="h-7 w-7 rounded-full bg-slate-300" />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {processSteps.slice(2).map((step, index) => (
                <div key={step.title} className="rounded-2xl border border-white/70 bg-white/80 p-5 text-left shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">0{index + 3}</p>
                  <h3 className="mt-3 text-lg font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-20 pt-6 lg:px-8">
          <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200 bg-slate-950 px-8 py-10 text-white shadow-[0_35px_80px_-40px_rgba(15,23,42,0.8)] sm:px-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Boka demo</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Bygg en rekryteringsprocess som känns både snabbare och säkrare.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                  Vi hjälper dig sätta upp en screeningupplevelse som speglar er kravprofil och ger tydliga, jämförbara
                  resultat.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:items-start md:items-end">
                <a
                  href="mailto:info@limatest.se"
                  className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5"
                >
                  info@limatest.se
                </a>
                <p className="text-sm text-slate-400">Svar inom 1 arbetsdag</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="px-6 pb-12 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl border border-white/70 bg-white/70 px-8 py-8 text-sm text-slate-500 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.7fr_0.7fr_0.7fr]">
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-slate-900">LiMA</p>
              <p className="mt-4 max-w-xs leading-6">
                Test, trygghet och beslutsstöd för kompetensbaserad screening.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Kontakt</p>
              <p className="mt-4">info@limatest.se</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900">Produkt</p>
              <ul className="mt-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition hover:text-slate-900">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
