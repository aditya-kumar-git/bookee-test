import { combineReducers } from "redux";

export interface ShiftType {
  id: string;
  booked: boolean;
  area: string;
  startTime: number;
  endTime: number;
}
interface ShiftActionType {
  type: string;
  payload: ShiftType[];
}

var allShiftReducer = (iniState: ShiftType[] = [], action: ShiftActionType) => {
  switch (action.type) {
    case "GET_SHIFTS": {
      return [...action.payload];
    }
    default: {
      return iniState;
    }
  }
};
var testerReducer = (iniState = 1, action: any) => {
  switch (action.type) {
    case "INCREASE": {
      return iniState + 1;
    }
    case "DECREASE": {
      return iniState - 1;
    }
    default: {
      return iniState;
    }
  }
};

var allReducers = combineReducers({
  testerReducer: testerReducer,
  allShiftReducer: allShiftReducer,
});

export default allReducers;
