import { useState } from "react";
import { Text, TouchableOpacity } from "react-native";

import { styles } from "./CustomButton.style";
import RedSpinner from "../../Icons/redSpinner.svg";
import { CustomButtonProps } from "./CustomButton.type";
import GreenSpinner from "../../Icons/greenSpinner.svg";

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  booked,
  onClick,
  isDisabled,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const passOnClick = () => {
    if (!isDisabled) {
      setIsLoading(true);
      setTimeout(() => {
        onClick();
        setIsLoading(false);
      }, 2000);
    }
  };

  return (
    <TouchableOpacity
      onPress={passOnClick}
      activeOpacity={isDisabled ? 1 : 0.8}
      style={[
        styles.customButton,
        booked ? styles.customButtonDanger : styles.customButtonSuccess,
        isDisabled ? styles.customButtonDisabled : null,
      ]}
    >
      {isLoading ? (
        booked ? (
          <RedSpinner width={10} height={10} />
        ) : (
          <GreenSpinner width={10} height={10} />
        )
      ) : (
        <Text
          style={[
            styles.customButtonText,
            booked
              ? styles.customButtonTextDanger
              : styles.customButtonTextSuccess,
            isDisabled ? styles.customButtonTextDisabled : null,
          ]}
        >
          {booked ? "Cancel" : "Book"}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
