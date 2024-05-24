import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AppLayout = ({ children, scrolled }) => {
  if (scrolled) {
    return (
      <View className="bg-white">
        <SafeAreaView>
          <ScrollView>
            <View className="px-3">{children}</View>
          </ScrollView>
        </SafeAreaView>
      </View>
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
