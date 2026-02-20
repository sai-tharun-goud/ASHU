export default function LetterToTimelineTransition() {
  return (
    <div className="relative h-56 overflow-hidden">
      {/* COLOR BLEND LAYER */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, #FFE5D0 0%, #FADADD 40%, #E6D9FF 100%)',
        }}
      />

      {/* Floating exit hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="transition-exit-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${14 + Math.random() * 16}px`,
              animationDelay: `${Math.random() * 6}s`,
              opacity: 0.35,
            }}
          >
            💗
          </span>
        ))}
      </div>

      {/* Soft wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 C120,100 360,20 720,50 1080,80 1320,40 1440,30 L1440,120 L0,120 Z"
          fill="#E6D9FF"
        />
      </svg>
    </div>
  );
}
