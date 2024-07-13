import { configureStore } from '@reduxjs/toolkit'
import employeeSlice from './features/employeeSlice'
import equipmentSlice from './features/equipmentSlice'
import eventsSlice from './features/eventsSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      employee: employeeSlice,
      equipment: equipmentSlice,
      events: eventsSlice
      
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']