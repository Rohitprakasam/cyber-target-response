import { X } from 'lucide-react';
import { useEffect } from 'react';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: {
    title: string;
    description: string;
    timing: string;
    tagline?: string;
  };
}

export const EventModal = ({ isOpen, onClose, event }: EventModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Modal */}
      <div
        className="relative bg-card border-2 border-primary rounded-lg p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: '0 0 40px hsl(var(--neon-cyan) / 0.5), 0 0 80px hsl(var(--neon-purple) / 0.3)',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-foreground hover:text-primary transition-colors duration-200 interactive"
          aria-label="Close modal"
        >
          <X size={24} className="hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Content */}
        <div className="space-y-6">
          <h2
            id="modal-title"
            className="font-display text-3xl md:text-4xl font-bold text-primary glow-cyan-strong"
          >
            {event.title}
          </h2>

          {event.tagline && (
            <p className="text-secondary text-lg italic font-body">{event.tagline}</p>
          )}

          <div className="space-y-4">
            <div className="bg-muted/30 border border-primary/30 rounded p-4">
              <h3 className="font-display text-xl text-accent mb-2">Description</h3>
              <p className="text-foreground/90 whitespace-pre-line leading-relaxed font-body">
                {event.description}
              </p>
            </div>

            <div className="bg-muted/30 border border-secondary/30 rounded p-4">
              <h3 className="font-display text-xl text-secondary mb-2">Timing</h3>
              <p className="text-foreground/90 font-bold text-lg font-body">{event.timing}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
