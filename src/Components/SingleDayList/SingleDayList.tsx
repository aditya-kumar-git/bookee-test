import moment from "moment";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

import { styles } from "./SingleDayList.style";
import DetailBlock from "../DetailBlock/DetailBlock";
import { ModifiedShiftType, SingleDayListProps } from "./SingleDayList.type";

const SingleDayList: React.FunctionComponent<SingleDayListProps> = ({
  isMyShifts,
  listOfShifts,
}) => {
  const [theDate, setTheDate] = useState("");
  const [totalHours, setTotalHours] = useState(0);
  const [modifiedListOfShifts, setModifiedListOfShifts] = useState<
    ModifiedShiftType[]
  >([]);
  useEffect(() => {
    if (listOfShifts[0].startTime) {
      const tempDate = moment(listOfShifts[0].startTime);

      const givenDate = parseInt(tempDate.format("DD"));
      const givenMonth = parseInt(tempDate.format("MM"));
      const givenYear = parseInt(tempDate.format("YYYY"));
      const currDate = parseInt(moment(new Date()).format("DD"));
      const currMonth = parseInt(moment(new Date()).format("MM"));
      const currYear = parseInt(moment(new Date()).format("YYYY"));

      if (currYear == givenYear && currMonth == givenMonth) {
        if (givenDate == currDate) {
          setTheDate("Today");
        } else if (givenDate == currDate + 1) {
          setTheDate("Tomorrow");
        } else {
          setTheDate(tempDate.format("MMMM DD"));
        }
      } else {
        setTheDate(tempDate.format("MMMM DD"));
      }
    }
    var totalCount = 0;

    // Modified Shift
    var lastShiftStartTime: number | null = null;
    const tempModifiedShift: ModifiedShiftType[] = [];
    listOfShifts.map((data) => {
      let startT = moment(data.startTime);
      let endT = moment(data.endTime);
      totalCount = totalCount + endT.diff(startT, "hours", true);

      if (lastShiftStartTime === null) {
        tempModifiedShift.push({ ...data, isOverlap: false });
        lastShiftStartTime = data.endTime;
      } else {
        var tempIsOverlap = false;
        var curTime = moment(data.startTime);
        var lastTime = moment(lastShiftStartTime);

        const theDiff = curTime.diff(lastTime);
        if (theDiff < 0) {
          tempIsOverlap = true;
        }
        tempModifiedShift.push({ ...data, isOverlap: tempIsOverlap });
      }
    });
    setModifiedListOfShifts(tempModifiedShift);
    setTotalHours(totalCount);
  }, [listOfShifts]);

  return (
    <View style={styles.dayListContainer}>
      <View style={styles.dayListTitleContainer}>
        <View style={styles.dayListShiftHeader}>
          <Text style={styles.dayListTitle}>{theDate}</Text>
          {isMyShifts ? (
            <Text style={styles.dayListShiftTime}>
              {listOfShifts.length}{" "}
              {listOfShifts.length > 1 ? "Shifts" : "Shift"}, {totalHours} h
            </Text>
          ) : null}
        </View>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={modifiedListOfShifts}
        keyExtractor={(item) => `dayList-${item.id}`}
        renderItem={({ item, index }) => {
          if (isMyShifts) {
            if (item.booked) {
              return <DetailBlock isMyShifts={isMyShifts} item={item} />;
            }
            return null;
          }
          return <DetailBlock isMyShifts={isMyShifts} item={item} />;
        }}
      />
    </View>
  );
};

export default SingleDayList;
