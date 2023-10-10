import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CardInterface = {
  id:number;
  createdAt:string;
  updatedAt: string;
  name: string;
  img: string;
}

export type TableInterface = {
  id:number;
  createdAt:string;
  updatedAt: string;
  cards: CardInterface[];
}

type tablesState = {
  tables: TableInterface[];
};

const initialState = {
  tables: [],
} as tablesState;

export const tables = createSlice({
  name: "tables",
  initialState,
  reducers: {
    reset: () => initialState,
    setTables: (state, action: PayloadAction<TableInterface[]>) => {
      state.tables = action.payload;
    },
    addTables: (state, action: PayloadAction<TableInterface[]>) => {
      state.tables = [...state.tables, ...action.payload];
    },
  },
});

export const {
  setTables,
  addTables,
} = tables.actions;

export default tables.reducer;
