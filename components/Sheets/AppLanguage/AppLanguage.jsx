import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import { Image } from "expo-image";
import languageCode from "../../../lib/json/languageCode.json";

const AppLanguage = ({ show, setShow }) => {
  const handleChange = (code) => {
    setShow(false);
  };
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
          <Text className="text-dark font-poppins-medium">App Language</Text>
        </View>

        <ScrollView>
          <View className="w-full pb-8 px-5">
            <View className="relative">
              {languageCode?.map((item) => (
                <TouchableOpacity
                  key={item.name}
                  className="flex-row items-center space-x-4 py-2"
                  onPress={() => handleChange(item.languageCode)}
                >
                  <Image
                    // source={languageIconsConfiguration(item.icon)}
                    alt={item.languageCode}
                    className="w-5 h-5"
                  />
                  <View>
                    <Text className="text-xs font-poppins-medium">
                      {item.name.toLocaleLowerCase()}
                    </Text>
                    <Text className="text-xxs font-poppins-regular">
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </Sheet.Frame>
    </Sheet>
  );
};

export default AppLanguage;
