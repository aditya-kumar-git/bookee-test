import { useSelector } from "react-redux";
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
} from "react-native";

import { View } from "../../components/Themed";
import { ShiftType } from "../../src/Redux/Reducers";
import { styles } from "./AvailableShifts.style";
import { useEffect, useState } from "react";
import AllDaysList from "../../src/Components/AllDaysList/AllDaysList";

const AvailableShifts = () => {
  const [selectedArea, setSelectedArea] = useState("");
  const [allAreas, setAllAreas] = useState<string[]>([]);
  const [listMap, setListMap] = useState<Map<string, number>>();
  const shiftList = useSelector<any, ShiftType[]>(
    (state: any) => state.allShiftReducer
  );

  useEffect(() => {
    const hashMap = new Map();
    const tempAreas: string[] = [];
    let tempSelectedArea = "";
    shiftList.map((data) => {
      if (hashMap.has(data.area)) {
        hashMap.set(data.area, hashMap.get(data.area) + 1);
      } else {
        if (tempSelectedArea === "") {
          tempSelectedArea = data.area;
        }
        tempAreas.push(data.area);
        hashMap.set(data.area, 1);
      }
    });
    setAllAreas(tempAreas);
    setListMap(hashMap);
    setSelectedArea(tempSelectedArea);
  }, [shiftList]);

  const changeArea = (data: string) => {
    setSelectedArea(data);
  };

  return (
    <SafeAreaView style={styles.avaShiftSAV}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.avaShiftContainer}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={allAreas}
          horizontal
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => changeArea(item)}
              activeOpacity={0.8}
              style={styles.avaShiftAreas}
            >
              <Text
                style={[
                  styles.avaShiftAreasText,
                  item === selectedArea
                    ? styles.avaShiftAreasTextSelected
                    : null,
                ]}
              >
                {item} ({listMap?.get(item)})
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.avaList}
        />
        <AllDaysList area={selectedArea} />
      </View>
    </SafeAreaView>
  );
};

export default AvailableShifts;
