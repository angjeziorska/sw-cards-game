export interface Person {
  id: string;
  height: number;
  name: string;
  mass: number;
}

export interface Starship {
  id: string;
  crew: number;
  name: string;
  passengers: number;
}

export interface Game {
  person: Person;
  starship: Starship;
}

export type Score = {
  [K in keyof Game]: number;
};

export type WinningAttributes = {
  [K in keyof Game]: keyof Game[K];
};
