import moment from "moment";
import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import myStore from "../../Redux/Store";
import { ShiftType } from "../../Redux/Reducers";
import { AllDaysListProps } from "./AllDaysList.type";
import { getShifts, getTester } from "../../Redux/Actions";
import SingleDayList from "../SingleDayList/SingleDayList";

const AllDaysList: React.FunctionComponent<AllDaysListProps> = ({
  area,
  isMyShifts,
}) => {
  const dispatch = useDispatch();
  const shiftList = useSelector<any, ShiftType[]>(
    (state: any) => state.allShiftReducer
  );
  const [listOfList, setListOfList] = useState<ShiftType[][]>();

  const getTheList = () => {
    myStore.dispatch(getShifts());
    dispatch(getTester());
  };
  useEffect(() => {
    getTheList();
  }, []);

  useEffect(() => {
    var index = -1;
    var last: number | null = null;
    const basedOnDate: ShiftType[][] = [];
    shiftList.map((data) => {
      if ((isMyShifts && data.booked) || data.area === area) {
        if (last == null) {
          last = data.startTime;
          const tempArr = [];
          tempArr.push(data);
          basedOnDate.push(tempArr);
          index++;
        } else {
          const lastDate = parseInt(moment(last).format("DD"), 10);
          const lastMonth = parseInt(moment(last).format("MM"), 10);
          const lastYear = parseInt(moment(last).format("YYYY"), 10);
          const curDate = parseInt(moment(data.startTime).format("DD"), 10);
          const curMonth = parseInt(moment(data.startTime).format("MM"), 10);
          const curYear = parseInt(moment(data.startTime).format("YYYY"), 10);

          if (
            curDate - lastDate > 0 ||
            curMonth - lastMonth > 0 ||
            curYear - lastYear > 0
          ) {
            const tempArr = [];
            tempArr.push(data);
            basedOnDate.push(tempArr);
            index++;
          } else {
            basedOnDate[index].push(data);
          }
          last = data.startTime;
        }
      }
    });
    setListOfList(basedOnDate);
  }, [shiftList, area]);

  return (
    <FlatList
      data={listOfList}
      keyExtractor={(item, index) => `listOfList-${index}`}
      renderItem={({ item, index }) => (
        <SingleDayList isMyShifts={isMyShifts} listOfShifts={item} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default AllDaysList;
