import { Text, View } from "react-native";
import { ToggleGroup, styled } from "tamagui";
import { DEVICE_WIDTH } from "../../../../styles/constants";
import { getContext } from "../../../../lib/context/context";

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
      <Text className="mb-1 text-xs font-poppins-regular">Font Size</Text>
      <ToggleGroup
        type="single"
        value={textSettings.fontSize}
        onValueChange={(value) =>
          setTextSettings({ ...textSettings, fontSize: value })
        }
        style={{ backgroundColor: "#000" }}
      >
        <ToggleGroupItem value="small">
          <Text className="text-xxs font-poppins-regular">Small</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="medium">
          <Text className="text-xxs font-poppins-regular">Medium</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="large">
          <Text className="text-xxs font-poppins-regular">Large</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="extra-large">
          <Text className="text-xxs font-poppins-regular">Extra Large</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
};

export default TextSize;
