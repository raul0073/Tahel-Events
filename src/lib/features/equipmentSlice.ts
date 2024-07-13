import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EquipmentType } from "../DB/Models/Equipment";

// profile slice
export interface EquipmentSlice {
    equipment: EquipmentType[];
}

// init
const initialState: EquipmentSlice = {
    equipment: [],
};

// slice reducer
export const equipmentSlice = createSlice({
    name: 'equipment',
    initialState,
    reducers: {
      addEquipmentToStore: (state, action: PayloadAction<EquipmentType>) => {
        const exists = state.equipment.some(
          (item) => item._id === action.payload._id 
        );
        if (!exists) {
          state.equipment.push(action.payload);
        }
      },
    },
  });
// export slice reducer
export const { addEquipmentToStore } = equipmentSlice.actions;
export default equipmentSlice.reducer;