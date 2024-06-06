import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView, Sheet } from "tamagui";
import { DEVICE_WIDTH } from "../../../styles/constants";
import { getContext } from "../../../lib/context/context";
import postBackgrounds from "../../../lib/json/postBackgrounds.json";
import { Image } from "expo-image";
import { i18n } from "../../../lib/locales/translator";
import languageCode from "../../../lib/locales/languageCode.json";

const AppLanguage = ({ show, setShow }) => {
  const handleChange = (code) => {
    i18n.locale = code;
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
        <Text>Test</Text>
        <ScrollView>
          <View className="w-full pb-8 px-5">
            <View className="relative">
              {languageCode?.map((item) => (
                <TouchableOpacity onPress={() => handleChange(item.languageCode)}>
                  <Text>{item.name}</Text>
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
