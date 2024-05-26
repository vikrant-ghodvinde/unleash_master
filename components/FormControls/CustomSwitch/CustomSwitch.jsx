import { Stack, styled } from "@tamagui/core";
import { createSwitch } from "@tamagui/switch";
import { Text } from "react-native";
import { XStack } from "tamagui";

const Frame = styled(Stack, {
  width: 44,
  height: 22,
  padding: 2,
  borderRadius: 20,
  borderWidth: 1,
  backgroundColor: "silver",
  variants: {
    checked: {
      true: {
        borderColor: "#1f1f1f",
        backgroundColor: "#1f1f1f",
      },
      false: {
        borderColor: "#1f1f1f",
        backgroundColor: "transparent",
      },
    },
  },
  defaultVariants: {
    checked: false,
  },
});

const Thumb = styled(Stack, {
  width: 16,
  height: 16,
  borderRadius: 20,

  variants: {
    checked: {
      true: {
        backgroundColor: "#fff",
      },
      false: {
        backgroundColor: "#1f1f1f",
      },
    },
  },
});

export const Switch = createSwitch({
  Frame,
  Thumb,
});

export function CustomSwitch({
  label,
  id,
  onCheckedChange,
  defaultChecked,
  rightLabeled,
}) {
  return (
    <XStack alignItems="center" gap="$2">
      {!rightLabeled && (
        <Text htmlFor={id} className="text-xs font-poppins-regular">
          {label}
        </Text>
      )}
      <Switch
        id={id}
        onCheckedChange={onCheckedChange}
        defaultChecked={defaultChecked}
      >
        <Switch.Thumb animation="quick" />
      </Switch>
      {rightLabeled && (
        <Text htmlFor={id} className="text-xs font-poppins-regular">
          {label}
        </Text>
      )}
    </XStack>
  );
}
