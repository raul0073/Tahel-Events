import { EquipmentType } from "@/lib/DB/Models/Equipment";
import { getAllEquipmentService } from "../../../../Services/getAllEquipment";
import { addEquipmentToStore } from "@/lib/features/equipmentSlice";
import { getAllEventsService } from "../../../../Services/getAllEvents";
import { addEventStore } from "@/lib/features/eventsSlice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { EventType } from "@/lib/DB/Models/Event";


export 	const getEqData = async (dispatch: Dispatch<UnknownAction>) => {
    const res = await getAllEquipmentService();
    if(res){
        res.forEach((item: EquipmentType) => {
            dispatch(addEquipmentToStore(item))
        })
    }
};

export const getEventsData = async (dispatch: Dispatch<UnknownAction>) => {
    const res = await getAllEventsService();
    if(res){
        res.forEach((item: EventType) => {
            dispatch(addEventStore(item))
        })
    }
};