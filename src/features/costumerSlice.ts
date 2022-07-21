import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CostumerState {
  value: Costumer[];
}

interface AddFoodToCostumerPayload {
  food: string
  id: string
}

interface Costumer {
  id: string
  name: string 
  food: string[]
}

const initialState: CostumerState = {
  value: []
}

export const costumerSlice = createSlice({
  name: "costumers",
  initialState,
  reducers: {
    addCostumer: (state, action: PayloadAction<Costumer>) => {
      state.value.push(action.payload)
    },
    addFoodToCostumer: (state, action: PayloadAction<AddFoodToCostumerPayload>) => {
      state.value.forEach((costumer) => {
        if (costumer.id === action.payload.id) {
          costumer.food.push(action.payload.food);
        }
      })
    }
  }
});

export const { addCostumer, addFoodToCostumer } = costumerSlice.actions;
export default costumerSlice.reducer;