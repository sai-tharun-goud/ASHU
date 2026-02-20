import { Heart } from 'lucide-react';

export default function Letter() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-6 py-28 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #FADADD 0%, #FFE5D0 100%)',
      }}
    >

      {/* Floating petals */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <span
            key={`petal-${i}`}
            className="petal-float"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${12 + Math.random() * 14}px`,
              animationDuration: `${14 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 8}s`,
              opacity: 0.4,
            }}
          >
            🌸
          </span>
        ))}
      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] bg-pink-300/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-purple-300/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-3xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center mb-6 animate-heart">
            <Heart className="w-16 h-16 text-pink-400 fill-pink-200" />
          </div>

          <h2
            className="text-4xl md:text-5xl font-bold text-gray-800"
            style={{
              fontFamily: '"Segoe Script", "Brush Script MT", cursive',
            }}
          >
            <span className="ink-underline">What We Never Say Enough</span>
          </h2>
        </div>

        {/* Letter Paper */}
        <div
          className="
            bg-white/90 backdrop-blur-xl
            rounded-[2.8rem]
            p-9 md:p-14
            shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            animate-paper
            relative
            paper-grain
          "
        >
          <div  className="space-y-8 text-lg md:text-xl text-gray-700 leading-relaxed"
  style={{
    fontFamily:
      '"Segoe Script", "Bradley Hand", "Comic Sans MS", "Segoe Print", cursive',
  }}>
            <p>
              Ashu Bangaram...
              <br />
              Many More Happy Returns of the Day ra 💖🎉
            </p>

            <p>
              We hope beautiful things find their way to you.
              And when they do, we hope you always remember that you are worthy
              of every single one of them.
            </p>

            <p>
              You deserve all the happiness, all the peace, and all the love
              this world has to offer.
              <br /><br />
              We love you with our whole hearts.
              Seeing you confident, independent, and carrying a powerful
              mindset, one that never lets you doubt or diminish yourself,
              is everything we could ever wish for.
              <br /><br />
              You are a very special kind of person, one of the most beautiful
              souls we’ve ever known.
              Your kindness, and the way you stay committed to maintaining
              our bond with such unbelievable consistency, truly amazes us.
              Your pure heart melts us every time and makes us feel incredibly
              blessed to have you.
              <br /><br />
              Keep shining.
              Never lose your spark.
              And keep being the incredible person you are.
            </p>

            <p className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent signature-glow focus-glow">
              We don't say it enough,
              <br />
              but we're incredibly lucky
              <br />
              to have you as our sister 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
