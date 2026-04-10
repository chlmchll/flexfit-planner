export type ExerciseCategory = "push" | "pull" | "legs";

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
  category: ExerciseCategory;
}

export const pushExercises: Exercise[] = [
  { name: "Bench Press", sets: 4, reps: "8-10", category: "push" },
  { name: "Overhead Press", sets: 3, reps: "8-10", category: "push" },
  { name: "Incline Dumbbell Press", sets: 3, reps: "10-12", category: "push" },
  { name: "Cable Flyes", sets: 3, reps: "12-15", category: "push" },
  { name: "Lateral Raises", sets: 3, reps: "12-15", category: "push" },
  { name: "Tricep Pushdowns", sets: 3, reps: "12-15", category: "push" },
  { name: "Overhead Tricep Extension", sets: 3, reps: "10-12", category: "push" },
];

export const pullExercises: Exercise[] = [
  { name: "Deadlift", sets: 4, reps: "5-6", category: "pull" },
  { name: "Pull-Ups", sets: 3, reps: "8-10", category: "pull" },
  { name: "Barbell Rows", sets: 4, reps: "8-10", category: "pull" },
  { name: "Face Pulls", sets: 3, reps: "15-20", category: "pull" },
  { name: "Dumbbell Curls", sets: 3, reps: "10-12", category: "pull" },
  { name: "Hammer Curls", sets: 3, reps: "10-12", category: "pull" },
  { name: "Lat Pulldowns", sets: 3, reps: "10-12", category: "pull" },
];

export const legsExercises: Exercise[] = [
  { name: "Squats", sets: 4, reps: "6-8", category: "legs" },
  { name: "Romanian Deadlift", sets: 3, reps: "8-10", category: "legs" },
  { name: "Leg Press", sets: 3, reps: "10-12", category: "legs" },
  { name: "Walking Lunges", sets: 3, reps: "12 each", category: "legs" },
  { name: "Leg Curls", sets: 3, reps: "12-15", category: "legs" },
  { name: "Leg Extensions", sets: 3, reps: "12-15", category: "legs" },
  { name: "Calf Raises", sets: 4, reps: "15-20", category: "legs" },
];

export function generateSchedule(days: number): { day: number; label: string; type: ExerciseCategory; exercises: Exercise[] }[] {
  const pattern: ExerciseCategory[] = [];
  const cycle: ExerciseCategory[] = ["push", "pull", "legs"];
  
  for (let i = 0; i < days; i++) {
    pattern.push(cycle[i % 3]);
  }

  const exerciseMap: Record<ExerciseCategory, Exercise[]> = {
    push: pushExercises,
    pull: pullExercises,
    legs: legsExercises,
  };

  const labels: Record<ExerciseCategory, string> = {
    push: "Push",
    pull: "Pull",
    legs: "Legs",
  };

  return pattern.map((type, i) => ({
    day: i + 1,
    label: labels[type],
    type,
    exercises: exerciseMap[type],
  }));
}
