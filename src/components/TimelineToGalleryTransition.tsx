export default function TimelineToGalleryTransition() {
  return (
    <div className="relative h-56 overflow-hidden">
      {/* COLOR BLEND LAYER */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #FFF4CC 0%, #FCE7B2 35%, #FFF1F5 70%, #EAF3FF 100%)',
        }}
      />

      {/* Floating golden hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={`heart-${i}`}
            className="transition-exit-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: 0.45,
            }}
          >
            💛
          </span>
        ))}
      </div>

      {/* Floating golden petals */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <span
            key={`petal-${i}`}
            className="transition-exit-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 14}px`,
              animationDelay: `${Math.random() * 6 + 2}s`,
              opacity: 0.35,
            }}
          >
            🌼
          </span>
        ))}
      </div>

      {/* Soft wave divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C120,100 360,20 720,50 1080,80 1320,40 1440,30 L1440,120 L0,120 Z"
          fill="#EAF3FF"
        />
      </svg>
    </div>
  );
}
