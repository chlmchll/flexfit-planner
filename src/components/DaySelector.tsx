interface DaySelectorProps {
  days: number;
  onChange: (days: number) => void;
}

export function DaySelector({ days, onChange }: DaySelectorProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-lg font-semibold text-foreground">Training Days per Week</h2>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <button
            key={n}
            onClick={() => onChange(n)}
            className={`w-12 h-12 rounded-lg text-lg font-bold transition-all duration-200 ${
              n === days
                ? "bg-primary text-primary-foreground glow-primary scale-110"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </div>
  );
}
