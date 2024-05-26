import { View, Text, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { CARD_HEIGHT, CARD_WIDTH } from "../../../styles/constants";
import { getContext } from "../../../lib/context/context";
import { HeartIcon, RepliesIcon, ShareIcon } from "../../../icons";
import {
  fontSizeConfiguration,
  postBackgroundConfiguration,
  postCountConfiguration,
  socialMediaIcon,
  textAlignConfiguration,
} from "../../../lib/helpers/Configurations";

const PostCardFirst = () => {
  const {
    userImage,
    profileName,
    userName,
    socialMedia,
    postContent,
    postCounts,
    colorPallet,
    postBackground,
    textSettings,
    font,
  } = getContext();

  return (
    <View
      style={[styles.container, { backgroundColor: colorPallet.background }]}
    >
      <Image
        source={postBackgroundConfiguration(postBackground)}
        className="absolute top-0 left-0 w-full h-full opacity-5"
      />
      <View style={styles.card}>
        <View className="flex flex-row items-start justify-between mb-5">
          <View className="flex flex-row items-center gap-x-1">
            <View className="w-9 h-9 rounded-full bg-gray-100 -left-1 overflow-hidden">
              <Image
                source={{
                  uri: userImage,
                }}
                className="w-full h-full object-cover"
              />
            </View>
            <View>
              <Text
                className="font-poppins-semibold text-xs"
                style={{
                  color: colorPallet.color,
                }}
              >
                {profileName}
              </Text>
              <Text
                className="text-xxs font-poppins-regular"
                style={{
                  color: colorPallet.color,
                }}
              >
                @{userName.toLowerCase()}
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center">
            {socialMedia?.map((item) => (
              <Image
                key={item}
                source={socialMediaIcon(item)}
                alt={item}
                className="w-4 h-4 -mx-1"
              />
            ))}
          </View>
        </View>
        <View className="relative">
          <Text
            style={{
              color: colorPallet.color,
              fontSize: fontSizeConfiguration(textSettings.fontSize),
              textAlign: textAlignConfiguration(textSettings.textAlign),
              fontFamily: font,
            }}
          >
            {postContent}
          </Text>
        </View>
        {postCounts.enabled && (
          <View className="relative flex flex-row items-center space-x-3 mt-5">
            <View className="relative flex flex-row items-center space-x-0.5">
              <HeartIcon color={colorPallet.color} size={12} />
              <Text
                style={{
                  color: colorPallet.color,
                  fontSize: 12,
                  fontFamily: font,
                }}
              >
                {postCountConfiguration(postCounts.likes)}
              </Text>
            </View>
            <View className="relative flex flex-row items-center space-x-0.5">
              <RepliesIcon color={colorPallet.color} size={12} />
              <Text
                className="text-xs"
                style={{
                  color: colorPallet.color,
                  fontSize: 12,
                  fontFamily: font,
                }}
              >
                {postCountConfiguration(postCounts.replies)}
              </Text>
            </View>
            <View className="relative flex flex-row items-center space-x-0.5">
              <ShareIcon color={colorPallet.color} size={12} />
              <Text
                className="text-xs"
                style={{
                  color: colorPallet.color,
                  fontSize: 12,
                  fontFamily: font,
                }}
              >
                {postCountConfiguration(postCounts.shares)}
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#000",
  },
  card: {
    width: CARD_WIDTH * 0.9,
    height: "auto",
    // minHeight: CARD_HEIGHT * 0.45,
    maxHeight: CARD_HEIGHT * 0.9,
    borderRadius: CARD_WIDTH * 0.02,
    backgroundColor: "#fff",
    margin: "auto",
    padding: 8,
  },
});

export default PostCardFirst;
