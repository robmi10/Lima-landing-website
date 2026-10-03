/**
 * The decorative topographic rings that sit behind the hero and the About
 * section. One blob path is redrawn at descending scales to make the contours.
 */
const BLOB =
  'M100 18c26 0 34 22 52 34s38 12 38 36-24 28-34 46-6 44-28 50-40-14-62-14-44 22-62 10-8-40-18-58S-8 92 4 74s36-6 54-20S74 18 100 18Z'

function Contours({ rings = 11, className = '' }: { rings?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden
      focusable="false"
      className={`pointer-events-none select-none ${className}`}
    >
      <g fill="none" stroke="currentColor" strokeWidth="0.45">
        {Array.from({ length: rings }, (_, i) => {
          const scale = 1 - i * (0.85 / rings)
          return (
            <path
              key={i}
              d={BLOB}
              transform={`translate(100 100) scale(${scale.toFixed(3)}) translate(-100 -100)`}
            />
          )
        })}
      </g>
    </svg>
  )
}

export default Contours
