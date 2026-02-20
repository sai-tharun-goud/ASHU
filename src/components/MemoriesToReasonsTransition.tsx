export default function MemoriesToReasonsTransition() {
  return (
    <div className="relative h-80 overflow-hidden z-10">
      {/* COLOR BLEND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgb(234,243,255) 0%, #E6D9FF 45%, #FADADD 100%)',
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={`heart-${i}`}
            className="transition-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 20}px`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.55,
            }}
          >
            💖
          </span>
        ))}

        {Array.from({ length: 12 }).map((_, i) => (
          <span
            key={`spark-${i}`}
            className="transition-float-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 140"
        preserveAspectRatio="none"
      >
        <path
          d="M0,70 C120,110 360,30 720,60 1080,90 1320,50 1440,40 L1440,140 L0,140 Z"
          fill="#FADADD"
        />
      </svg>
    </div>
  );
}
