import { Cake, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative py-20 px-6 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E7F6EF 0%, #EAF3FF 100%)',
      }}
    >
      {/* Floating tiny hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={i}
            className="absolute animate-float-slow text-purple-300/40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 18}px`,
            }}
          >
            ♡
          </span>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icons */}
        <div className="mb-8 flex justify-center gap-6">
          <div className="animate-bounce-slow">
            <Cake className="w-14 h-14 text-pink-400" />
          </div>
          <div className="animate-pulse">
            <Heart className="w-14 h-14 text-purple-400 fill-purple-400" />
          </div>
        </div>

        {/* Message */}
        <p
          className="text-xl md:text-2xl text-gray-700 font-semibold mb-6 leading-relaxed"
          style={{ fontFamily: '"Patrick Hand", cursive' }}
        >
          Made with endless love,
          <br />
          a little teasing,
          <br />
          and a lot of memories
        </p>

        <p
          className="text-lg text-gray-600 font-medium"
          style={{ fontFamily: '"Nunito", sans-serif' }}
        >
          by your brother 💙
        </p>

        {/* Divider */}
        <div className="mt-10 pt-8 border-t border-gray-300">
          <p className="text-sm text-gray-500">
            {new Date().getFullYear()} · A birthday gift from the heart
          </p>
        </div>
      </div>
    </footer>
  );
}
