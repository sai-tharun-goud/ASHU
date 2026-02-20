import { Sparkles, Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #FFE5D0 0%, #FADADD 50%, #E6D9FF 100%)',
      }}
    >
      {/* Animated romantic background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span
            key={i}
            className="heart-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${18 + Math.random() * 12}s`,
              filter: Math.random() > 0.6 ? 'blur(2px)' : 'none',
              opacity: 0.25 + Math.random() * 0.35,
              fontSize: `${14 + Math.random() * 28}px`,
            }}
          >
            💗
          </span>
        ))}

        {Array.from({ length: 25 }).map((_, i) => (
          <span
            key={`sparkle-${i}`}
            className="sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating decorations */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="animate-float absolute top-20 left-10">
          <Sparkles className="text-yellow-300 w-8 h-8" />
        </div>
        <div className="animate-float-delayed absolute top-40 right-20">
          <Heart className="text-pink-300 w-10 h-10" />
        </div>
        <div className="animate-float absolute bottom-40 left-20">
          <Star className="text-purple-300 w-6 h-6" />
        </div>
        <div className="animate-float-delayed absolute top-60 right-40">
          <Sparkles className="text-pink-200 w-6 h-6" />
        </div>
        <div className="animate-float absolute bottom-60 right-10">
          <Heart className="text-purple-200 w-8 h-8" />
        </div>
        <div className="animate-float-delayed absolute top-1/3 left-1/4">
          <Star className="text-yellow-200 w-5 h-5" />
        </div>
      </div>

      {/* Main content */}
      <div className="text-center z-10 px-6 max-w-4xl">
        <h1 className="mb-6 leading-tight text-center">
          <span
            className="block text-6xl md:text-8xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent"
            style={{ fontFamily: '"Comic Sans MS", "Segoe Print", cursive' }}
          >
            Happiest Birthday
          </span>

          <span
            className="block mt-3 text-xl md:text-2xl text-gray-800 font-normal whitespace-nowrap"
            style={{ fontFamily: '"Brush Script MT", "Segoe Script", cursive' }}
          >
            To Someone Truly Irreplaceable
          </span>

          <span className="block mt-4 text-5xl text-center">🎂 💖</span>
        </h1>

        <p
          className="text-2xl md:text-3xl text-gray-700 mb-12"
          style={{
            fontFamily: '"Comic Sans MS", "Chalkboard SE", cursive',
            whiteSpace: 'pre',
          }}
        >
          Our sister     Our forever favorite chaos    ASHU PAPA 🤗🫂
        </p>

        <button
          onClick={() => navigate('/story')}
          style={{
            fontFamily: '"Segoe UI", "Poppins", system-ui, sans-serif',
          }}
          className="group bg-white/80 backdrop-blur-sm hover:bg-white text-gray-800 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Step into our Heart ✨ <span className="ml-2"></span>
        </button>
      </div>
    </section>
  );
}
