export const kitGoals = {
  connection: {
    label: "More connection",
    note: "A small story and your full attention are enough.",
  },
  confidence: {
    label: "Reading confidence",
    note: "Choose a book that gives them a small, comfortable win.",
  },
  calm: {
    label: "Calmer bedtimes",
    note: "Keep two familiar books nearby and finish at a gentle pause.",
  },
} as const;

export type KitGoal = keyof typeof kitGoals;

export const readingDays = [
  { day: "Day 1", title: "Pick together", idea: "Offer two inviting books. Let them choose.", prompt: "What do you notice on the cover?" },
  { day: "Day 2", title: "Follow a spark", idea: "Choose a topic they already love.", prompt: "Which page would you like to explore?" },
  { day: "Day 3", title: "Read a favourite", idea: "Repeating a beloved book counts.", prompt: "What should we remember from this story?" },
  { day: "Day 4", title: "Take a turn", idea: "Share a page, a word, or a picture.", prompt: "Which part would you like to tell me?" },
  { day: "Day 5", title: "Wonder together", idea: "Pause for one question they care about.", prompt: "What do you think happens next?" },
  { day: "Day 6", title: "Mix it up", idea: "Try a comic, a fact book, or audio together.", prompt: "Would you like to meet this character?" },
  { day: "Day 7", title: "Keep the good bit", idea: "Choose one lovely thing to repeat next week.", prompt: "Which story should we come back to?" },
];
