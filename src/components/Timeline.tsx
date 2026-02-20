import { useEffect, useRef, useState } from 'react';
import { Baby, BookOpen, Smile, Sparkles } from 'lucide-react';

const memories = [
  {
    icon: Baby,
    title: 'A tiny, innocent doll – the first time I saw you',
    emoji: '👶',
    description:
      'The first time I saw you, you were fighting smallpox. That time I never knew then how deeply you would grow into my life.',
    color: 'from-pink-400 to-pink-300',
  },
  {
    icon: BookOpen,
    title: 'Maths Gave Up Before you Did',
    emoji: '🎒',
    description:
      'Antha thingari dhanivi yendhee , Nik maths chepthunte nv adige questions ki na fuse lu out ayyevi. Ashu is a mathematician Where Numbers decide to Die , Algebra Still Has Nightmares About you.',
    color: 'from-blue-400 to-blue-300',
  },
  {
    icon: Smile,
    title: 'Caught in your Gravity',
    emoji: '😂',
    description:
      'Tbh, Banka laga pattukunnav bangaram , Nv ala consistent ga annayya annayya antu na chuttu thiriguthu , nen niku entha istamo express cheyyakapothe, maybe naku ni value ardm ayyedhi kadhu.Thankyou so much for your efforts.',
    color: 'from-purple-400 to-purple-300',
  },
  {
    icon: Sparkles,
    title: 'Watching you grow into YOU',
    emoji: '🌱',
    description:
      'Chaala fast ga perigipothunnav — 120 kmph kaakunda konchem 20 kmph lo perugu. Edhi em ayina, manam eppatiki ilage undali. Our pure bond will undoubtedly remain the same forever.',
    color: 'from-yellow-400 to-yellow-300',
  },
];

export default function Timeline() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative min-h-screen px-6 py-24 flex items-center justify-center overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, #E6D9FF 0%, #F2ECFF 40%, #FFF4CC 100%)',
      }}
    >
      {/* soft ambient dots */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/30 blur-sm animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-5xl w-full relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <h2
            className="text-4xl md:text-5xl text-gray-800 mb-4"
  style={{
    fontFamily:
      '"Playfair Display", "Georgia", "Times New Roman", serif',
    letterSpacing: '0.02em',
  }}
          >
            The Story We Share
          </h2>
          <p
            className="text-xl text-gray-600"
            style={{ fontFamily: '"Inter", "Segoe UI", system-ui' }}
          >
            A timeline of moments that made us
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-pink-300 via-purple-300 to-yellow-300" />

          <div className="space-y-28">
            {memories.map((memory, index) => {
              const Icon = memory.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-y-14 md:gap-x-16"
                >
                  {isLeft ? (
                    <div className="md:flex md:justify-end">
                      <div
                        className={
                          visible
                            ? 'animate-timeline-left'
                            : 'opacity-0'
                        }
                        style={{ animationDelay: `${index * 0.25}s` }}
                      >
                        <Card memory={memory} />
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}

                  <div className="flex justify-center z-10">
                    <div
                      className={`${memory.color} w-16 h-16 rounded-full shadow-lg flex items-center justify-center ${
                        visible ? 'animate-timeline-icon' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 0.25}s` }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {!isLeft ? (
                    <div className="md:flex md:justify-start">
                      <div
                        className={
                          visible
                            ? 'animate-timeline-right'
                            : 'opacity-0'
                        }
                        style={{ animationDelay: `${index * 0.25}s` }}
                      >
                        <Card memory={memory} />
                      </div>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

interface Memory {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  emoji: string;
  description: string;
  color: string;
}

function Card({ memory }: { memory: Memory }) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-7 shadow-lg max-w-lg w-full transition-all duration-300 hover:shadow-xl">
      <div className="flex justify-center mb-2">
        <span className="text-3xl">{memory.emoji}</span>
      </div>

      <h3
          className="text-2xl text-gray-800 text-center mb-3"
  style={{
    fontFamily:
      '"Montserrat", "Poppins", "Segoe UI", system-ui',
    fontWeight: 600,
    letterSpacing: '0.015em',
  }}
      >
        {memory.title}
      </h3>

      <p
         className="text-gray-600 leading-relaxed text-center md:text-left"
  style={{
    fontFamily:
      '"Quicksand", "Nunito", "Segoe UI", system-ui',
    fontSize: '1.08rem',
    letterSpacing: '0.015em',
  }}
      >
        {memory.description}
      </p>
    </div>
  );
}
