import { useRef } from "react";
import { Text, Pressable } from "react-native";
import * as Animatable from "react-native-animatable";

const CircleButton = ({ label, onPress }) => {
  const animationRef = useRef(null);
  const handlePress = () => {
    onPress ? onPress() : null;
    animationRef.current.pulse(500);
  };
  return (
    <Animatable.View
      ref={animationRef}
      className="w-14 h-14 rounded-full bg-white"
      style={{
        shadowColor: "#000",
        shadowOffset: { width: -1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 8,
      }}
    >
      <Pressable
        onPress={handlePress}
        className="w-full h-full items-center justify-center"
      >
        <Text>{label}</Text>
      </Pressable>
    </Animatable.View>
  );
};

export default CircleButton;
