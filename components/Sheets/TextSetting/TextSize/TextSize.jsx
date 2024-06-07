import { Text, View } from "react-native";
import { ToggleGroup, styled } from "tamagui";
import { DEVICE_WIDTH } from "../../../../styles/constants";
import { getContext } from "../../../../lib/context/context";
import i18n from "../../../../lib/translate/i18n";

const TextSize = () => {
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
      <Text className="mb-1 text-xs font-poppins-regular">{i18n.t("font-size")}</Text>
      <ToggleGroup
        type="single"
        value={textSettings.fontSize}
        onValueChange={(value) =>
          setTextSettings({ ...textSettings, fontSize: value })
        }
        style={{ backgroundColor: "#000" }}
      >
        <ToggleGroupItem value="small">
          <Text className="text-xxs font-poppins-regular">{i18n.t("small")}</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="medium">
          <Text className="text-xxs font-poppins-regular">{i18n.t("medium")}</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="large">
          <Text className="text-xxs font-poppins-regular">{i18n.t("large")}</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="extra-large">
          <Text className="text-xxs font-poppins-regular">{i18n.t("extra-large")}</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
};

export default TextSize;
