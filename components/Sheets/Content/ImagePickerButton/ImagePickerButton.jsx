import { View, Text, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { UploadIcon } from "../../../../icons";
import { getContext } from "../../../../lib/context/context";

const ImagePickerButton = () => {
  const { setUserImage } = getContext();
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setUserImage(result.assets[0].uri);
    }
  };
  return (
    <View>
      <TouchableOpacity
        onPress={pickImageAsync}
        className="w-full py-4 px-6 rounded-md bg-black flex items-center justify-center"
      >
        <UploadIcon color="#fff" size={18} />
        <Text className="text-white text-center mt-1">Upload Image</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ImagePickerButton;