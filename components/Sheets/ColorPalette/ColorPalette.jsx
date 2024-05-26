import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import colorPalate from "../../../lib/json/colorPalate.json";
import { DEVICE_WIDTH } from "../../../styles/constants";
import { getContext } from "../../../lib/context/context";

const ColorPalette = ({ show, setShow }) => {
  const { colorPallet, setColorPallet } = getContext();
  return (
    <Sheet
      open={show}
      modal
      animation="medium"
      zIndex={100_000}
      dismissOnSnapToBottom
      onOpenChange={setShow}
      snapPointsMode="fit"
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle scale={0.5} scaleY={0.8} />
      <Sheet.Frame>
        <View className="w-full py-5 px-5">
          <Text className="text-dark font-poppins-medium">
            Color Palette
          </Text>
        </View>
        <ScrollView>
          <View className="relative px-5 pt-2">
            <View className="relative flex flex-row flex-wrap space-y-1 items-center justify-between">
              {colorPalate?.map((colors, index) => (
                <TouchableOpacity
                  key={index}
                  className="flex flex-row items-center rounded overflow-hidden"
                  style={{ width: (DEVICE_WIDTH - 58) / 4, height: 30 }}
                  onPress={() =>
                    setColorPallet({
                      ...colorPallet,
                      background: colors.color1,
                      color: colors.color2,
                      highlighter: colors.color3,
                    })
                  }
                >
                  <View
                    className="flex-1 w-full h-full"
                    style={{ backgroundColor: colors.color1 }}
                  ></View>
                  <View
                    className="flex-1 w-full h-full"
                    style={{ backgroundColor: colors.color2 }}
                  ></View>
                  <View
                    className="flex-1 w-full h-full"
                    style={{ backgroundColor: colors.color3 }}
                  ></View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default ColorPalette;
