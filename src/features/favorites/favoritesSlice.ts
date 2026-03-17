import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Favorite, FavoriteType } from "@/types/favorite";

type FavoritesState = {
  items: Favorite[];
};

const loadFavorites = (): Favorite[] => {
  try {
    const saved = localStorage.getItem("favorites");
    return saved ? (JSON.parse(saved) as Favorite[]) : [];
  } catch {
    return [];
  }
};

const initialState: FavoritesState = {
  items: loadFavorites(),
};

type ToggleFavoritePayload = {
  id: number;
  type: FavoriteType;
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<ToggleFavoritePayload>) => {
      const { id, type } = action.payload;

      const exists = state.items.some(
        (item) => item.id === id && item.type === type,
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => !(item.id === id && item.type === type),
        );
      } else {
        state.items.push({ id, type });
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
