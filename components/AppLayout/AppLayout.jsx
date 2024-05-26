import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "tamagui";

const AppLayout = ({ children, scrolled }) => {
  if (scrolled) {
    return (
      <ScrollView>
        <View className="bg-white">
          <SafeAreaView>
            <View className="pb-8 px-3">{children}</View>
          </SafeAreaView>
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View className="bg-white">
        <SafeAreaView>
          <View className="px-3">{children}</View>
        </SafeAreaView>
      </View>
    );
  }
};

export default AppLayout;
