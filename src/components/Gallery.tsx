import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import TAChild from "../photos/TAChild.jpeg";
import ourTrio from "../photos/ourTrio.jpeg";
import AR from "../photos/AR.jpeg";
import ourTrio2 from "../photos/ourTrio2.jpeg";
import RT from "../photos/RT.jpeg";
import now from "../photos/now.jpeg";

const photos = [
  {
    url: TAChild,
    caption: 'I wish our paths had crossed at this age. Such cuties! 🥹',
    final: { left: '6%', top: '10%' },
    from: 'left',
  },
  {
    url: ourTrio,
    caption: 'Three Hearts, One Eternal Bond 💖',
    final: { left: '38%', top: '4%' },
    from: 'top',
  },
  {
    url: AR,
    caption: 'Raju Mama n Ashu Papa rocks 😎',
    final: { left: '68%', top: '14%' },
    from: 'right',
  },
  {
    url: ourTrio2,
    caption: 'Peace 🤍',
    final: { left: '12%', top: '48%' },
    from: 'bottom',
  },
  {
    url: RT,
    caption: 'Thumbs up! Thumbs up!🥤',
    final: { left: '42%', top: '52%' },
    from: 'left',
  },
  {
    url: now,
    caption: 'My favorite version of you ❤️',
    final: { left: '70%', top: '48%' },
    from: 'right',
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.35 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const offscreen: Record<string, string> = {
    left: 'translateX(-120vw)',
    right: 'translateX(120vw)',
    top: 'translateY(-120vh)',
    bottom: 'translateY(120vh)',
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative px-6 pt-40 pb-28 overflow-hidden"
      style={{ backgroundColor: 'rgb(234, 243, 255)' }}
    >
      {/* 💙 Floating Blue Hearts */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="gallery-heart"
            style={{
              left: `${Math.random() * 100}%`,
              fontSize: `${16 + Math.random() * 24}px`,
              animationDuration: `${20 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 12}s`,
              opacity: 0.3,
              filter: Math.random() > 0.6 ? 'blur(1.5px)' : 'none',
              color: '#9EC9FF',
            }}
          >
            💙
          </span>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="relative z-20 mb-24 text-center">
          <div className="inline-block px-6 py-4 rounded-3xl bg-white/70 backdrop-blur-md shadow-md">
            <h2
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-3"
              style={{ fontFamily: '"Playfair Display", serif' }}
            >
              Treasured Times 📸
            </h2>

            <p
              className="text-xl md:text-2xl text-gray-600"
              style={{ fontFamily: '"Patrick Hand", cursive' }}
            >
              Snapshots of us being us 💕
            </p>
          </div>
        </div>

        {/* Photos */}
        <div className="relative w-full h-[80vh]">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="
                absolute
                transition-all duration-[1500ms] ease-out
                z-[5]
                hover:z-[50]
              "
              style={{
                left: photo.final.left,
                top: photo.final.top,
                transform: visible
                  ? 'translate(0,0)'
                  : offscreen[photo.from],
              }}
              onClick={() => setSelectedPhoto(index)}
            >
              {/* Image + Hover Caption */}
              <div
                className="
                  relative w-64 h-64
                  rounded-2xl
                  border-[6px] border-white
                  shadow-xl
                  cursor-pointer
                  overflow-hidden
                  group
                  transition-all duration-500
                  hover:scale-110 hover:-rotate-1
                  hover:shadow-[0_35px_70px_rgba(120,170,255,0.45)]
                "
              >
                <img
                  src={photo.url}
                  alt={photo.caption}
                  className="w-full h-full object-cover"
                />

                {/* Hover caption */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-t from-black/70 via-black/30 to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity duration-500
                    flex items-end p-4
                  "
                >
                  <p className="text-white text-sm font-semibold leading-snug">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedPhoto !== null && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 rounded-full p-3"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>

          <div className="max-w-4xl w-full">
            <img
              src={photos[selectedPhoto].url}
              alt={photos[selectedPhoto].caption}
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
            <p className="text-white text-center text-2xl mt-6 font-semibold">
              {photos[selectedPhoto].caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
