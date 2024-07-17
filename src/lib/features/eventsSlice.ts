import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { EventType, EventsStateType } from "../DB/Models/Event";


//  slice
export interface EventsSlice {
    events: EventsStateType;
}

// init
const initialState: EventsStateType = {} as EventsStateType;

// slice reducer
export const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEventStore: (state, action: PayloadAction<EventType>) => {
          const event = action.payload;
          const month = new Date(event.date).getMonth() + 1;
          if (!state[month]) {
            state[month] = [];
          }
          //check if exists
          const existingEvent = state[month].find(e => e._id === event._id);
          // if does not exists add,
          if (!existingEvent) {
            state[month].push(event); 
          } else {
            return
          }
        },
        removeEventStore: (state, action: PayloadAction<{ month: number; id: string }>) => {
            const { month, id } = action.payload;
            if (state[month]) {
              state[month] = state[month].filter(event => event._id !== id);
            }
          },
          updateEventStore: (state, action: PayloadAction<EventType>) => {
            const event = action.payload;
            const month = new Date(event.date).getMonth() + 1;
            const existingEventIndex = state[month].findIndex(e => e._id === event._id);

            if (existingEventIndex !== -1) {
                state[month][existingEventIndex] = event; 
            }
          }
      },
    });
    
    export const { addEventStore, removeEventStore, updateEventStore } = eventsSlice.actions;
    export default eventsSlice.reducer;