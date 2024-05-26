import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import { DEVICE_WIDTH } from "../../../styles/constants";
import { getContext } from "../../../lib/context/context";
import postBackgrounds from "../../../lib/json/postBackgrounds.json";
import { Image } from "expo-image";
import { postBackgroundConfiguration } from "../../../lib/helpers/Configurations";

const Backgrounds = ({ show, setShow }) => {
  const { colorPallet, setPostBackground } = getContext();
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
          <Text className="text-dark font-poppins-medium">
            Backgrounds
          </Text>
        </View>

        <ScrollView>
          <View className="w-full pb-8 px-5">
            <View className="relative flex flex-row flex-wrap space-y-3 items-center justify-between">
              {postBackgrounds?.map((background, index) => (
                <TouchableOpacity
                  key={index}
                  style={{
                    width: (DEVICE_WIDTH - 50) / 2,
                    height: 150,
                    backgroundColor: colorPallet.background,
                  }}
                  onPress={() => setPostBackground(background)}
                >
                  <Image
                    source={postBackgroundConfiguration(background)}
                    alt={background}
                    className="w-full h-full"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default Backgrounds;
