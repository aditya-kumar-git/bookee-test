import Axios from "axios";

const API = "http://127.0.0.1:8080/shifts";
export var getShifts = () => {
  return async (dispatch: (data: { type: string; payload: any }) => void) => {
    try {
      var output = await Axios.get(API);
      dispatch({ type: "GET_SHIFTS", payload: output.data });
    } catch (error) {
      console.log(error);
    }
  };
};
export var bookShifts = (id: string) => {
  return async () => {
    const bookAPI = `${API}/${id}/cancel`;
    console.log("Two ", bookAPI);
    try {
      console.log("Three");
      var output = await Axios.post(bookAPI);
      console.log("Book Shift ", output.data);

      getShifts();
    } catch (error) {
      console.log("Book Shift Error ", error);
    }
  };
};
export var getTester = () => {
  return { type: "INCREASE" };
};
