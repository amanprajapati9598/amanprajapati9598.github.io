import { useEffect, useRef } from 'react';

export function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Respect user's motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Code characters: programming symbols, keywords, and binary
    const characters = '01{}<>/=;:$#@*~^&+-[]()constletasyncawaitReactNodeSQLGitTSPHP=>';
    const fontSize = 14;
    let columns = Math.floor(width / fontSize);

    // Array holding the y position of each column drop
    let drops: number[] = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      columns = Math.floor(width / fontSize);
      drops = Array.from({ length: columns }, () => Math.floor(Math.random() * -50));
    };

    window.addEventListener('resize', handleResize);

    let lastTime = 0;
    const fps = 28; // Smooth filmic rain speed
    const frameInterval = 1000 / fps;

    const draw = (currentTime: number) => {
      animationFrameId = requestAnimationFrame(draw);

      const elapsed = currentTime - lastTime;
      if (elapsed < frameInterval) return;
      lastTime = currentTime - (elapsed % frameInterval);

      // Deep dark fade layer to produce trailing glow
      ctx.fillStyle = 'rgba(11, 15, 23, 0.12)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px "JetBrains Mono", monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Leading character bright highlight
        const isHead = Math.random() > 0.88;
        if (isHead) {
          ctx.fillStyle = '#E0F2FE'; // Bright sky blue white head
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#38BDF8';
        } else {
          ctx.fillStyle = 'rgba(56, 189, 248, 0.45)'; // Soft cyan / sky blue body
          ctx.shadowBlur = 0;
        }

        ctx.fillText(char, x, y);

        // Reset drop to top with randomized delay once it falls below canvas
        if (y > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-40 select-none"
      aria-hidden="true"
    />
  );
}
