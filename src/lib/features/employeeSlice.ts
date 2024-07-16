import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserType } from "../DB/Models/Employee";

// profile slice
export interface EmployeeSlice {
    employee: UserType;
    employeeList: UserType[];
}

// init
const initialState: EmployeeSlice = {
    employee: {} as UserType,
    employeeList: []
};

// slice reducer
export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployeeToStore: (state, action: PayloadAction<UserType>) => {
      state.employee = { ...action.payload }; 
    }, 
    addEmployeeToListStore: (state, action: PayloadAction<UserType>) => {
      const employeeExists = state.employeeList.some(employee => employee._id === action.payload._id);
      if (!employeeExists) {
        state.employeeList.push(action.payload);
      } else {
        console.warn(`Employee with ID ${action.payload._id} already exists in the list.`);
      }
    },
    updateEmployeeInListStore: (state, action: PayloadAction<UserType>) => {
      const index = state.employeeList.findIndex(employee => employee._id === action.payload._id);
      if (index !== -1) {
        state.employeeList[index] = action.payload;
      }
    }
  }
});

// export slice reducer
export const { addEmployeeToStore, addEmployeeToListStore, updateEmployeeInListStore } = employeeSlice.actions;
export default employeeSlice.reducer;