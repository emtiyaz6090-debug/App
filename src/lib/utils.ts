export const calculateBurnedCalories = (type: string, duration: number): number => {
  const metValues: Record<string, number> = {
    walking: 3.5,
    running: 8.0,
    gym: 5.5,
    cycling: 6.0,
  };
  
  const met = metValues[type.toLowerCase()] || 3.0;
  // Formula: (MET * 3.5 * weight(70kg) / 200) * duration
  return Math.round((met * 3.5 * 70 / 200) * duration);
};

export const formatDuration = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
};
