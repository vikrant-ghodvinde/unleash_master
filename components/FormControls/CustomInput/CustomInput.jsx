import { View, Text, TextInput } from "react-native";

const CustomInput = ({
  label,
  multiline,
  keyboardType,
  color = "#000",
  placeholder,
  onChange,
  value,
}) => {
  return (
    <View className="relative w-full">
      <Text className="mb-1 text-xs font-poppins-regular">{label}</Text>
      {!multiline ? (
        <TextInput
          keyboardType={keyboardType}
          cursorColor={color}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          className="w-full h-11 px-2 border border-dark outline-none rounded-md text-xs font-poppins-regular"
        />
      ) : (
        <TextInput
          keyboardType={keyboardType}
          multiline
          textAlignVertical="top"
          cursorColor={color}
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          className="w-full h-24 p-2 border border-dark outline-none rounded-md text-xs font-poppins-regular"
        />
      )}
    </View>
  );
};

export default CustomInput;
