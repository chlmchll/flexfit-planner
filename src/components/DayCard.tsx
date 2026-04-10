import type { Exercise, ExerciseCategory } from "@/data/exercises";

const categoryColors: Record<ExerciseCategory, string> = {
  push: "bg-primary/20 text-primary border-primary/30",
  pull: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  legs: "bg-orange-500/20 text-orange-400 border-orange-500/30",
};

const categoryAccent: Record<ExerciseCategory, string> = {
  push: "border-l-primary",
  pull: "border-l-blue-500",
  legs: "border-l-orange-500",
};

interface DayCardProps {
  day: number;
  label: string;
  type: ExerciseCategory;
  exercises: Exercise[];
}

export function DayCard({ day, label, type, exercises }: DayCardProps) {
  return (
    <div className={`bg-card rounded-lg border-l-4 ${categoryAccent[type]} overflow-hidden`}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-muted-foreground text-sm font-medium">Day {day}</p>
            <h3 className="text-xl font-bold text-foreground">{label}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${categoryColors[type]}`}>
            {label}
          </span>
        </div>
        <div className="space-y-2">
          {exercises.map((ex) => (
            <div
              key={ex.name}
              className="flex items-center justify-between py-2 px-3 rounded-md bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{ex.name}</span>
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                {ex.sets} × {ex.reps}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
