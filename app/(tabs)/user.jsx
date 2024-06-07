import { View, Text } from "react-native";
import withTranslation from "../../lib/translate/withTranslation";

const User = () => {
  return (
    <View className="w-full h-full items-center justify-center">
      <Text className="font-poppins-regular">User</Text>
    </View>
  );
};

export default withTranslation(User);
