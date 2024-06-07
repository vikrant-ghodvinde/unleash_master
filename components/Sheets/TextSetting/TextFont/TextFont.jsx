import { Dropdown } from "react-native-element-dropdown";
import { View, Text } from "react-native";
import fonts from "../../../../lib/json/fontFamily.json";
import { getContext } from "../../../../lib/context/context";
import i18n from "../../../../lib/translate/i18n";

const TextFont = () => {
  const { font, setFont } = getContext();

  return (
    <View>
      <Text className="mb-1 text-xs font-poppins-regular">
        {i18n.t("text-font")}
      </Text>
      <Dropdown
        data={fonts}
        labelField="name"
        valueField="font"
        value={font}
        onChange={(item) => {
          setFont(item.font);
        }}
        autoScroll={false}
        maxHeight={200}
        fontFamily="poppins-regular"
        selectedTextStyle={{ fontSize: 12 }}
        itemTextStyle={{ fontSize: 12 }}
        className="w-full h-11 px-2 border border-dark outline-none rounded-md"
      />
    </View>
  );
};

export default TextFont;
