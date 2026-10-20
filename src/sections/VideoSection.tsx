import SectionHeading from '../components/SectionHeading'
import { explainer } from '../content/site'

function VideoSection() {
  return (
    <section className="px-6 pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow={explainer.eyebrow} headline={explainer.headline} />

        <div className="mt-12 overflow-hidden rounded-2xl bg-slate-950 shadow-[0_30px_70px_-35px_rgba(15,23,42,0.5)]">
          {/* #t=0.1 makes browsers paint the first frame instead of a black box. */}
          <video
            src={`${explainer.src}#t=0.1`}
            aria-label={explainer.label}
            controls
            playsInline
            preload="metadata"
            className="aspect-video w-full"
          />
        </div>
      </div>
    </section>
  )
}

export default VideoSection
