import { View, Text } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import TextSize from "./TextSize/TextSize";
import TextAlignment from "./TextAlignment/TextAlignment";

const TextSetting = ({ show, setShow }) => {
  return (
    <Sheet
      open={show}
      modal
      animation="medium"
      zIndex={100_000}
      dismissOnSnapToBottom
      onOpenChange={setShow}
      snapPointsMode="percent"
      snapPoints={[80, 40]}
    >
      <Sheet.Overlay
        animation="lazy"
        enterStyle={{ opacity: 0 }}
        exitStyle={{ opacity: 0 }}
      />
      <Sheet.Handle scale={0.5} scaleY={0.8} />
      <Sheet.Frame>
        <View className="w-full py-5 px-5">
          <Text className="text-lg text-dark font-urbanist-medium">
            Text Settings
          </Text>
        </View>
        <ScrollView>
          <View className="relative px-5 pt-2 pb-8">
            <View className="relative space-y-4">
                <View className="relative">
                    <TextSize />
                </View>
                <View className="relative">
                    <TextAlignment />
                </View>
            </View>
          </View>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default TextSetting;
