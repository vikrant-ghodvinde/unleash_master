import { View, Text, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { ArrowLeft } from "../../icons";
import { useRouter } from "expo-router";

const AppHeader = ({ label, backButton }) => {
  const router = useRouter();
  if (backButton) {
    return (
      <View className="relative w-full flex flex-row items-center justify-between mb-8">
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
      <View className="relative w-full flex flex-row items-center justify-center mb-8">
        <Text className="text-center text-2xl font-bold">{label}</Text>
      </View>
    );
  }
};

AppHeader.propTypes = {
  label: PropTypes.string,
};

export default AppHeader;
