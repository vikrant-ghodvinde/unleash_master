import { View, Text } from "react-native";
import { Sheet } from "tamagui";

const TextSettings = ({ show, setShow }) => {
  return (
    <Sheet
      open={show}
      modal
      animation="medium"
      zIndex={100_000}
      dismissOnSnapToBottom
      onOpenChange={setShow}
      snapPoints={[50]}
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
            Content
          </Text>
        </View>
      </Sheet.Frame>
    </Sheet>
  );
};

export default TextSettings;
