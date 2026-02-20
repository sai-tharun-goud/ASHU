import { Heart, Sparkles, Sun, Shield, Zap, Star } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const reasons = [
  {
    icon: Heart,
    title: 'Cares more than she shows',
    emoji: '💕',
    description:
      "You always check on me — even when I say I'm fine. You just know.",
    color: 'from-pink-400 to-pink-300',
  },
  {
    icon: Sparkles,
    title: 'Makes life lighter',
    emoji: '✨',
    description:
      'You somehow turn boring moments into laughs, smiles, and memories.',
    color: 'from-purple-400 to-purple-300',
  },
  {
    icon: Sun,
    title: 'Brings warmth everywhere',
    emoji: '☀️',
    description:
      'Your presence alone makes things feel happier and calmer.',
    color: 'from-yellow-400 to-yellow-300',
  },
  {
    icon: Shield,
    title: 'Stronger than she realizes',
    emoji: '🌈',
    description:
      'You’ve handled so much with grace, even when it wasn’t easy.',
    color: 'from-blue-400 to-blue-300',
  },
  {
    icon: Zap,
    title: 'Beautifully herself',
    emoji: '🦋',
    description:
      'You never pretend to be someone else — and that’s what makes you special.',
    color: 'from-teal-400 to-teal-300',
  },
  {
    icon: Star,
    title: 'Always my person',
    emoji: '⭐',
    description:
      'No matter what happens, I know you’re always on my side.',
    color: 'from-indigo-400 to-indigo-300',
  },
];

export default function Reasons() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.25 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-6 py-32 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FADADD 0%, #E6D9FF 100%)',
      }}
    >
      {/* Soft floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-float-slow text-pink-400/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${18 + Math.random() * 26}px`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            ♡
          </span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            Why You’re Special 💖
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: '"Patrick Hand", cursive' }}
          >
            Just a few reasons — there are so many more
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;

            return (
              <div
                key={index}
                className={`
                  relative bg-white/85 backdrop-blur-md
                  rounded-[2.4rem] p-9 shadow-xl
                  transition-all duration-700 ease-out
                  hover:scale-[1.07] hover:-rotate-1
                  hover:shadow-[0_40px_90px_rgba(255,170,210,0.45)]
                  ${
                    visible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-16'
                  }
                `}
                style={{ transitionDelay: `${index * 140}ms` }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.color}
                  flex items-center justify-center mb-6 shadow-md`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <h3
                    className="text-2xl font-semibold text-gray-800"
                    style={{ fontFamily: '"Poppins", sans-serif' }}
                  >
                    {reason.title}
                  </h3>
                  <span className="text-2xl">{reason.emoji}</span>
                </div>

                <p
                  className="text-gray-600 leading-relaxed text-lg"
                  style={{ fontFamily: '"Nunito", sans-serif' }}
                >
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
