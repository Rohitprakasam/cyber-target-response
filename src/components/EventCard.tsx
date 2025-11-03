import { Calendar, Clock } from 'lucide-react';

interface EventCardProps {
  title: string;
  timing: string;
  onClick: () => void;
}

export const EventCard = ({ title, timing, onClick }: EventCardProps) => {
  return (
    <button
      onClick={onClick}
      className="group relative bg-card border-2 border-primary/50 rounded-lg p-6 md:p-8 w-full transition-all duration-300 hover:border-primary hover:scale-105 interactive overflow-hidden"
      style={{
        boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.3)',
      }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary transition-all duration-300 group-hover:w-12 group-hover:h-12" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary transition-all duration-300 group-hover:w-12 group-hover:h-12" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary transition-all duration-300 group-hover:w-12 group-hover:h-12" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary transition-all duration-300 group-hover:w-12 group-hover:h-12" />

      {/* Content */}
      <div className="relative z-10 text-left space-y-4">
        <h3 className="font-display text-2xl md:text-3xl font-bold text-primary group-hover:glow-cyan transition-all duration-300">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-foreground/80">
          <Clock size={20} className="text-secondary" />
          <span className="font-body text-sm md:text-base">{timing}</span>
        </div>

        <div className="flex items-center gap-2 text-foreground/80">
          <Calendar size={20} className="text-secondary" />
          <span className="font-body text-sm md:text-base">November 5, 2025</span>
        </div>

        <div className="pt-4 text-primary group-hover:text-secondary transition-colors duration-300 font-body font-semibold">
          Click to view details →
        </div>
      </div>
    </button>
  );
};
