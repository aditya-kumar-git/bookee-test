import { SafeAreaView, StatusBar } from "react-native";

import { View } from "../../components/Themed";
import { styles } from "./MyShifts.style";
import AllDaysList from "../../src/Components/AllDaysList/AllDaysList";

const MyShifts = () => {
  return (
    <SafeAreaView style={styles.myShiftSAV}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.myShiftContainer}>
        <AllDaysList isMyShifts area="" />
      </View>
    </SafeAreaView>
  );
};

export default MyShifts;
