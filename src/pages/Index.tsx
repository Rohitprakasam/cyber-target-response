import { useState } from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { CountdownTimer } from '@/components/CountdownTimer';
import { EventCard } from '@/components/EventCard';
import { EventModal } from '@/components/EventModal';
import { Instagram, Linkedin, Twitter, Globe, ExternalLink } from 'lucide-react';

const Index = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      title: 'Event 1: SDG Idea Presentation',
      description: `Each team receives one Sustainable Development Goal (SDG) through email. Based on the assigned goal, the team must identify a problem within the college related to that goal.

The problem statement must be submitted 12 hours before the event, and the solution must be prepared as a PowerPoint presentation and submitted before the event starts.`,
      timing: '10:00 AM – 12:00 PM',
    },
    {
      title: 'Event 2: Blind Code',
      description: `Participants will face hidden logic challenges in a Flask-based console.

They can only observe input–output behavior (Q1, Q2, Q3...) to infer the logic. After analyzing the pattern, they must implement the solution on HackerRank or the coding portal provided.

Example: If input "hello" gives output "olleh," they deduce it reverses the string.`,
      timing: '1:00 PM – 3:00 PM',
      tagline: 'Observe. Analyze. Code the unseen.',
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
              <div
                key={index}
                className="animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <EventCard
                  title={event.title}
                  timing={event.timing}
                  onClick={() => setSelectedEvent(index)}
                />
              </div>
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

      {/* Event Modal */}
      {selectedEvent !== null && (
        <EventModal
          isOpen={selectedEvent !== null}
          onClose={() => setSelectedEvent(null)}
          event={events[selectedEvent]}
        />
      )}
    </div>
  );
};

export default Index;
