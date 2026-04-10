import { useState } from "react";
import { DaySelector } from "@/components/DaySelector";
import { DayCard } from "@/components/DayCard";
import { generateSchedule } from "@/data/exercises";
import { Dumbbell } from "lucide-react";

export default function Index() {
  const [days, setDays] = useState(6);
  const schedule = generateSchedule(days);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-10">
        <div className="container max-w-5xl mx-auto px-4 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
            <Dumbbell className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">PPL Planner</h1>
            <p className="text-xs text-muted-foreground">Push · Pull · Legs</p>
          </div>
        </div>
      </header>

      <main className="container max-w-5xl mx-auto px-4 py-8 space-y-8">
        <DaySelector days={days} onChange={setDays} />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {schedule.map((s) => (
            <DayCard key={s.day} {...s} />
          ))}
        </div>
      </main>
    </div>
  );
}
