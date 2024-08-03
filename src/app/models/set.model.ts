// models/set.model.ts
export interface Set {
  id: number;
  name: string;
  count: number;
  players: { [id: number]: { x: number; y: number } }; // Player positions
}
