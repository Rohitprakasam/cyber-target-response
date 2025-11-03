import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const targetDate = new Date('2025-11-05T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-lg animate-pulse-glow" />
        <div className="relative bg-card border-2 border-primary rounded-lg p-4 min-w-[80px] md:min-w-[100px]">
          <div className="font-display text-3xl md:text-5xl font-bold text-primary">
            {String(value).padStart(2, '0')}
          </div>
        </div>
      </div>
      <div className="text-muted-foreground text-sm md:text-base mt-2 font-body uppercase tracking-wider">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex gap-3 md:gap-6 justify-center items-center">
      <TimeUnit value={timeLeft.days} label="Days" />
      <div className="text-primary text-4xl font-bold mb-8">:</div>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <div className="text-primary text-4xl font-bold mb-8">:</div>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <div className="text-primary text-4xl font-bold mb-8">:</div>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  );
};
