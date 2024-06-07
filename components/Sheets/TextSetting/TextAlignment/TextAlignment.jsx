import { Text, View } from "react-native";
import { ToggleGroup, styled } from "tamagui";
import { DEVICE_WIDTH } from "../../../../styles/constants";
import { getContext } from "../../../../lib/context/context";
import i18n from "../../../../lib/translate/i18n";

const TextAlignment = () => {
  const { textSettings, setTextSettings } = getContext();

  const ToggleGroupItem = styled(ToggleGroup.Item, {
    width: (DEVICE_WIDTH - 30) / 4,
    variants: {
      active: {
        true: {
          backgroundColor: "#000",
        },
      },
    },
  });
  return (
    <View>
      <Text className="mb-1 text-xs font-poppins-regular">
        {i18n.t("text-align")}
      </Text>
      <ToggleGroup
        type="single"
        value={textSettings.textAlign}
        onValueChange={(value) =>
          setTextSettings({ ...textSettings, textAlign: value })
        }
        style={{ backgroundColor: "#000" }}
      >
        <ToggleGroupItem value="left">
          <Text className="text-xxs font-poppins-regular">
            {i18n.t("left")}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="center">
          <Text className="text-xxs font-poppins-regular">
            {i18n.t("center")}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
          <Text className="text-xxs font-poppins-regular">
            {i18n.t("right")}
          </Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="justify">
          <Text className="text-xxs font-poppins-regular">
            {i18n.t("justify")}
          </Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
};

export default TextAlignment;
