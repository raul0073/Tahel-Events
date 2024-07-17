import { EquipmentType } from "@/lib/DB/Models/Equipment";
import { getAllEquipmentService } from "../../../../Services/getAllEquipment";
import { addEquipmentToStore } from "@/lib/features/equipmentSlice";
import { getAllEventsService } from "../../../../Services/getAllEvents";
import { addEventStore } from "@/lib/features/eventsSlice";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { EventType } from "@/lib/DB/Models/Event";
import { getAllEmployeesService } from "../../../../Services/getAllEmployees";
import { addEmployeeToListStore } from "@/lib/features/employeeSlice";
import { UserType } from "@/lib/DB/Models/Employee";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";


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

export const getEmployeesData = async (dispatch: Dispatch<UnknownAction>) => {
    const res = await getAllEmployeesService();
    if(res){
        res.forEach((item: UserType) => {
            dispatch(addEmployeeToListStore(item))
        })
    }
};