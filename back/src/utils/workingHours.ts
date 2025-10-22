export type Weekday =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

export const WORKING_HOURS: Record<Weekday, { open: number; close: number }> = {
  monday: { open: 17, close: 22 },
  tuesday: { open: 17, close: 22 },
  wednesday: { open: 17, close: 22 },
  thursday: { open: 17, close: 22 },
  friday: { open: 17, close: 22 },
  saturday: { open: 15, close: 24 },
  sunday: { open: 15, close: 24 },
};
