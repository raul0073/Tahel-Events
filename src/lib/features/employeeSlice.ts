import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../DB/Models/Employee";

// profile slice
export interface EmployeeSlice {
    employee: UserType;
}

// init
const initialState: EmployeeSlice = {
    employee: {} as UserType,
};

// slice reducer
export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployeeToStore: (state, action: PayloadAction<UserType>) => {
      state.employee = { ...action.payload }; 
    },   
  }
});
// export slice reducer
export const { addEmployeeToStore } = employeeSlice.actions;
export default employeeSlice.reducer;