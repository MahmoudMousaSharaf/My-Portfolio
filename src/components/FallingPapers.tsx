import { useEffect, useState, useMemo } from 'react';

interface Paper {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FallingPapers = ({ isDarkBg = true }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Generate papers only once, memoized
  const papers = useMemo<Paper[]>(() => {
    return Array.from({ length: isDarkBg ? 15 : 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 14 + Math.random() * 6,
      size: 20 + Math.random() * 60,
      opacity: isDarkBg ? 0.08 + Math.random() * 0.12 : 0.25 + Math.random() * 0.2,
    }));
  }, [isDarkBg]);

  if (!mounted) return null;

  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ perspective: '1000px', zIndex: 1, willChange: 'transform' }}>
        {papers.map((paper) => (
          <div
            key={paper.id}
            className="absolute"
            style={{
              left: `${paper.left}%`,
              width: `${paper.size}px`,
              height: `${paper.size}px`,
              opacity: paper.opacity,
              animation: `falling-paper-3d ${paper.duration}s linear ${paper.delay}s infinite`,
              transformStyle: 'preserve-3d',
              willChange: 'transform',
            }}
          >
            {/* Paper element with optimized 3D rotation */}
            <div
              style={{
                width: '100%',
                height: '100%',
                background: isDarkBg
                  ? 'linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))'
                  : 'linear-gradient(135deg, rgba(59,130,246,0.5), rgba(37,99,235,0.35))',
                borderRadius: '2px',
                border: isDarkBg
                  ? '1px solid rgba(255,255,255,0.1)'
                  : '1.5px solid rgba(59,130,246,0.6)',
                boxShadow: isDarkBg
                  ? 'inset 0 1px 2px rgba(255,255,255,0.12)'
                  : 'inset 0 1px 3px rgba(59,130,246,0.25), 0 2px 6px rgba(59,130,246,0.2)',
                animation: `rotate-paper-3d ${paper.duration * 0.7}s linear ${paper.delay}s infinite`,
                willChange: 'transform',
              }}
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes falling-paper-3d {
          0% {
            transform: translateY(-100vh) translateX(0) rotateZ(0deg);
            opacity: ${isDarkBg ? '0.15' : '0.4'};
          }
          50% {
            opacity: ${isDarkBg ? '0.12' : '0.35'};
          }
          100% {
            transform: translateY(100vh) translateX(120px) rotateZ(360deg);
            opacity: 0;
          }
        }

        @keyframes rotate-paper-3d {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          50% {
            transform: rotateX(90deg) rotateY(90deg) rotateZ(180deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg);
          }
        }
      `}</style>
    </>
  );
};

export default FallingPapers;
