import { Text } from "react-native";
import { ToggleGroup, styled } from "tamagui";
import { getContext } from "../../../../lib/context/context";
import { DEVICE_WIDTH } from "../../../../styles/constants";

const SocialMedia = () => {
  const { socialMedia, setSocialMedia } = getContext();

  const ToggleGroupItem = styled(ToggleGroup.Item, {
    width: (DEVICE_WIDTH - 30) / 4,
    variants: {
      active: {
        true: {
          backgroundColor: "#000",
        },
      },
    },
  });
  return (
    <ToggleGroup
      type="multiple"
      value={socialMedia}
      onValueChange={(value) => setSocialMedia(value)}
      style={{ backgroundColor: "#000" }}
    >
      <ToggleGroupItem value="twitter">
        <Text className="text-xxs font-poppins-regular">Twitter</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="linkedIn">
        <Text className="text-xxs font-poppins-regular">LinkedIn</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="instagram">
        <Text className="text-xxs font-poppins-regular">Instagram</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="facebook">
        <Text className="text-xxs font-poppins-regular">Facebook</Text>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default SocialMedia;
