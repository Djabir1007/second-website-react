export type Favorite = {
  id: number;
  type: string;
};

export type ToggleFavorite = (id: number, type: string) => void;
