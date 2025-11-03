import { Link } from 'react-router-dom';
import { CustomCursor } from '@/components/CustomCursor';
import { ArrowLeft, Calendar, Clock, Target, Users, FileText } from 'lucide-react';

const Event1 = () => {
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
              EVENT 1
            </h1>
            <div className="h-1 bg-gradient-to-r from-primary to-secondary mt-2 rounded-full" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-secondary glow-purple">
            SDG Idea Presentation
          </h2>
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
            <p className="text-foreground text-xl font-body">10:00 AM – 12:00 PM</p>
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
              <Target className="text-primary" size={32} />
              <h3 className="font-display text-3xl font-bold text-primary">Event Overview</h3>
            </div>
            <div className="space-y-4 text-foreground/90 font-body leading-relaxed">
              <p className="text-lg">
                Each team receives one <span className="text-primary font-semibold">Sustainable Development Goal (SDG)</span> through email. 
                Based on the assigned goal, the team must identify a problem within the college related to that goal.
              </p>
            </div>
          </div>

          {/* Requirements Section */}
          <div
            className="bg-card border-2 border-secondary/50 rounded-lg p-8 animate-in fade-in zoom-in duration-700"
            style={{ animationDelay: '200ms', boxShadow: '0 0 30px hsl(var(--neon-purple) / 0.4)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <FileText className="text-secondary" size={32} />
              <h3 className="font-display text-3xl font-bold text-secondary">Requirements</h3>
            </div>
            <div className="space-y-6">
              <div className="bg-muted/30 border border-primary/30 rounded-lg p-6">
                <h4 className="font-display text-xl text-primary mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">1</span>
                  Problem Statement Submission
                </h4>
                <p className="text-foreground/90 font-body">
                  The problem statement must be submitted <span className="text-primary font-semibold">12 hours before the event</span>.
                </p>
              </div>

              <div className="bg-muted/30 border border-secondary/30 rounded-lg p-6">
                <h4 className="font-display text-xl text-secondary mb-3 flex items-center gap-2">
                  <span className="w-8 h-8 bg-secondary text-primary-foreground rounded-full flex items-center justify-center font-bold">2</span>
                  Solution Preparation
                </h4>
                <p className="text-foreground/90 font-body">
                  The solution must be prepared as a <span className="text-secondary font-semibold">PowerPoint presentation</span> and 
                  submitted before the event starts.
                </p>
              </div>
            </div>
          </div>

          {/* Team Info */}
          <div
            className="bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary rounded-lg p-8 animate-in fade-in zoom-in duration-700"
            style={{ animationDelay: '400ms', boxShadow: '0 0 40px hsl(var(--neon-cyan) / 0.3)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-primary" size={32} />
              <h3 className="font-display text-2xl font-bold text-primary">Team Event</h3>
            </div>
            <p className="text-foreground/90 text-lg font-body">
              This is a collaborative team event. Work together to identify real-world problems and create 
              innovative solutions aligned with your assigned SDG.
            </p>
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

export default Event1;
