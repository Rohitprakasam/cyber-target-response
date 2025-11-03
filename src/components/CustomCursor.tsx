import { useEffect, useState } from 'react';

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.classList.contains('interactive') ||
        target.closest('button') ||
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main crosshair */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1}) rotate(${isHovering ? 45 : 0}deg)`,
        }}
      >
        {/* Horizontal line */}
        <div className="absolute w-8 h-[2px] bg-primary -translate-x-1/2 -translate-y-1/2" />
        {/* Vertical line */}
        <div className="absolute w-[2px] h-8 bg-primary -translate-x-1/2 -translate-y-1/2" />
        {/* Corner brackets */}
        <div className="absolute w-3 h-3 border-t-2 border-l-2 border-primary -translate-x-6 -translate-y-6" />
        <div className="absolute w-3 h-3 border-t-2 border-r-2 border-primary translate-x-3 -translate-y-6" />
        <div className="absolute w-3 h-3 border-b-2 border-l-2 border-primary -translate-x-6 translate-y-3" />
        <div className="absolute w-3 h-3 border-b-2 border-r-2 border-primary translate-x-3 translate-y-3" />
      </div>

      {/* Glow effect */}
      <div
        className="fixed pointer-events-none z-[9998] w-8 h-8 rounded-full bg-primary/20 blur-xl transition-all duration-200"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
        }}
      />
    </>
  );
};
