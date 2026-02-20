import { Heart } from 'lucide-react';

export default function Closing() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-28 relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #EAF3FF 0%, #FADADD 45%, #E6D9FF 100%)',
      }}
    >
      {/* Ambient floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 14 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-float-slow text-pink-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 26}px`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          >
            ♥
          </span>
        ))}
      </div>

      <div className="max-w-4xl text-center relative z-10">
        {/* Center heart */}
        <div className="mb-14 relative inline-block">
          <Heart className="w-24 h-24 text-pink-400 fill-pink-400 mx-auto animate-pulse" />
          <div className="absolute inset-0 bg-pink-400/40 blur-2xl rounded-full animate-pulse" />
        </div>

        {/* Main message */}
        <div className="bg-white/65 backdrop-blur-md rounded-[3rem] p-10 md:p-16 shadow-[0_40px_90px_rgba(255,170,210,0.45)]">
          <div
            className="space-y-8 text-2xl md:text-4xl font-bold leading-relaxed"
            style={{ fontFamily: '"Playfair Display", serif' }}
          >
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              No matter how big life gets,
            </p>
            <p className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              or how far we go,
            </p>
            <p className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              you'll always be my sister first—
            </p>

            <p
              className="text-gray-700"
              style={{ fontFamily: '"Patrick Hand", cursive' }}
            >
              my safe place,
            </p>
            <p
              className="text-gray-700"
              style={{ fontFamily: '"Patrick Hand", cursive' }}
            >
              my smile,
            </p>

            <p className="text-5xl md:text-6xl bg-gradient-to-r from-pink-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">
              my forever 💖
            </p>
          </div>
        </div>

        {/* Final line */}
        <div
          className="mt-14 text-xl md:text-2xl text-gray-700 font-semibold"
          style={{ fontFamily: '"Nunito", sans-serif' }}
        >
          Happy Birthday, sis.
          <br />
          I love you more than words can say.
        </div>
      </div>
    </section>
  );
}
