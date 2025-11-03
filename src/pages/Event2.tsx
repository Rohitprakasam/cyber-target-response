import { Link } from 'react-router-dom';
import { CustomCursor } from '@/components/CustomCursor';
import { ArrowLeft, Calendar, Clock, Eye, Code, Lightbulb, Terminal } from 'lucide-react';

const Event2 = () => {
  return (
    <div className="min-h-screen bg-background grid-cyber relative">
      <CustomCursor />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-2 h-2 bg-primary rounded-full animate-ping" style={{ top: '20%', left: '10%', animationDelay: '0s' }} />
        <div className="absolute w-2 h-2 bg-secondary rounded-full animate-ping" style={{ top: '60%', right: '15%', animationDelay: '1s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors duration-300 mb-8 interactive font-body"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </Link>

        {/* Event Header */}
        <div className="space-y-6 mb-12 animate-in fade-in slide-in-from-top duration-700">
          <div className="inline-block">
            <h1 className="font-display text-4xl md:text-6xl font-black text-primary glow-cyan-strong leading-tight">
              EVENT 2
            </h1>
            <div className="h-1 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary glow-purple">
            Blind Code
          </h2>
          <p className="text-accent text-xl md:text-2xl italic font-body glow-purple">
            "Observe. Analyze. Code the unseen."
          </p>
        </div>

        {/* Event Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Timing Card */}
          <div
            className="bg-card border-2 border-primary/50 rounded-lg p-6 animate-in fade-in slide-in-from-left duration-700"
            style={{ boxShadow: '0 0 20px hsl(var(--neon-cyan) / 0.3)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-primary" size={32} />
              <h3 className="font-display text-2xl font-bold text-primary">Timing</h3>
            </div>
            <p className="text-foreground text-xl font-body">1:00 PM – 3:00 PM</p>
          </div>

          {/* Date Card */}
          <div
            className="bg-card border-2 border-secondary/50 rounded-lg p-6 animate-in fade-in slide-in-from-right duration-700"
            style={{ boxShadow: '0 0 20px hsl(var(--neon-purple) / 0.3)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="text-secondary" size={32} />
              <h3 className="font-display text-2xl font-bold text-secondary">Date</h3>
            </div>
            <p className="text-foreground text-xl font-body">November 5, 2025</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Description Section */}
          <div
            className="bg-card border-2 border-primary/50 rounded-lg p-8 animate-in fade-in zoom-in duration-700"
            style={{ boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.4)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-primary" size={32} />
              <h3 className="font-display text-3xl font-bold text-primary">Event Overview</h3>
            </div>
            <div className="space-y-4 text-foreground/90 font-body leading-relaxed">
              <p className="text-lg">
                Participants will face <span className="text-primary font-semibold">hidden logic challenges</span> in a Flask-based console.
              </p>
              <p className="text-lg">
                They can only observe <span className="text-secondary font-semibold">input–output behavior</span> (Q1, Q2, Q3...) 
                to infer the logic. After analyzing the pattern, they must implement the solution on HackerRank or the coding portal provided.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div
            className="bg-card border-2 border-secondary/50 rounded-lg p-8 animate-in fade-in zoom-in duration-700"
            style={{ animationDelay: '200ms', boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.4)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="text-secondary" size={32} />
              <h3 className="font-display text-3xl font-bold text-secondary">How It Works</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-primary/30 rounded-lg p-6">
                <h4 className="font-display text-xl text-primary mb-3 flex items-center gap-2">
                  <Eye size={24} className="text-primary" />
                  Step 1: Observe
                </h4>
                <p className="text-foreground/90 font-body">
                  Analyze the input-output patterns presented in the Flask console. Each question (Q1, Q2, Q3...) 
                  reveals clues about the underlying logic.
                </p>
              </div>

              <div className="bg-muted/30 border border-secondary/30 rounded-lg p-6">
                <h4 className="font-display text-xl text-secondary mb-3 flex items-center gap-2">
                  <Lightbulb size={24} className="text-secondary" />
                  Step 2: Analyze
                </h4>
                <p className="text-foreground/90 font-body">
                  Deduce the pattern and logic from the observed behavior. Use your analytical skills to 
                  understand what transformation is being applied.
                </p>
              </div>

              <div className="bg-muted/30 border border-primary/30 rounded-lg p-6">
                <h4 className="font-display text-xl text-primary mb-3 flex items-center gap-2">
                  <Code size={24} className="text-primary" />
                  Step 3: Code
                </h4>
                <p className="text-foreground/90 font-body">
                  Implement your solution on the provided coding platform (HackerRank or similar) based on 
                  your deduced logic.
                </p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div
            className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-secondary rounded-lg p-8 animate-in fade-in zoom-in duration-700"
            style={{ animationDelay: '400ms', boxShadow: '0 0 40px hsl(var(--neon-purple) / 0.3)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="text-secondary" size={32} />
              <h3 className="font-display text-2xl font-bold text-secondary">Example Challenge</h3>
            </div>
            <div className="bg-card/50 border border-primary/30 rounded p-6 font-mono">
              <div className="space-y-3">
                <div className="flex items-center gap-4">
                  <span className="text-primary font-bold">Input:</span>
                  <span className="text-foreground">"hello"</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-secondary font-bold">Output:</span>
                  <span className="text-foreground">"olleh"</span>
                </div>
                <div className="mt-4 pt-4 border-t border-primary/30">
                  <span className="text-accent font-bold">Deduction:</span>
                  <span className="text-foreground ml-2">The logic reverses the input string</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center animate-in fade-in zoom-in duration-700" style={{ animationDelay: '600ms' }}>
          <a
            href="https://docs.google.com/forms/d/1ALDTw7-EIDnsgdyrlln6iTuykySmMW87LInjReMMpzA/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-card border-2 border-primary rounded-lg font-display text-xl font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110 interactive"
            style={{ boxShadow: '0 0 30px hsl(var(--neon-cyan) / 0.5)' }}
          >
            REGISTER FOR THIS EVENT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event2;
