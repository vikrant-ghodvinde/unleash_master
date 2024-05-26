import { View, Text, TouchableOpacity } from "react-native";
import { ArrowLeft } from "../../icons";
import { useRouter } from "expo-router";

const AppHeader = ({ label, backButton }) => {
  const router = useRouter();
  if (backButton) {
    return (
      <View className="relative py-8 w-full flex flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.back()}
          className="w-8 h-8 items-center justify-center bg-black rounded-full"
        >
          <ArrowLeft color="#fff" />
        </TouchableOpacity>
        <Text className="text-center text-2xl font-bold">{label}</Text>
        <View></View>
      </View>
    );
  } else {
    return (
      <View className="relative py-8 w-full flex flex-row items-center justify-center">
        <Text className="text-center text-2xl font-bold">{label}</Text>
      </View>
    );
  }
};

export default AppHeader;
