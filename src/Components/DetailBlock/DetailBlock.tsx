import moment from "moment";
import { Text, View } from "react-native";
import { useEffect, useState } from "react";

import myStore from "../../Redux/Store";
import { styles } from "./DetailBlock.style";
import { bookShifts } from "../../Redux/Actions";
import { DetailBlockProps } from "./DetailBlock.type";
import CustomButton from "../CustomButton/CustomButton";

const DetailBlock: React.FunctionComponent<DetailBlockProps> = ({
  item,
  isMyShifts,
}) => {
  const [rightText, setRightText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const { id, startTime, endTime, area, booked, isOverlap } = item;

  const onButtonBlick = async () => {
    myStore.dispatch(bookShifts(id));
  };

  useEffect(() => {
    var curTime = moment(new Date());
    var givenTime = moment(startTime);
    const theDiff = givenTime.diff(curTime);
    if (theDiff < 0) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    if (booked) {
      setRightText("Booked");
    } else if (isOverlap && theDiff >= 0) {
      setIsDisabled(true);
      setRightText("Overlapping");
    }
  }, []);

  return (
    <View style={styles.detailBlockContainer}>
      <View>
        <Text style={styles.detailBlockTime}>
          {moment(startTime).format("h:mm a")} -{" "}
          {moment(endTime).format("h:mm a")}
        </Text>
        {isMyShifts ? <Text style={styles.detailBlockArea}>{area}</Text> : null}
      </View>
      <View style={styles.detailBlockRightContainer}>
        {!isMyShifts ? (
          <Text
            style={[
              styles.detailBlockRightText,
              rightText === "Booked" ? styles.detailBlockRightBookedText : null,
              rightText === "Overlapping"
                ? styles.detailBlockRightOverlappingText
                : null,
            ]}
          >
            {rightText}
          </Text>
        ) : null}

        <CustomButton
          isDisabled={isDisabled}
          onClick={onButtonBlick}
          booked={booked}
        />
      </View>
    </View>
  );
};

export default DetailBlock;
