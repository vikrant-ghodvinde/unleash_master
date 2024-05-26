import { Text, View } from "react-native";
import { ToggleGroup, styled } from "tamagui";
import { DEVICE_WIDTH } from "../../../../styles/constants";
import { getContext } from "../../../../lib/context/context";

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
      <Text className="mb-1.5">Text Align</Text>
      <ToggleGroup
        type="single"
        value={textSettings.textAlign}
        onValueChange={(value) =>
          setTextSettings({ ...textSettings, textAlign: value })
        }
        style={{ backgroundColor: "#000" }}
      >
        <ToggleGroupItem value="left">
          <Text className="text-xs">Left</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="center">
          <Text className="text-xs">Center</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
          <Text className="text-xs">Right</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="justify">
          <Text className="text-xs">Justify</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </View>
  );
};

export default TextAlignment;
