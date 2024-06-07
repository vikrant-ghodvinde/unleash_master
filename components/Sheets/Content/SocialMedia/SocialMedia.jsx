import { Text } from "react-native";
import { ToggleGroup, styled } from "tamagui";
import { getContext } from "../../../../lib/context/context";
import { DEVICE_WIDTH } from "../../../../styles/constants";
import i18n from "../../../../lib/translate/i18n";

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
        <Text className="text-xxs font-poppins-regular">{i18n.t("twitter")}</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="linkedIn">
        <Text className="text-xxs font-poppins-regular">{i18n.t("linkedin")}</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="instagram">
        <Text className="text-xxs font-poppins-regular">{i18n.t("instagram")}</Text>
      </ToggleGroupItem>
      <ToggleGroupItem value="facebook">
        <Text className="text-xxs font-poppins-regular">{i18n.t("facebook")}</Text>
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default SocialMedia;
