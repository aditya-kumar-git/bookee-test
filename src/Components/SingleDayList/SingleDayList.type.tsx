import { ShiftType } from "../../Redux/Reducers";

export interface SingleDayListProps {
  listOfShifts: ShiftType[];
  isMyShifts?: boolean;
}
export interface ModifiedShiftType extends ShiftType {
  isOverlap: boolean;
}
