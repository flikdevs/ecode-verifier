export enum CodeTypes {
  halal = "Halol",
  haram = "Harom",
  mushbooh = "Muboh",
}

export interface Element {
  code?: string;
  description?: string;
  type?: CodeTypes;
}
