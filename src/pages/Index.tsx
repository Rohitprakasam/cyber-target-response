import { CustomCursor } from '@/components/CustomCursor';
import { CountdownTimer } from '@/components/CountdownTimer';
import { Instagram, Linkedin, Twitter, Globe, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const events = [
    {
      title: 'Event 1: SDG Idea Presentation',
      timing: '10:00 AM – 12:00 PM',
      path: '/event-1',
    },
    {
      title: 'Event 2: Blind Code',
      timing: '1:00 PM – 3:00 PM',
      path: '/event-2',
    },
  ];

  return (
    <div className="min-h-screen bg-background grid-cyber relative">
      <CustomCursor />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="absolute w-2 h-2 bg-secondary rounded-full animate-ping" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
        <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping" style={{ bottom: '30%', left: '80%', animationDelay: '2s' }} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          {/* Title */}
          <div className="space-y-4 animate-in fade-in slide-in-from-top duration-700">
            <div className="inline-block">
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-primary glow-cyan-strong leading-tight">
                SOLVE FOR TOMORROW
              </h1>
              <div className="h-1 bg-gradient-to-r from-primary via-secondary to-primary mt-2 rounded-full" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-secondary glow-purple">
              & CODE TODAY
            </h2>
            <p className="text-foreground/80 text-lg md:text-xl font-body max-w-2xl mx-auto">
              IEEE BTS Society presents a futuristic tech event combining innovation and precision
            </p>
          </div>

          {/* Countdown */}
          <div className="animate-in fade-in zoom-in duration-700" style={{ animationDelay: '300ms' }}>
            <CountdownTimer />
          </div>

          {/* CTA Button */}
          <div className="animate-in fade-in zoom-in duration-700" style={{ animationDelay: '500ms' }}>
            <a
              href="https://docs.google.com/forms/d/1ALDTw7-EIDnsgdyrlln6iTuykySmMW87LInjReMMpzA/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-card border-2 border-primary rounded-lg font-display text-xl font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 interactive overflow-hidden"
              style={{
                boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)',
              }}
            >
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">JOIN THE MISSION</span>
              <ExternalLink className="relative z-10 group-hover:translate-x-1 transition-transform" size={24} />
              <div className="absolute -inset-1 bg-primary/20 blur-xl rounded-lg opacity-0 group-hover:opacity-100 animate-pulse-glow transition-opacity duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-center text-primary glow-cyan mb-12">
            EVENT MISSIONS
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <Link
                key={index}
                to={event.path}
                className="group relative bg-card border-2 border-primary/50 rounded-lg p-6 md:p-8 w-full transition-all duration-300 hover:border-primary hover:scale-105 interactive overflow-hidden animate-in fade-in slide-in-from-bottom duration-700"
                style={{ 
                  boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.3)',
                  animationDelay: `${index * 200}ms`
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
                    {event.title}
                  </h3>

                  <div className="text-foreground/80 font-body text-sm md:text-base">
                    <p>{event.timing}</p>
                    <p>November 5, 2025</p>
                  </div>

                  <div className="flex items-center gap-2 pt-4 text-primary group-hover:text-secondary transition-colors duration-300 font-body font-semibold">
                    <span>View Details</span>
                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-primary/30 py-12 px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.ieee.org"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 border-2 border-primary/50 rounded-lg hover:border-primary transition-all duration-300 hover:scale-110 interactive"
              aria-label="IEEE Website"
            >
              <Globe className="text-primary group-hover:glow-cyan" size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 border-2 border-primary/50 rounded-lg hover:border-primary transition-all duration-300 hover:scale-110 interactive"
              aria-label="Instagram"
            >
              <Instagram className="text-primary group-hover:glow-cyan" size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 border-2 border-primary/50 rounded-lg hover:border-primary transition-all duration-300 hover:scale-110 interactive"
              aria-label="LinkedIn"
            >
              <Linkedin className="text-primary group-hover:glow-cyan" size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 border-2 border-primary/50 rounded-lg hover:border-primary transition-all duration-300 hover:scale-110 interactive"
              aria-label="Twitter"
            >
              <Twitter className="text-primary group-hover:glow-cyan" size={24} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-foreground/60 font-body">
            <p>&copy; 2025 IEEE BTS Society. All rights reserved.</p>
            <p className="text-sm mt-2">Designed for Tomorrow. Built for Today.</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Index;
